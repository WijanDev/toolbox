import Header from './Header'
import Footer from './Footer'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative flex min-h-screen flex-col bg-background font-sans antialiased">
            <Header />
            <main className="flex-1 p-4">{children}</main>
            <Footer />
        </div>
    )
}
