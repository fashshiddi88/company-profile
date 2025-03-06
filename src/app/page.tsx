export default function Home() {
  return (
    <div className="bg-white font-[family-name:var(--font-poppins)]">
      <main className="relative w-full h-screen">
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        >
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="bg-slate-900 opacity-25 p-20 ml-20 mt-100 w-200 h-60 relative text-white z-10"></div>
          <div className="absolute opacity-50 inset-0 bg-slate-500 ml-40 mt-110 w-160 h-40"></div>
          <div className="absolute inset-0 ml-41 mt-110">
            <h1 className="text-9xl font-bold">ArchiHub</h1>
            <p className="mt-1 text-3xl">Rancang. Bangun. Hidup.</p>
          </div>
        </div>
      </main>
      <div className="bg-slate-200 h-screen w screen pt-26 px-20 pb-20">
        <div className="flex gap-x-30">
          <img src="/design.png" className="w-144 h-144" />
          <div className="flex flex-col p-5 text-black gap-y-4">
            <h1 className=" text-6xl">About Us</h1>
            <p className="text-xl font-[poppins] font-light text-justify">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Perspiciatis fugit quod ex culpa alias incidunt beatae dolor ipsam
              voluptatum excepturi nisi neque repellat adipisci laborum totam
              dolorum praesentium dolores fuga nemo sequi, veniam odio tempore!
              Exercitationem vero, quas laudantium fugit voluptates distinctio
              minima recusandae delectus laboriosam aliquid quis, atque ab
              voluptate beatae fugiat quo ea maiores nam tempore numquam sunt
              nisi eaque. Temporibus laboriosam dicta rem aspernatur veniam
              incidunt sunt blanditiis id architecto rerum iusto cumque, vero,
              quia consectetur, excepturi nisi doloribus earum dignissimos sit
              quaerat illo reprehenderit? Incidunt, dolores voluptatibus. Animi
              minima quasi tenetur ex labore! Optio, vel odit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 h-screen w screen pt-26 px-20 pb-10">
        <div className="flex flex-col w-full h-full">
          <div className="bg-slate-500 opacity-90 w-full h-1/3 p-4 ">
            <div className="flex flex-col items-center w-full gap-y-5">
              <h1 className="text-4xl ">Our Services</h1>
              <div className="flex justify-center w-full h-full">
                <div className="w-1/3 h-full flex flex-col justify-center items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-700 opacity-90 flex justify-center items-center">
                    <img src="/article.svg" alt="" className="w-15 h-15" />
                  </div>
                  <h2 className="text-xl text-bold font-[poppins]">Planning</h2>
                </div>
                <div className="w-1/3 h-full  flex flex-col justify-center items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-700 opacity-90 flex justify-center items-center">
                    <img src="/home.svg" alt="" className="w-15 h-15" />
                  </div>
                  <h2 className="text-xl text-bold font-[poppins]">Exterior</h2>
                </div>
                <div className="w-1/3 h-full  flex flex-col justify-center items-center">
                  <div className="w-20 h-20 rounded-full bg-slate-700 opacity-90 flex justify-center items-center">
                    <img src="/chair.svg" alt="" className="w-15 h-15" />
                  </div>
                  <h2 className="text-xl text-bold font-[poppins]">Interior</h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-2/3 p-4">
            <div className="flex flex-col items-center w-full gap-y-5">
              <h1 className="text-4xl text-black">Our Projects</h1>
              <div className="flex justify-between w-full h-full">
                <div className=" card bg-white flex flex-col rounded-md w-100 h-70 shadow-md p-2">
                  <img
                    className="w-full h-40 object-cover rounded-t-md"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h3 className="text-l mt-3 text-black font-medium font-[poppins]">
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
                <div className=" card bg-white flex flex-col rounded-md w-100 h-70 shadow-md p-2">
                  <img
                    className="w-full h-40 object-cover rounded-t-md"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h3 className="text-l mt-3 text-black font-medium font-[poppins]">
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
                <div className=" card bg-white flex flex-col rounded-md w-100 h-70 shadow-md p-2">
                  <img
                    className="w-full h-40 object-cover rounded-t-md"
                    src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt=""
                  />
                  <h3 className="text-l mt-3 text-black font-medium font-[poppins]">
                    Lorem ipsum dolor sit amet.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
