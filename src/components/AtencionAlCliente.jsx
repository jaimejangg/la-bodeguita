import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import customer from "../images/customer.jpeg";

const supportLinks = [
  {
    name: "Desde el inicio",
    description:
      "Contactanos para poder ayudarte en la busqueda de tu producto y asi poder brindarte la informacion necesaria.",
    icon: PhoneIcon,
  },
  {
    name: "Soporte en la venta",
    description:
      "Te ayudaremos con tus dudas durante todo el proceso de ventas, donde podremos acordar la mejor manera de envio y los mejores precios posibles para ti.",
    icon: SupportIcon,
  },
  {
    name: "Siempre en contacto",
    description:
      "Siempre estaremos en contacto contigo por si algo no cuadra en tu compra poder solucionar, sabemos que hasta despues de llegada tu compra puedes tener dudas o problemas, no te preocupes estamos para ayudarte.",
    icon: NewspaperIcon,
  },
];

export default function AtencionAlCliente() {
  return (
    <div className="bg-white">
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={customer} alt="" />
          <div
            className="absolute inset-0 bg-gray-700 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            Atencion al cliente de primera.
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            Nuestro compromiso de empresa es darte el mejor servicio de venta
            posible, te acompañamos durante todo el proceso para que tu
            experiencia de compra sea de calidad.
          </p>
        </div>
      </div>

      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contactanos
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-blueDark rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link
                  to="/contacto"
                  className="text-base font-medium text-blueDark"
                >
                  Contactanos <span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
