import React from "react";
import FormsCTA from "./formCTA";

type Props = {};

function CTAtwo({}: Props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <aside className="overflow-hidden  sm:grid sm:grid-cols-2 mt-12">
      <div className="p-8 md:p-12 lg:px-16 lg:py-24">
        <div className="max-w-xl mx-auto text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </h2>

          <p className="hidden text-white md:mt-4 md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
            tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim
            et fermentum, augue. Aliquet amet volutpat quisque ut interdum
            tincidunt duis.
          </p>

          <div className="mt-4 md:mt-8">
            <button
              onClick={() => setShowModal(true)}
              className="inline-flex w-46 items-center px-8 py-3 text-white transition bg-indigo-700 rounded-full shadow-lg focus:outline-none focus:ring hover:bg-indigo-600"
            >
              <span className="text-sm font-medium">Get Started Today</span>
            </button>
          </div>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                aria-labelledby="modal-title"
                role="dialog"
                aria-modal="true"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Formulário de contato
                      </h3>
                      <button
                        className="inline-flex w-6 items-center  ml-2 transition bg-transparent focus:outline-none focus:ring "
                        onClick={() => setShowModal(false)}
                      >
                        <span className="text-3xl ml-5 pb-2 font-medium text-indigo-600">
                          {" "}
                          x{" "}
                        </span>
                      </button>
                    </div>

                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <FormsCTA
                        inputNames={["email", "nome", "telefone"]}
                        submitButton={"Entraremos em contato em instantes"}
                      />
                    </div>
                    {/*footer*/}
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
      </div>

      <img
        alt="Student"
        src="https://images.unsplash.com/photo-1464582883107-8adf2dca8a9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
        className="object-cover w-full h-56 sm:h-full"
      />
    </aside>
  );
}

export default CTAtwo;
