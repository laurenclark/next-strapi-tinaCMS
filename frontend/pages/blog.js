import Head from 'next/head'
import { fetchGraphql } from 'react-tinacms-strapi'

import Container from '../components/ui/container'
import BlogPosts from '../components/blog-posts'
import Layout from '../components/layouts/layout'
import Header from '../components/globals/header'

export default function Blogw({ allPosts }) {
    return (
        <>
            <Layout>
                <Head />
                <Header />
                <Container>
                    <h1 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                        Blog Posts
                    </h1>
                    <BlogPosts posts={allPosts} />
                </Container>
            </Layout>
        </>
    )
}

export async function getStaticProps({ params, preview, previewData }) {
    const postResults = await fetchGraphql(
        process.env.STRAPI_URL,
        `query{
            blogPosts {
                title
                date
                slug
                author {
                    name
                picture { 
                    url
                    }
                }
                excerpt
                coverImage {
                    url
                }
            }
        }`
    )

    if (preview) {
        return {
            props: {
                allPosts: postResults.data.blogPosts,
                preview,
                ...previewData
            }
        }
    }

    return {
        props: { allPosts: postResults.data.blogPosts, preview: false }
    }
}
