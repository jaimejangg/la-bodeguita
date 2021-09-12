import { Link } from "react-router-dom";

const contactDetails = [
  {
    name: "Telefono 1",
    telephone: "344 104 9252",
  },
  {
    name: "Telefono 2",
    telephone: "331 637 5915",
  },
];
const locations = [
  {
    city: "Yahualica Jalisco",
    address: ["Mercado municipal, portal Morelos #86"],
  },
  {
    city: "Cuquio Jalisco",
    address: ["Calle Jose Ayala #75"],
  },
];

export default function Contacto() {
  return (
    <div className="min-h-screen bg-white">
      <header className="relative pb-24 bg-sky-800 sm:pb-32">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
          aria-label="Global"
        >
          <div className="lg:flex lg:items-center lg:space-x-6">
            <Link
              to="/"
              className="py-2 px-6 bg-black border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-20"
            >
              Regresar
            </Link>
          </div>
        </nav>

        <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:mt-32 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-black sm:text-5xl lg:text-6xl">
            Comunicate
          </h1>
          <p className="mt-6 text-xl text-cyan-100 max-w-3xl">
            Para nosotros en La Bodeguita es un placer atenderte, comunicate con
            nosotros para aclarar tus dudas, llamanos o dejanos un mensaje en
            nuestras redes sociales, es un placer hacer negocios contigo.
          </p>
        </div>
      </header>

      <main>
        <div className="bg-white">
          <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="divide-y divide-warm-gray-200">
              <section
                className="lg:grid lg:grid-cols-3 lg:gap-8"
                aria-labelledby="contact-heading"
              >
                <h2
                  id="contact-heading"
                  className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
                >
                  Telefonos
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  {contactDetails.map((item) => (
                    <div key={item.name}>
                      <h3 className="text-lg font-medium text-warm-gray-900">
                        {item.name}
                      </h3>
                      <dl className="mt-2 text-base text-warm-gray-500">
                        <div>
                          <dt className="sr-only">Email</dt>
                          <dd>{item.email}</dd>
                        </div>
                        <div className="mt-1">
                          <dt className="sr-only">Phone number</dt>
                          <dd>{item.telephone}</dd>
                        </div>
                      </dl>
                    </div>
                  ))}
                </div>
              </section>
              <section
                className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
                aria-labelledby="location-heading"
              >
                <h2
                  id="location-heading"
                  className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
                >
                  Ubicaciones fisicas
                </h2>
                <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                  {locations.map((location) => (
                    <div key={location.city}>
                      <h3 className="text-lg font-medium text-warm-gray-900">
                        {location.city}
                      </h3>
                      <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                        {location.address.map((line) => (
                          <p key={line}>{line}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
