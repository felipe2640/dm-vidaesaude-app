import React from "react";
import FormsCTA from "./formCTA";

function CTAone() {
  return (
    <aside className="overflow-hidden bg-[url(https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-center bg-no-repeat bg-cover">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24 bg-black/25">
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-2xl font-bold text-white sm:text-3xl md:text-5xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo!
          </h2>

          <p className="hidden max-w-md text-white/90 md:mt-6 md:text-lg md:leading-relaxed md:block">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore
            officia corporis quasi doloribus iure architecto quae voluptatum
            beatae excepturi dolores.
          </p>

          <div className="mt-4 sm:mt-8 ">
            <FormsCTA
              inputNames={["Email", "Nome"]}
              submitButton={"Quer que entremos em contato"}
            />
          </div>
        </div>
      </div>
    </aside>
  );
}

export default CTAone;
