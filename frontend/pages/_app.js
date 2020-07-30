import { useMemo } from 'react'

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
                toolbar: pageProps.preview,
                enabled: pageProps.preview,
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
            <StrapiProvider
                onLogin={() => {
                    /* TODO */
                }}
                onLogout={() => {
                    /* TODO*/
                }}
            >
                <Component {...pageProps} />
            </StrapiProvider>
        </TinaProvider>
    )
}
