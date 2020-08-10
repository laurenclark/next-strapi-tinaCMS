import cn from 'classnames'

export default function CoverImage({ title, src, slug }) {
    const image = (
        <img
            src={src}
            alt={`Cover Image for ${title}`}
            className={cn('shadow-small', {
                'hover:shadow-medium transition-shadow duration-200': slug
            })}
        />
    )
    return <div className="-mx-5 sm:mx-0">{image}</div>
}
