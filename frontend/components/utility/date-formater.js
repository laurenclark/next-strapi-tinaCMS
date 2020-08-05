import { parseISO, format } from 'date-fns'

export default function DateFormater({ dateString }) {
    const date = parseISO(dateString)
    return (
        <time dateTime={dateString}>
            <em>{format(date, 'dd LLLL yyyy')}</em>
        </time>
    )
}
