export function Pokemon() {

  const pokemons = [
    {
      id: 1,
      nome: "pikachu",
      elemento: "raio",
      desc: "amarelinho ",

    },

       {
      id: 2,
      nome: "bulbassauro",
      elemento:  "grama",
      desc: "verdinho",

    },

       {
      id: 3,
      nome: "charizard",
      elemento: "fogo",
      desc: "grande forte e quente",

    },

      {
      id: 4,
      nome: "blastoise",
      elemento: "agua",
      desc: "azul, gordo e molhado",

    },

       {
      id: 5,
      nome: "nidorino",
      elemento: "toxico",
      desc: "veneno cabuloso",

    },

       {
      id: 6,
      nome: "clefairy",
      elemento: "fada",
      desc: "bola rosa",

    },

       {
      id: 7,
      nome: "persa",
      elemento: "normal",
      desc: "agil e forte",

    },

       {
      id: 8,
      nome: "mankey",
      elemento: "combate",
      desc: "feio e batedor",

    },

     {
      id: 9,
      nome: "abra",
      elemento: "psiquico",
      desc: "cadabraaa",

    },

     {
      id: 10,
      nome: "geodude",
      elemento: "pedra",
      desc: "durao ele",

    },

     {
      id: 11,
      nome: "gengar",
      elemento: "fantasma",
      desc: "grande e tenebroso",

    },

     {
      id: 12,
      nome: "electabuzz",
      elemento: "raio",
      desc: "estressado e eletrico",

    }

  ]
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
          <span className="font-bold text-4xl text-black">Minha lista der pokemons</span>
          <span className="">venha conhecer meus pokemons</span>
          

          </div> 

      </form>

      </div>

      <div className="flex gap-5 p-4 justify-center flex-wrap">
            {pokemons.map((pokemon) => (
        
           <div className="h-48 w-75 bg-gray-400 flex flex-col items-center justify-center gap-2 rounded-md shadow-md">
          <h1 className="text-white rounded-3x2 bg-amber-500 px-4 py-1 rounded-md text-xs font-bold uppercase">{pokemon.nome}</h1>
          <h4 className="text-2xl font-bold tracking-wider text-black">{pokemon.elemento}</h4>
          <h4 className="text-center">{pokemon.desc}</h4>
        </div>
       
       
      ))}
      </div>

  
  

      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokemons, React + Tailwind</p>
      </footer>
    </main>
  );
}