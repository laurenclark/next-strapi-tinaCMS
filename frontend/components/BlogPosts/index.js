import PostPreview from './SinglePost/post-preview'

export default function BlogPosts({ posts }) {
    return (
        <section>
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                Blog Posts
            </h2>
            <div className="grid md:grid-cols-2 md:col-gap-16 lg:col-gap-16 row-gap-20 md:row-gap-32 mb-32">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={
                            process.env.STRAPI_URL + post.coverImage.url
                        }
                        date={post.date}
                        author={post.author}
                        slug={post.slug}
                        excerpt={post.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}
