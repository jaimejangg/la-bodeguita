const sucursales = [
  {
    id: 1,
    sucursal: "Yahualica Jalisco",
    ubicacion: "Ubicada dentro del mercado municipal portal Morelos #86",
  },
  {
    id: 1,
    sucursal: "Cuquio Jalisco",
    ubicacion:
      "Ubicada en la calle Jose Ayala #75",
  },
];

export default function Sucursales() {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4 divide-y divide-gray-200 sm:px-6 lg:py-16 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900">
          Visitanos en nuestras sucursales, nos estamos expandiendo...
        </h2>
        <div className="mt-8">
          <dl className="divide-y divide-gray-200">
            {sucursales.map((sucursal) => (
              <div
                key={sucursal.id}
                className="pt-6 pb-8 md:grid md:grid-cols-12 md:gap-8"
              >
                <dt className="text-base font-medium text-gray-900 md:col-span-5">
                  {sucursal.sucursal}
                </dt>
                <dd className="mt-2 md:mt-0 md:col-span-7">
                  <p className="text-base text-gray-500">
                    {sucursal.ubicacion}
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
