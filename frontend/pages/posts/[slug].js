import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

import { fetchGraphql } from 'react-tinacms-strapi'
import { useCMS, useForm, usePlugin } from 'tinacms'
import { InlineForm } from 'react-tinacms-inline'

import { DeleteWidget } from '../../widgets/deletePosts'
import Container from '../../components/container'
import Header from '../../components/header'
import Layout from '../../components/Layouts/layout'
import PostHeader from '../../components/BlogPosts/SinglePost/post-header'
import PostTitle from '../../components/BlogPosts/SinglePost/post-title'
import PostBody from '../../components/BlogPosts/SinglePost/post-body'

import { CMS_NAME } from '../../lib/constants'

export default function Post({ post: initialPost, preview }) {
    const cms = useCMS()
    cms.plugins.add(DeleteWidget)
    // 📝 https://tinacms.org/docs/plugins/forms

    // 💬 The config object for the fields.
    const formConfig = {
        id: initialPost.id,
        label: 'Blog Post',
        initialValues: initialPost,
        onSubmit: async (values) => {
            const saveMutation = `
                mutation UpdateBlogPost(
                    $id: ID!
                    $title: String
                    $content: String
                    $coverImageId: ID
                    $slug: String
                    $excerpt: String
                ) {
                    updateBlogPost(
                    input: {
                        where: { id: $id }
                        data: { title: $title, content: $content, coverImage: $coverImageId, slug: $slug, excerpt: $excerpt}
                    }
                        ) {
                        blogPost {
                            id
                        }
                    }
                }`
            const response = await cms.api.strapi.fetchGraphql(saveMutation, {
                id: values.id,
                title: values.title,
                content: values.content,
                slug: values.slug,
                excerpt: values.excerpt,
                coverImageId: cms.media.store.getFileId(values.coverImage.url)
            })
            if (response.data) {
                cms.alerts.success('Changes Saved')
            } else {
                cms.alerts.error('Error saving changes')
            }
        },
        // 🦙 You can just pass a string here for [name] as it's more like a YAML/JSON file,
        // and it knows what 'title' string is from the query, it's a reference to that.
        // More info at: https://final-form.org/

        fields: [
            {
                name: 'title',
                component: 'text',
                label: 'Title',
                description: 'Post title'
            },
            {
                name: 'slug',
                component: 'text',
                label: 'Slug',
                description: '/posts/your-slug-here'
            },
            {
                name: 'excerpt',
                component: 'textarea',
                label: 'Excerpt to Show',
                description: 'A few lines from the start of your post'
            }
        ]
    }

    // 🦙 Pass in post(data) -> all the data that is made editable by the form
    // (form) -> form object that the hook created from the deconstructed form array.

    // This turns your form into an inlineForm.
    // The form config -> https://final-form.org/docs/final-form/types/Config
    const [post, form] = useForm(formConfig)

    // Register the form with the CMS
    usePlugin(form)

    const router = useRouter()
    if (!router.isFallback && !post?.slug) {
        return <ErrorPage statusCode={404} />
    }
    return (
        <Layout preview={preview}>
            <Container>
                <Header />
                {router.isFallback ? (
                    <PostTitle>Loading…</PostTitle>
                ) : (
                    <>
                        <article className="mb-32">
                            <Head>
                                <title>
                                    {post.title} | Next.js Blog Example with{' '}
                                    {CMS_NAME}
                                </title>
                                <meta
                                    property="og:image"
                                    content={
                                        process.env.STRAPI_URL +
                                        post.coverImage.url
                                    }
                                />
                            </Head>
                            {/* 🦙 Wrap the blog in the inline form component with form prop */}
                            <InlineForm form={form} initialStatus={'active'}>
                                <PostHeader
                                    title={post.title}
                                    coverImage={
                                        process.env.STRAPI_URL +
                                        post.coverImage.url
                                    }
                                    date={post.date}
                                    author={post.author}
                                />
                                <PostBody content={post.content} />
                            </InlineForm>
                        </article>
                    </>
                )}
            </Container>
        </Layout>
    )
}

export async function getStaticProps({ params, preview, previewData }) {
    const postResults = await fetchGraphql(
        process.env.STRAPI_URL,
        `
        query{
        blogPosts(where: {slug: "${params.slug}"}){
            id
            title
            date
            slug
            content
            excerpt
            author {
                name
                picture { 
                    url
                }
            }
            coverImage {
                url
            }
        }
        }
    `
    )
    const post = postResults.data.blogPosts[0]

    if (preview) {
        return {
            props: {
                post: {
                    ...post
                },
                preview,
                ...previewData
            }
        }
    }
    return {
        props: {
            post: {
                ...post
            },
            preview: false
        }
    }
}

export async function getStaticPaths() {
    const postResults = await fetchGraphql(
        process.env.STRAPI_URL,
        `query{
            blogPosts{
                slug
            }
        }`
    )

    return {
        paths: postResults.data.blogPosts.map((post) => {
            return {
                params: {
                    slug: post.slug
                }
            }
        }),
        fallback: false
    }
}
