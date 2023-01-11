import React from "react";
import FormsCTA from "./formCTA";
import Header from "./Headerdm";
import Image from "next/image";

function CTAone() {
  return (
    <aside className="overflow-hidden bg-[url(/img4.png)] bg-center bg-no-repeat bg-cover  ">
      <div className="p-2  lg:px-8 lg:py-12 bg-black/25  h-screen ">
        <div className="flex items-center justify-between gap-6 lg:gap-10 my-6">
          <div className="flex lg:w-0 lg:flex-1">
            <Image
              src="/exampleDM.png"
              alt="Vercel Logo"
              width={162}
              height={57}
              className=""
            />
          </div>

          <div className="lg:hidden"></div>
        </div>
        <div className="max-w-lg text-center sm:text-left ">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            PAGINA EM CONSTRUÇÃO
          </h2>

          <p className="max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block">
            Aplique agora e receba uma consultoria em algumas horas entraremos
            em contato
          </p>

          <div className="mt-4 sm:mt-8 ">
            <FormsCTA
              inputNames={["Email", "Nome", "Telefone"]}
              submitButton={"Entraremos em contato"}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CTAone;
