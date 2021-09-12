import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <div className="bg-indigo-50">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-24 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 md:text-4xl">
          <span className="block">Interesado en algun producto ?</span>
          <span className="block text-blueDark">
            Contactanos sin compromiso hoy.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex rounded-md shadow">
            <Link to="/contacto">
              <button
                type="button"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blueDark hover:bg-blue-400"
              >
                Contacto
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
