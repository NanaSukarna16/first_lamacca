import { useForm } from "@inertiajs/inertia-react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";

export default function KategoriForm(props) {
  const isEditing = props.kategori ? true : false;

  const { data, setData, errors, processing, submit } = useForm(
    isEditing ? props.kategori : { nama: "" }
  );

  function onSubmit(e) {
    e.preventDefault();

    const submitUrl = isEditing
      ? route("kategori.update", props.kategori.id)
      : route("kategori.store");

    const method = isEditing ? "patch" : "post";

    submit(method, submitUrl);
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <InputLabel forInput="nama" value="Nama Kategori" />

        <TextInput
          type="text"
          name="nama"
          value={data.nama}
          className="mt-1 block w-full"
          autoComplete="username"
          isFocused={true}
          handleChange={(e) => setData("nama", e.target.value)}
        />

        <InputError message={errors.nama} className="mt-2" />
      </div>

      <div className="flex items-center justify-end mt-4">
        <PrimaryButton processing={processing}>simpan</PrimaryButton>
      </div>
    </form>
  );
}
