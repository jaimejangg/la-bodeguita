import { Link } from "react-router-dom";
import img from "../images/costal.jpg";

export default function Hero() {
  return (
    <div className="relative bg-gray-50">
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">
                Distribuidores de alimentos en
              </span>{" "}
              <span className="block text-blueDark xl:inline">
                semillas y cereales.
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Bienvenido, somos distribuidores de semillas y cereales a mayoreo
              y menudeo, contamos con un gran extenso catalago de productos para
              tu tienda o negocio o consumo personal, contactanos.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="/contacto">
                  <button
                    type="button"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blueDark hover:bg-blue-400"
                  >
                    Contacto
                  </button>
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/ofertas"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent font-medium rounded-md text-blue-800 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Ofertas
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={img}
            alt="LaBodeguita"
          />
        </div>
      </main>
    </div>
  );
}
