import Card from "./Card";
import frijolP from "../images/frijolp.jpeg";
import maiz from "../images/maiz.jpeg";
import azucar from "../images/azucar.jpeg";

export default function Header() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-blueDark tracking-wide uppercase">
            Los mejores precios
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Un gran catalago en existencia.
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Tenemos los productos que necesitas en tu negocio o en tu hogar con
            precios muy bajos para que puedas tener mejores rendimientos.
          </p>
        </div>
      </div>
      <div className="max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none px-10">
        <Card lineName="Maiz" productName="Maiz blanco" img={maiz} />
        <Card lineName="Frijol" productName="Frijol Peruano" img={frijolP} />
        <Card lineName="Azucar" productName="Azucar blanca" img={azucar} />
      </div>
    </div>
  );
}
