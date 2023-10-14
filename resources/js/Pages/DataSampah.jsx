import ConfirmationModal from '@/Components/ConfirmationModal';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link, router } from '@inertiajs/react';
import { useState } from 'react';
import Create from './Sampah/Create';

export default function DataSampah({ auth, title, dataSampah, assetPath }) {
    const [showModal, setShowModal] = useState(false);
    const [itemToDelete, setItemToDelete] = useState(null);
    const handleDelete = (item) => {
        setItemToDelete(item)
        setShowModal(true);
    }

    const confirmDelete = () => {
        router.delete(route('sampah.destroy', itemToDelete.id), {
            onSuccess: () => {
                setShowModal(false)
            }
        })
    }

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">{title}</h2>}
        >
            <Head title={title} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-4">
                        <Link className='btn btn-primary mb-3' href={route('sampah.create')}>Tambah Data</Link>
                        {/* <div className="btn btn-primary mb-3" onClick={() => document.getElementById('my_modal_3').showModal()}>Tambah Data</div> */}
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
                                {dataSampah && dataSampah.map((sampah, index) => {
                                    return (
                                        <tr key={sampah.id}>
                                            <td className='border p-2'>{index + 1}</td>
                                            <td className='border p-2'>{sampah.jenis_sampah}</td>
                                            <td className='border p-2'>{sampah.deskripsi}</td>
                                            <td className='border p-2'>Rp. {sampah.harga}</td>
                                            <td className='border p-2'>
                                                <img src={assetPath + '/' + sampah.foto} alt="" />
                                            </td>
                                            <td className='border p-2'>
                                                <div className="flex">
                                                    <Link href={route('sampah.edit', sampah.id)} className="btn btn-warning mx-2">Edit</Link>
                                                    <div className="btn btn-error mx-2" onClick={() => handleDelete(sampah)}>Hapus</div>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        {itemToDelete && 
                        <ConfirmationModal isOpen={showModal} onCancel={() => setShowModal(false)} onConfirmation={confirmDelete} data={itemToDelete.jenis_sampah} />
                        }
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
