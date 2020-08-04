import Button from '../components/ui/button'

function DeletePostHandler() {}

function DeletePostButton() {
    return <Button handler={() => alert('Deleted Post!')}>Delete Post</Button>
}

export const DeleteWidget = {
    __type: 'toolbar:widget',
    name: 'deletePost',
    weight: 5,
    component: DeletePostButton
}
