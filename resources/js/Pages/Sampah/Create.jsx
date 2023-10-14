import { useEffect } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import FileInput from '@/Components/FileInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Create({isVisible}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        jenis_sampah: '',
        deskripsi: '',
        harga: '',
        foto: '',
    });

    const submit = (e) => {
        e.preventDefault()
        post(route('sampah.store'));
        isVisible(false)
    };

    return (
            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="jenis_sampah" value="Jenis Sampah" />

                    <TextInput
                        id="jenis_sampah"
                        name="jenis_sampah"
                        value={data.jenis_sampah}
                        className="mt-1 block w-full"
                        autoComplete="jenis_sampah"
                        isFocused={true}
                        onChange={(e) => setData('jenis_sampah', e.target.value)}
                        required
                    />

                    <InputError message={errors.jenis_sampah} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="deskripsi" value="Deskripsi" />

                    <TextInput
                        id="deskripsi"
                        name="deskripsi"
                        value={data.deskripsi}
                        className="mt-1 block w-full"
                        autoComplete="deskripsi"
                        isFocused={true}
                        onChange={(e) => setData('deskripsi', e.target.value)}
                        required
                    />

                    <InputError message={errors.deskripsi} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="harga" value="Harga" />

                    <TextInput
                        id="harga"
                        name="harga"
                        value={data.harga}
                        className="mt-1 block w-full"
                        autoComplete="harga"
                        isFocused={true}
                        onChange={(e) => setData('harga', e.target.value)}
                        required
                    />

                    <InputError message={errors.harga} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="foto" value="Foto" />

                    <FileInput
                        className="mt-1 block w-full"
                        name="foto"
                        accept="image/*"
                        errors={errors.foto}
                        value={data.foto}
                        onChange={foto => setData('foto', foto)}
                    />

                    <InputError message={errors.foto} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Tambah DAta
                    </PrimaryButton>
                </div>
            </form>
    );
}
