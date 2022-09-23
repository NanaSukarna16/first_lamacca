import React from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Team(props) {
  return (
    <AuthenticatedLayout
      auth={props.auth}
      errors={props.errors}
      header={
        <h2 className="font-semibold text-xl text-gray-800 leading-tight">
          Barang
        </h2>
      }
    >
      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
            <div className="p-6 bg-white border-b border-gray-200">
              Halaman Barang
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}