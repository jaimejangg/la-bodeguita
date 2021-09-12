import { Disclosure } from "@headlessui/react";
import logo from "../images/laBodeguitaLogo.svg";

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-gray-50">
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-10 w-auto"
                  src={logo}
                  alt="logo"
                />
                <img
                  className="hidden lg:block h-10 w-auto"
                  src={logo}
                  alt="logo"
                />
              </div>
            </div>
          </div>
        </div>
      </>
    </Disclosure>
  );
}
