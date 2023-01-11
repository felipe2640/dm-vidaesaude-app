import React from "react";
import Image from "next/image";

function Header() {
  return (
    <header className="shadow-sm">
      <div className="max-w-screen-xl p-4 mx-auto">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <Image
              src="/exampleDM.png"
              alt="Vercel Logo"
              width={162}
              height={72}
              className=""
            />
          </div>

          <div className="lg:hidden">
            {/* <p className="text-2xl font-bold text-white">Saúde e vida</p> */}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
