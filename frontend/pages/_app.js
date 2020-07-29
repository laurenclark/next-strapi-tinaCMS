import '../styles/index.css'

import {
    StrapiMediaStore,
    StrapiProvider,
    StrapiClient
} from 'react-tinacms-strapi'
import { TinaCMS, TinaProvider } from 'tinacms'

import { useMemo } from 'react'

export default function App({ Component, pageProps }) {
    const cms = useMemo(
        () =>
            new TinaCMS({
                toolbar: true,
                enabled: true,
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
