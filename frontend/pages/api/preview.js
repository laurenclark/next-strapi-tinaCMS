import { STRAPI_JWT } from 'react-tinacms-strapi'

// 💬 Static Generation is useful when your pages fetch data from a headless CMS. However, it’s not ideal when you’re writing a draft on your headless CMS and want to preview the draft immediately on your page. You’d want Next.js to render these pages at request time instead of build time and fetch the draft content instead of the published content. You’d want Next.js to bypass Static Generation only for this specific case.

// Upon authenticating, Strapi will pass us a JWT. We store this JWT in previewData from where we will pull it anytime we want to call a Strapi API.
const previewHandler = (req, res) => {
    const previewData = {
        strapi_jwt: req.cookies[STRAPI_JWT]
    }

    res.setPreviewData(previewData)
    res.status(200).end()
    window.history.back()
}

export default previewHandler
