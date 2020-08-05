import Footer from '../globals/footer'
import Meta from '../utility/meta'

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <div className="min-h-screen">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}
