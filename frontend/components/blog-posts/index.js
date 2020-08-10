import PostPreview from './single-post/post-preview'

export default function BlogPosts({ posts }) {
    return (
        <section>
            <div className="grid md:grid-cols-2 md:col-gap-16 lg:col-gap-16 row-gap-20 md:row-gap-32 mb-32">
                {posts.map((post) => (
                    <PostPreview
                        key={post.slug}
                        title={post.title}
                        coverImage={
                            process.env.STRAPI_URL + post?.coverImage?.url
                        }
                        date={post?.date}
                        author={post?.author}
                        slug={post?.slug}
                        excerpt={post?.excerpt}
                    />
                ))}
            </div>
        </section>
    )
}
