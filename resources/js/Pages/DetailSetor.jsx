import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import SelectInput from '@/Components/SelectInput';

export default function DetailSetoran({ sampah }) {
    console.log(sampah);
    const { data, setData, post, processing, errors, setError, reset } = useForm({
        berat: 0,
        jenis_sampah: '',
    });

    const validation = () =>{
        if (data.berat <= 0) {
            return setError('berat', 'Berat harus lebih dari 0')
        }
        if (isNaN(data.berat)) {
            return setError('berat', 'Berat harus berupa angka')
        }
        if(data.berat.index(0) == 0){
            return setError('berat', 'Berat harus berupa angka')
        }
        return setError('berat', '')
    }

    const submit = (e) => {
        e.preventDefault();
        validation()
        return route('setor');
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
                        {sampah.length == 0 && <option>Tidak ada data</option>}
                    </SelectInput>

                    <InputError message={errors.jenis_sampah} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <button className='btn btn-block btn-primary'>Hitung</button>
                </div>
            </form>
        </GuestLayout>
    );
}
