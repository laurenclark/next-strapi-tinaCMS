import { InlineWysiwyg } from 'react-tinacms-editor'
import ReactMarkdown from 'react-markdown'
import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
    return (
        <div
            className={`max-w-2xl mx-auto ${markdownStyles['editormd-styles']}`}
        >
            <InlineWysiwyg
                name="content"
                format="markdown"
                className={markdownStyles['wysiwyg-wrapper']}
            >
                <ReactMarkdown
                    className={markdownStyles['markdown']}
                    source={content}
                />
            </InlineWysiwyg>
        </div>
    )
}
