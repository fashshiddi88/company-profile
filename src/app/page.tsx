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
    </div>
  );
}
