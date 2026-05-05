


export function Welcome() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-pink-100 ">
      
      <nav className="bg-red-600 p-7 flex items-center justify-between shadow-md">
        <h1 className="text-white text-2xl font-bold">
          Pokédex
        </h1>

        <div className="flex gap-4">
          <button className="text-white hover:underline">Home</button>
          <button className="text-white hover:underline">Pokémons</button>
          <button className="text-white hover:underline">Tipos</button>
        </div>

      </nav>

        <div className=' flex h-15 items-center bg-white mx-10 my-10 rounded-lg shadow-md '>

         <form className='w-full relative'>

        <input type="text" className='w-150 p-10 pb-0 pl-10 border-b border-gray-400 focus:outline-none'/>
        <button type="submit" className="bg-red-500 text-white px-2 py-6 rounded-3x1 hover:bg-red-600 flex items-center absolute right-0 top-0 h-full">
          Buscar
        </button>

      </form>

      </div>

      <div className="flex gap-5 p-2 justify-center">
      <div className="h-45 w-70 aspect-square bg-yellow-300 text-white text-xs flex items-center justify-center rounded-md">
        Pikachu
       
    </div>

    <div className="h-45 w-70 aspect-square bg-green-500 text-white text-xs flex items-center justify-center rounded-md">
        Bulbasaur
       
    </div>

    <div className="h-45 w-70 aspect-square bg-red-400 text-white text-xs flex items-center justify-center rounded-md">
        Charmander
       
    </div>

    <div className="h-45 w-70 aspect-square bg-blue-300 text-white text-xs flex items-center justify-center rounded-md">
        Squirtle
       
    </div>
      </div>
      

      <div className="grow">

      </div>

      <footer className="bg-blue-950 p-4">
        <p className="text-white text-center font-bold">Pokédex, React + Tailwind</p>
      </footer>
    </main>
  );
}