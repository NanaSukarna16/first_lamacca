import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import KategoriForm from "./_Form";

export default function EditKategori(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Edit Kategori
        </h2>
      }
    >
      <div className="py-12">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-gray-200">
            <KategoriForm kategori={props.kategori} />
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
