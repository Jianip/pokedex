



export function Tipos() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-pink-100 ">
      
      <nav className="bg-red-600 p-7 flex items-center justify-between shadow-md">
        <h1 className="text-white text-2xl font-bold">
          Pokedex
        </h1>

        <div className="flex gap-4">
          <button className="text-white hover:underline">Home</button>
          <button className="text-white hover:underline">Pokémons</button>
          <button className="text-white hover:underline">Tipos</button>
        </div>

      </nav>

         <div className=' flex h-30 items-center bg-white mx-10 my-10 rounded-lg shadow-md '>

         <form className='w-full relative'>

          <div className="flex flex-col items-center">

          <span className="font-bold text-4xl text-black">Tipos de Pokemon</span>
          <span className="">Conheca os principais tipos e suas caracteristicas</span>
          
          

          </div>

      </form>

      </div>



      <div className="flex gap-5 p-4 justify-center flex-wrap">
        
        <div className="h-48 w-72 bg-yellow-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Eletrico</span>
          <span className="text-center">Pokemons rapidos que usam ataques de eletricidade</span>
          <button className="text-white rounded-3x2 bg-amber-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Pikachu
          </button>
        </div>

        <div className="h-48 w-72 bg-green-500 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Bulbasaur</span>
          <button className="text-white bg-green-700 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Planta
          </button>
        </div>

        <div className="h-48 w-72 bg-red-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Charmander</span>
          <button className="text-white bg-red-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Fogo
          </button>
        </div>

        <div className="h-48 w-72 bg-blue-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Squirtle</span>
          <button className="text-white bg-blue-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Água
          </button>
        </div>

      </div>

       <div className="flex gap-5 p-4 justify-center flex-wrap">
        
        <div className="h-48 w-72 bg-amber-700 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">hitmonchan</span>
          <button className="text-white rounded-3x2 bg-amber-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            lutador
          </button>
        </div>

        <div className="h-48 w-72 bg-orange-500 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">dragonite</span>
          <button className="text-white bg-orange-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
            dragao
          </button>
        </div>

        <div className="h-48 w-72 bg-gray-700 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Moltres de galar</span>
          <button className="text-white bg-black px-4 py-1 rounded-md text-xs font-bold uppercase">
            sombrio
          </button>
        </div>

        <div className="h-48 w-72 bg-blue-100 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <span className="text-3xl font-bold tracking-wider text-black">Lapras</span>
          <button className="text-white bg-blue-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            gelo
          </button>
        </div>

      </div>



       
      

      <div className="grow">

      </div>

      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Tipos, React + Tailwind</p>
      </footer>
    </main>
  );
}