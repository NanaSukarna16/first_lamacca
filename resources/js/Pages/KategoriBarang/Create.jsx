
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import KategoriBarangForm from "./_Form";

export default function KategoriBarangCreate(props) {

    return (
        <AuthenticatedLayout auth={props.auth} errors={props.errors}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                    Tambah Kategori Barang
                </h2>
            }
        >
            <div className="py-12">
                <div className="bg-white shadow-sm sm:rounded-lg">
                    <div className="p-6 bg-white border-b border-gray-200">
                        {props.can_create ? (
                            <KategoriBarangForm kategori={props.kategori} />
                        ) : (
                            <h1>Hannya Admin Yang dapat Menambahkan Kategori Barang</h1>
                        )
                        }

                    </div>
                </div>
            </div>

        </AuthenticatedLayout>
    )
}