import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SelectInput from '@/Components/SelectInput';

export default function Login({ sampah }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        berat: 0,
        jenis_sampah: '',
        total_harga: 0
    });

    const handleProcess = () => {
        let total = data.berat * data.jenis_sampah
        setData('total_harga', total)
        console.log(total);
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    return (
        <GuestLayout>
            <Head title="Kalkulator" />

            <form onSubmit={submit}>
                <div className="flex-col"></div>
                <div>
                    <InputLabel htmlFor="berat" value="Berat (kg)" />

                    <TextInput
                        id="berat"
                        type="text"
                        name="berat"
                        value={data.berat}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData('berat', e.target.value)}
                    />

                    <InputError message={errors.berat} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="jenis_sampah" value="Jenis Sampah" />

                    <SelectInput
                        className="mt-1 block w-full"
                        name="jenis_sampah"
                        errors={errors.jenis_sampah}
                        value={data.jenis_sampah}
                        onChange={e => {
                            setData('jenis_sampah', e.target.value)
                        }}>
                        {sampah && sampah.map(item => {
                            return (
                                <option key={item.id} value={item.harga}>{item.jenis_sampah}</option>
                            )
                        })}
                    </SelectInput>

                    <InputError message={errors.jenis_sampah} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button className='btn btn-block btn-primary' onClick={e => handleProcess()}>Hitung</button>
                </div>
            </form>

            {data.total_harga &&
                <div className='alert mt-3'>
                    {data.total_harga}
                </div>
            }
        </GuestLayout>
    );
}
