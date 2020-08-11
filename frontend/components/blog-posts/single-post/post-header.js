import { InlineTextarea, InlineImage } from 'react-tinacms-inline'
import { useCMS } from 'tinacms'

import PostTitle from './post-title'
import DateFormater from '../../utility/date-formater'
import Avatar from '../../author/avatar'
import CoverImage from '../../ui/cover-image'

export default function PostHeader({ title, coverImage, date, author }) {
    const cms = useCMS()
    return (
        <>
            <PostTitle>
                <InlineTextarea name="title" />
            </PostTitle>
            <div className="hidden md:block md:mb-12">
                {author && (
                    <Avatar
                        name={author.name}
                        picture={process.env.STRAPI_URL + author.picture.url}
                    />
                )}
            </div>
            <div className="mb-8 md:mb-16 -mx-5 sm:mx-0">
                {/*  💬 Here we used the useCMS hook to get access to our CMS object. In
                _app.js we've attached a Strapi media store to this object, and we need 
                access to that here to help us resolve image urls. */}
                {coverImage && (
                    <InlineImage
                        name="coverImage.url"
                        previewSrc={(formValues) => {
                            process.env.STRAPI_URL +
                                cms.media.store.getFilePath(
                                    formValues.coverImage.url
                                )
                        }}
                        uploadDir={() => '/uploads'}
                        parse={(filename) => {
                            return `/uploads/${filename}`
                        }}
                    >
                        {() => (
                            <img
                                src={coverImage}
                                alt={`Cover Image for ${title}`}
                            />
                        )}
                    </InlineImage>
                )}
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    {author && (
                        <Avatar
                            name={author.name}
                            picture={
                                process.env.STRAPI_URL + author.picture.url
                            }
                        />
                    )}
                </div>
                <div className="mb-6 text-lg">
                    <DateFormater dateString={date} />
                </div>
            </div>
        </>
    )
}
