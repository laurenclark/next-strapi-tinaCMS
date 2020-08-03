import { InlineWysiwyg } from 'react-tinacms-editor'
import ReactMarkdown from 'react-markdown'
import markdownStyles from '../../markdown-styles.module.css'

export default function PostBody({ content }) {
    return (
        <div className="max-w-2xl mx-auto">
            <InlineWysiwyg name="content" format="markdown">
                <ReactMarkdown
                    className={markdownStyles['markdown']}
                    source={content}
                />
            </InlineWysiwyg>
        </div>
    )
}
