import isotipo from "../images/Copia de isotipo.png";
import { ChevronRightIcon } from '@heroicons/react/solid'
import fabuloso from "../images/Copia de fabuloso.png";
import suavitel from "../images/Copia de suavitel.png";
import carisma from "../images/Copia de carisma.png";
import ace from "../images/Copia de ace).png";
import nescafe from "../images/Copia de nescafe.png";
import fontanella from "../images/Copia de fontanella.png";
import zucaritas from "../images/Copia de zucaritas.png";
import junio from "../images/Copia de junio.png";
import logoJangg from "../images/jangg logoletras.png";

const people = [
  {
    name: 'Fabuloso',
    role: 'SUPER OFERTA',
    imageUrl: fabuloso

  },
  {
    name: 'Suavitel',
    role: 'SUPER OFERTA',
    imageUrl: suavitel

  },
  {
    name: 'Carisma',
    role: 'SUPER OFERTA',
    imageUrl: carisma

  },
  {
    name: 'Ace',
    role: 'SUPER OFERTA',
    imageUrl: ace

  },
  {
    name: 'Nescafe',
    role: 'SUPER OFERTA',
    imageUrl: nescafe

  },
  {
    name: 'Fontanella',
    role: 'SUPER OFERTA',
    imageUrl: fontanella

  },
  {
    name: 'Zucaritas',
    role: 'SUPER OFERTA',
    imageUrl: zucaritas

  },
  {
    name: 'Frijol Junio',
    role: 'SUPER OFERTA',
    imageUrl: junio

  },
]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

export default function Ofertas() {
  // const [products, setProducts] = useState([]);

  //   const fetchProducts = async () => {
  //   try {
  //     const data = await getProducts();
  //     setProducts(data);
  //   } catch (err) {}
  // };

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  return (
    <div className="relative">
      <div className="relative">
            <div className="mx-auto">
              <div className="relative shadow-xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="https://cdn.pixabay.com/photo/2016/11/23/15/14/jars-1853439_1280.jpg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-blue-400 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-20">
                    <div className="flex justify-center mt-4">
                      <img
                        src={isotipo}
                        alt="logo"
                        className="h-20"
                      />
                    </div>
                    <span className="block text-white">Super Ofertas 4x3 La Bodeguita.</span>
                    <span className="block text-white">Tu aliado con los precios</span>
                  </h1>
                </div>
              </div>
            </div>
          </div>

      <div className="bg-gradient-to-r from-green-400 to-blue-500">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mt-1 text-4xl font-extrabold text-blue-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Paga 3 y llevate 4
          </p>
        </div>
      </div>
    </div>


      <ul
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5"
      >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col text-center bg-gray-200 rounded-lg shadow divide-y divide-gray-200"
        >
          <div className="flex-1 flex flex-col p-8">
            <img className="mx-auto" src={person.imageUrl} alt="fabuloso" />
            <h3 className="mt-6 text-gray-900 text-sm font-medium">{person.name}</h3>
            <dl className="mt-1 flex-grow flex flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-gray-500 text-sm">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                <span className="px-2 py-1 text-green-800 text-xs font-medium bg-green-100 rounded-full">
                  {person.role}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="-ml-px w-0 flex-1 flex bg-gradient-to-r from-green-400 to-blue-500">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                >
                  <ChevronRightIcon className="w-5 h-5 text-white" aria-hidden="true" />
                  <span className="ml-3 text-white">Ir a Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
      </ul>

    <footer className="bg-gray-700 mt-5">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {/* {navigation.map((item) => ( */}
            <img
              alt="logo"
              src={logoJangg}
              className="h-20 w-50"
            />
          {/* ))} */}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">La Bodeguita, una compañia de Grupo Jangg, ofertas validas solo en tienda fisica.</p>
        </div>
      </div>
    </footer>


    </div>
  )
}
