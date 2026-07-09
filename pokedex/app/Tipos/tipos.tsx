import {
  Flame,
  Leaf,
  Snowflake,
  Droplets,
  Zap,
  Gem,
  Ghost,
  Brain,
} from "lucide-react";



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
        
        <div className="h-48 w-75 bg-yellow-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">

          <Zap size={40} className="text-yellow-600"></Zap>
          
          <span className="text-2xl font-bold tracking-wider text-black">Eletrico</span>
          <span className="text-center">Pokemons rapidos que usam ataques de eletricidade</span>
          <button className="text-white rounded-3x2 bg-amber-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Pikachu
          </button>
        </div>

        <div className="h-48 w-75 bg-green-500 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <Leaf size={40} className="text-green-800"></Leaf>
          <span className="text-2xl font-bold tracking-wider text-black">Planta</span>
          <span className="text-center">Usam energia da natureza, folhas, vinhas e sementes</span>
          <button className="text-white bg-green-700 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Bulbassauro
          </button>
        </div>

        <div className="h-48 w-75 bg-red-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <Flame size={40} className="text-red-600"></Flame>
          <span className="text-2xl font-bold tracking-wider text-black">Fogo</span>
          <span className="text-center">Possuem ataques quentes, intensos e explosivos</span>
          <button className="text-white bg-red-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Charmander
          </button>
        </div>

        <div className="h-48 w-75 bg-blue-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <Droplets size={40} className="text-blue-600"></Droplets>
          <span className="text-2xl font-bold tracking-wider text-black">Agua</span>
          <span className="text-center">Sao versateis e usam jatos de agua em batalha</span>
          <button className="text-white bg-blue-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Squirtle
          </button>
        </div>

      </div>

       <div className="flex gap-5 p-4 justify-center flex-wrap">
        
        <div className="h-48 w-75 bg-blue-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <Snowflake size={40} className="text-cyan-700"></Snowflake>
          <span className="text-2xl font-bold tracking-wider text-black">Gelo</span>
          <span className="text-center">Usam frio, neve e congelamento conta seus oponentes</span>
          <button className="text-white rounded-3x2 bg-blue-500 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Lapras
          </button>
        </div>

        <div className="h-48 w-75 bg-gray-500 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <Gem size={40} className="text-gray-600"></Gem>
          <span className="text-2xl font-bold tracking-wider text-black">Pedra</span>
          <span className="text-center">Sao resistentes e possuem grande forca defensiva</span>
          <button className="text-white bg-gray-700 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Onix
          </button>
        </div>

        <div className="h-48 w-75 bg-pink-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <Brain size={40} className="text-pink-600"></Brain>
          <span className="text-2xl font-bold tracking-wider text-black">Psíquico</span>
          <span className="text-center">Usam poderes mentais, telecinese e energia psíquica</span>
          <button className="text-white bg-pink-800 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Mewtwo
          </button>
        </div>

        <div className="h-48 w-75 bg-pink-300 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <Ghost size={40} className="text-purple-600"></Ghost>
          <span className="text-2xl font-bold tracking-wider text-black">Fatasma</span>
          <span className="text-center">Misteriosos, assustadores e dificeis de atingir</span>
          <button className="text-white bg-purple-600 px-4 py-1 rounded-md text-xs font-bold uppercase">
            Gengar
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