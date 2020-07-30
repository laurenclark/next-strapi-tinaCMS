import { InlineWysiwyg } from 'react-tinacms-editor'
import ReactMarkdown from 'react-markdown'

export default function PostBody({ content }) {
    return (
        <div className="max-w-2xl mx-auto">
            <InlineWysiwyg name="content" format="markdown">
                <ReactMarkdown source={content} />
            </InlineWysiwyg>
        </div>
    )
}
