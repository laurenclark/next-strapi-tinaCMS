import cn from 'classnames'

export default function CoverImage({ title, src, slug }) {
    return (
        slug && (
            <div className="-mx-5 sm:mx-0">
                <img
                    src={src}
                    alt={`Cover Image for "${title}"`}
                    className={cn('shadow-small', {
                        'hover:shadow-medium transition-shadow duration-200': slug
                    })}
                />
            </div>
        )
    )
}
