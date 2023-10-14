import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import Create from './Sampah/Create';

export default function DataSampah({ auth, title }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <Head title={title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <div className="btn btn-primary mb-3" onClick={() => document.getElementById('my_modal_3').showModal()}>Tambah Data</div>
                        <table id='myTable' className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
                            <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
                                <tr>
                                    <th scope='col' className='border p-2'>No</th>
                                    <th scope='col' className='border p-2'>Kategori Sampah</th>
                                    <th scope='col' className='border p-2'>Deskripsi</th>
                                    <th scope='col' className='border p-2'>Harga/kg</th>
                                    <th scope='col' className='border p-2 w-2/12'>Foto</th>
                                    <th scope='col' className='border p-2 w-2/12'>Aksi</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className='border p-2'>1</td>
                                    <td className='border p-2'>Plastik</td>
                                    <td className='border p-2'>Sampah ini banyak dijumpai di kota besar</td>
                                    <td className='border p-2'>Rp. 3.000</td>
                                    <td className='border p-2'>
                                        <img src="https://unsplash.com/photos/-4bD2p5zbdA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHBsYXN0aWt8ZW58MHx8fHwxNjk3MjY5Mjg4fDA&force=true&w=1920" alt="" />
                                    </td>
                                    <td className='border p-2'>
                                        <div className="flex">
                                            <div className="btn btn-warning mx-2">Edit</div>
                                            <div className="btn btn-error mx-2">Hapus</div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className='border p-2'>1</td>
                                    <td className='border p-2'>Plastik</td>
                                    <td className='border p-2'>Sampah ini banyak dijumpai di kota besar</td>
                                    <td className='border p-2'>Rp. 3.000</td>
                                    <td className='border p-2'>
                                        <img src="https://unsplash.com/photos/-4bD2p5zbdA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MTR8fHBsYXN0aWt8ZW58MHx8fHwxNjk3MjY5Mjg4fDA&force=true&w=1920" alt="" />
                                    </td>
                                    <td className='border p-2'>
                                        <div className="flex">
                                            <div className="btn btn-warning mx-2">Edit</div>
                                            <div className="btn btn-error mx-2">Hapus</div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box bg-white">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <Create/>
                    </div>
                </dialog>
            </div>
        </AuthenticatedLayout>
    );
}
