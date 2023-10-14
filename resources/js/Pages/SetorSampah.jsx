import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SelectInput from '@/Components/SelectInput';

export default function Login({ dataPenyetor }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        nama_penyetor: '',
        alamat: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('setor.create'));
    };

    return (
        <GuestLayout>
            <Head title="Kalkulator" />
            <form onSubmit={submit}>
                <div className="flex-col"></div>
                <div>
                    <InputLabel htmlFor="nama_penyetor" value="Nama Penyetor" />

                    <TextInput
                        id="nama_penyetor"
                        type="text"
                        name="nama_penyetor"
                        value={data.nama_penyetor}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('nama_penyetor', e.target.value)}
                    />

                    <InputError message={errors.nama_penyetor} className="mt-2" />
                </div>
                <div className='mt-3'>
                    <InputLabel htmlFor="alamat" value="Alamat Penyetor" />

                    <TextInput
                        id="alamat"
                        type="text"
                        name="alamat"
                        value={data.alamat}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('alamat', e.target.value)}
                    />

                    <InputError message={errors.nama_penyetor} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button className='btn btn-block btn-primary'>Masuk ke Perhitungan</button>
                </div>
            </form>
            <table id='myTable' className='w-full text-sm text-left text-gray-500 mt-3 dark:text-gray-400'>
                <thead className='text-xs text-gray-700 uppercase dark:text-gray-400'>
                    <tr>
                        <th scope='col' className='border p-2'>No</th>
                        <th scope='col' className='border p-2'>Nama Penyetor</th>
                        <th scope='col' className='border p-2'>Alamat</th>
                        <th scope='col' className='border p-2 w-2/12'>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {dataPenyetor && dataPenyetor.map((penyetor, index) => {
                        return (
                            <tr key={penyetor.id}>
                                <td className='border p-2'>{index + 1}</td>
                                <td className='border p-2'>{penyetor.nama_penyetor}</td>
                                <td className='border p-2'>{penyetor.alamat}</td>
                                <td className='border p-2'>
                                    <div className="flex">
                                        <Link href={route('setor.detail', penyetor.id)} className="btn btn-warning mx-2">Setor</Link>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </GuestLayout>
    );
}
