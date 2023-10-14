import { Head, Link } from "@inertiajs/react"

const Homepage = (props) => {
    return (
        <>
            <Head title={props.title} />
            <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://unsplash.com/photos/qph7tJfcDys/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjB8fGR1bXB8ZW58MHx8fHwxNjk3MjU2MDkyfDA&force=true&w=1920)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                    <p className="mb-5">Jangan pandang sampahmu tidak berguna, kamu sekarang bisa jadikan sampahmu menjadi uang tambahan</p>
                    <Link href={route('setor')} className="btn btn-warning text-info-content w-full">Hitung Sampah</Link>
                    <Link href={route('login')} className="btn btn-warning text-info-content w-full mt-3">Login Admin</Link>
                </div>
            </div>
        </div>

        </>
    )
}

export default Homepage