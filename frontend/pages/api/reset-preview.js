// Whenever we call this API, we will clear the preview data, and the user will become unauthenticated.

export default (_req, res) => {
    res.clearPreviewData()
    res.status(200).end()
}
