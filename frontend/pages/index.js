import Head from 'next/head'
import { fetchGraphql } from 'react-tinacms-strapi'

import Container from '../components/ui/container'
import BlogPosts from '../components/blog-posts'
import Layout from '../components/layouts/layout'
import Header from '../components/globals/header'

export default function Index({ allPosts }) {
    return (
        <>
            <Layout>
                <Head />
                <Header />
                <Container>
                    <h1 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                        A Website
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed a enim ac turpis maximus auctor pharetra non tellus.
                        Vivamus tincidunt molestie nisi, efficitur vestibulum
                        libero fermentum quis. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                    </p>
                    <p>
                        Nullam non rhoncus sapien, at luctus ante. Curabitur in
                        dapibus nulla. Vestibulum mi dolor, egestas a varius ac,
                        sodales ac metus. In et eros semper enim finibus egestas
                        non et massa. Nam eget fringilla elit. Quisque id leo
                        tempus, consectetur nunc ut, varius ligula. Vestibulum
                        ut orci efficitur, finibus risus quis, tempus erat. Sed
                        finibus dapibus sem, non lobortis erat congue convallis.
                        Suspendisse fringilla, massa quis cursus scelerisque,
                        dolor nulla convallis sem, quis pretium arcu enim eget
                        dolor.
                    </p>
                    <h2 className="mb-8 text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                        Latest News
                    </h2>
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
