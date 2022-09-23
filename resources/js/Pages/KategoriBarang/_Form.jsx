import { useForm } from "@inertiajs/inertia-react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import classNames from "classnames";

export default function KategoriBarangForm(props) {

    //  cek apakah kita melakukan cretae atau edit
    const isEditing = props.kategori_barang ? true : false;

    // Untuk create insialisasi data di lakukan manual, 
    // unttuk edit insialaisasi data di lakukan dengan mengambil data kategori_barang dari controller
    const { data, setData, errors, processing, submit } = useForm(isEditing ? props.kategori_barang : {
        kode: "",
        nama: "",
        id_kategori: undefined
    });

    function onSubmit(e) {
        e.preventDefault();
        // untuk cerate kita menggunakan route post
        //  edit menggunakan route update

        const submitUrl = isEditing ? route('kategori-barang.update', props.kategori_barang.id) :
            route('kategori-barang.store')
        // untuk create post
        // untuk edit patch


        submit(isEditing ? 'patch' : 'post', submitUrl);
        post(route('kategori-barang.store'))
    }


    return (
        <form onSubmit={onSubmit} className="space-y-3">
            <div>
                <InputLabel forInput="kode" value="Kode Kategori Barang" />

                <TextInput
                    type="text"
                    name="kode"
                    value={data.kode}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={(e) => setData("kode", e.target.value)}
                />

                <InputError message={errors.kode} className="mt-2" />
            </div>

            <div>
                <InputLabel forInput="nama" value="Nama Kategori Barang" />

                <TextInput
                    type="text"
                    name="nama"
                    value={data.nama}
                    className="mt-1 block w-full"
                    isFocused={true}
                    handleChange={(e) => setData("nama", e.target.value)}
                />

                <InputError message={errors.nama} className="mt-2" />


            </div>

            <div>
                <Listbox value={data.id} onChange={value => setData('id_kategori', value)}>
                    {({ open }) => (
                        <>
                            <Listbox.Label className="block text-sm font-medium text-gray-700">Kategori</Listbox.Label>
                            <div className="relative mt-1">
                                <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                                    <span className="block truncate">{props.kategori.find(item => item.id === data.id_kategori)?.nama || "Pilih Katgeori"}</span>
                                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                        <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </span>
                                </Listbox.Button>

                                <Transition
                                    show={open}
                                    as={Fragment}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                        {props.kategori.map((item) => (
                                            <Listbox.Option
                                                key={item.id}
                                                className={({ active }) =>
                                                    classNames(
                                                        active ? 'text-white bg-indigo-600' : 'text-gray-900',
                                                        'relative cursor-default select-none py-2 pl-3 pr-9'
                                                    )
                                                }
                                                value={item.id}
                                            >
                                                {({ selected, active }) => (
                                                    <>
                                                        <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                                                            {item.nama}
                                                        </span>

                                                        {selected ? (
                                                            <span
                                                                className={classNames(
                                                                    active ? 'text-white' : 'text-indigo-600',
                                                                    'absolute inset-y-0 right-0 flex items-center pr-4'
                                                                )}
                                                            >
                                                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                                                            </span>
                                                        ) : null}
                                                    </>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
            </div>

            <div className="flex items-center justify-end mt-4">
                <PrimaryButton processing={false}>simpan</PrimaryButton>
            </div>
        </form>
    )
}