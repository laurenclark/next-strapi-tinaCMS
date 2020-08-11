import { useMemo } from 'react'

import { useCMS } from '@tinacms/react-core'
import {
    StrapiMediaStore,
    StrapiProvider,
    StrapiClient
} from 'react-tinacms-strapi'
import { TinaCMS, TinaProvider } from 'tinacms'

import '../styles/index.css'

export default function App({ Component, pageProps }) {
    const cms = useMemo(
        () =>
            new TinaCMS({
                // Only enable for those with permissions
                enabled: pageProps.preview,
                toolbar: pageProps.preview,
                sidebar: pageProps.preview && {
                    position: 'overlay'
                },
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
                <Component {...pageProps} />
            </StrapiProvider>
        </TinaProvider>
    )
}
