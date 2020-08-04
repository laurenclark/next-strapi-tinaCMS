import Head from 'next/head'
import { fetchGraphql } from 'react-tinacms-strapi'

import { CMS_NAME } from '../lib/constants'

import Container from '../components/container'
import BlogPosts from '../components/BlogPosts'
import Layout from '../components/Layouts/layout'

export default function Index({ allPosts }) {
    return (
        <>
            <Layout>
                <Head>
                    <title>
                        Next.js/Strapi & TinaCMS Example with {CMS_NAME}
                    </title>
                </Head>
                <Container>
                    <h2>A Website</h2>
                    <p>With some content...</p>
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
