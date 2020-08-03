import { useMemo } from 'react'

import { useCMS } from '@tinacms/react-core'
import {
    StrapiMediaStore,
    StrapiProvider,
    StrapiClient
} from 'react-tinacms-strapi'
import { TinaCMS, TinaProvider } from 'tinacms'

import Button from '../components/ui/button'

import '../styles/index.css'
export default function App({ Component, pageProps }) {
    console.log('Page props: ' + pageProps.preview)
    const cms = useMemo(
        () =>
            new TinaCMS({
                // Only enable for those with permissions
                toolbar: pageProps.preview,
                enabled: pageProps.preview,
                sidebar: pageProps.preview,
                apis: {
                    strapi: new StrapiClient(process.env.STRAPI_URL)
                },
                media: {
                    store: new StrapiMediaStore(process.env.STRAPI_URL)
                }
            }),
        []
    )
    return (
        <TinaProvider cms={cms}>
            <StrapiProvider onLogin={enterEditMode} onLogout={exitEditMode}>
                <EditButton />
                <Component {...pageProps} />
            </StrapiProvider>
        </TinaProvider>
    )
}

const enterEditMode = () => {
    return fetch(`/api/preview`).then(() => {
        window.location.href = window.location.pathname
    })
}

const exitEditMode = () => {
    return fetch(`/api/reset-preview`).then(() => {
        window.location.reload()
    })
}

export const EditButton = () => {
    const cms = useCMS()
    const isEnabled = cms.enabled ? `Stop Editing ` : `Edit this Site `

    function handleCmsToggle() {
        if (cms.enabled) {
            return cms.disable()
        }
        return cms.enable()
    }

    return <Button handler={handleCmsToggle}>{isEnabled}</Button>
}
