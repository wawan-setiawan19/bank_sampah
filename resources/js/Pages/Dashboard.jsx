import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Home page</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://unsplash.com/photos/gv49ce17_NY/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MjN8fGR1bXB8ZW58MHx8fHwxNjk3MjY1ODI4fDA&force=true&w=1920" className="max-w-sm rounded-lg shadow-2xl" />
                                <div>
                                    <h1 className="text-5xl text-primary">Selamat datang, <span className='font-bold'>{auth.user.name}</span>!</h1>
                                    <p className="py-6">Mari kita tambah jenis kategori sampah, supaya teman-teman relawan kebersihan semakin paham tentang sampah yang mereka sumbang</p>
                                    <button className="btn btn-primary btn-block">Tambah Sampah</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
