import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import TextInput from '@/Components/TextInput'
import { Transition } from '@headlessui/react'
import { useForm, usePage } from '@inertiajs/react'
import React from 'react'


const Create = ({ className }) => {
    const user = usePage().props.auth.user
    const { data, setData, errors, post, processing, recentlySuccessful } = useForm({
        id_pemilik: user.id,
        merk: '',
        tipe: '',
        tahun: '',
        bahan_bakar: 'Bensin',
        transmisi: 'Automatic',
        nopol: '',
        picture: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('sampah.store'));
    };
    return (
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="id_pemilik" value="Id Pemilik" />

                    <TextInput
                        id="id_pemilik"
                        className="mt-1 block w-full"
                        value={data.id_pemilik}
                        onChange={(e) => setData('id_pemilik', e.target.value)}
                        required
                        isFocused
                        disabled
                    />

                    <InputError className="mt-2" message={errors.id_pemilik} />
                </div>
                <div>
                    <InputLabel htmlFor="merk" value="Merk" />

                    <TextInput
                        id="merk"
                        className="mt-1 block w-full"
                        value={data.merk}
                        onChange={(e) => setData('merk', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.merk} />
                </div>
                <div>
                    <InputLabel htmlFor="tipe" value="Tipe" />

                    <TextInput
                        id="tipe"
                        className="mt-1 block w-full"
                        value={data.tipe}
                        onChange={(e) => setData('tipe', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.tipe} />
                </div>
                <div>
                    <InputLabel htmlFor="tahun" value="Tahun" />

                    <TextInput
                        id="tahun"
                        className="mt-1 block w-full"
                        value={data.tahun}
                        onChange={(e) => setData('tahun', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.tahun} />
                </div>
                <div>
                    <InputLabel htmlFor="nopol" value="No Polisi" />

                    <TextInput
                        id="nopol"
                        className="mt-1 block w-full"
                        value={data.nopol}
                        onChange={(e) => setData('nopol', e.target.value)}
                        required
                        isFocused
                    />

                    <InputError className="mt-2" message={errors.nopol} />
                </div>
                <div>
                    <InputLabel htmlFor="picture" value="Gambar Mobil" />

                    <FileInput
                        className="mt-1 block w-full"
                        name="picture"
                        accept="image/*"
                        errors={errors.picture}
                        value={data.picture}
                        onChange={picture => setData('picture', picture)}
                    />

                    <InputError className="mt-2" message={errors.picture} />
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>

                    <Transition
                        show={recentlySuccessful}
                        enter="transition ease-in-out"
                        enterFrom="opacity-0"
                        leave="transition ease-in-out"
                        leaveTo="opacity-0"
                    >
                        <p className="text-sm text-gray-600">Saved.</p>
                    </Transition>
                </div>
            </form>
    )
}

export default Create