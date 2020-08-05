import Link from 'next/link'
import Avatar from '../../author/avatar'
import CoverImage from '../../ui/cover-image'
import DateFormater from '../../utility/date-formater'

export default function PostPreview({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug
}) {
    const authorPicture = process.env.STRAPI_URL + author.picture.url
    return (
        <div>
            <div className="mb-5">
                <CoverImage slug={slug} title={title} src={coverImage} />
            </div>
            <h3 className="text-3xl mb-3 leading-snug">
                <Link as={`/posts/${slug}`} href="/posts/[slug]">
                    <a className="hover:underline">{title}</a>
                </Link>
            </h3>
            <div className="text-lg mb-4">
                <DateFormater dateString={date} />
            </div>
            <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
            <Avatar name={author.name} picture={authorPicture} />
        </div>
    )
}
