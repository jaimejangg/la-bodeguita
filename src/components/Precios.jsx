import { useState, useEffect } from "react";
import { getProducts } from "./api";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Precios() {
  const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
    try {
      const data = await getProducts();
      setProducts(data);
    } catch (err) {}
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      Lista de precios

      <ul className="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id} className="col-span-1 flex shadow-sm rounded-md">
            <div
              className="flex-shrink-0 flex items-center justify-center w-16 text-sm font-medium rounded-l-md bg-gray-500"
            >
              {product.producto}
            </div>
            <div className="flex-1 flex items-center justify-between border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate">
              <div className="flex-1 px-4 py-2 text-sm truncate">
                <p className="text-gray-900 font-medium hover:text-gray-600">

                </p>
                <p className="text-gray-500">Precio por mayor {product.porMayor} </p>
              </div>
              <div className="flex-shrink-0 pr-2">
                <p className="text-gray-500">Precio por menor {product.porMenor} </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
