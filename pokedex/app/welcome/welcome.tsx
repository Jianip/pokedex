import pikachuImage from './pikachu.jpg';
import bulbaImage from './bulba.webp';
import charmanderImage from './charmander.webp';
import squirtleImage from './squirtle.jpg';
export function Welcome() {



  return (

    <main className='min-h-screen flex flex-col justify-between bg-blue-100'>
      <div className="  bg-linear-to-r/oklch from-red-500 to-orange-500 p-4 flex justify-between items-center" >

     <div className="text-white text-2xl font-bold"> 
     </div>


     <div className="flex gap-4 p-6">
      <button className="text-white hover:underline">Home</button>
      <button className="text-white hover:underline">Pokémons</button>
      <button className="text-white hover:underline">Tipos</button>
     </div>
      </div>

      <div className=' flex h-19 items-center bg-white mx-10 my-10 rounded-lg shadow-md '>

         <form className='w-full relative'>

        <input type="text" className='w-200 p-10 pb-0 pl-10 border-b border-gray-400 focus:outline-none'/>
        <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded-3xl hover:bg-red-600 flex items-center absolute right-0 top-0 h-full">
          Buscar
        </button>

      </form>

      </div>


      <div className='flex gap-40 p-6 flex-wrap'>
          <div className=" w-50 bg-yellow-500 rounded-2xl flex flex-col items-center shadow-md">
        <img
         src={pikachuImage} 
         alt="Pikachu" 
         className="w-16 mb-3"
        />

        <h2 className='font-semibold text-lg'>Pikachu</h2>
        <h3 className='font-semibold text-lg'>Elétrico</h3>

      </div>

       <div className=" w-50 bg-green-500 rounded-2xl flex flex-col items-center shadow-md">
        <img
         src={bulbaImage} 
         alt="Bulbasaur" 
         className="w-16 mb-3"
        />

        <h2 className='font-semibold text-lg'>Bulbasaur</h2>
        <h3 className='font-semibold text-lg'>Planta</h3>

      </div>

       <div className=" w-50 bg-pink-500 rounded-2xl flex flex-col items-center shadow-md">
        <img
         src={charmanderImage} 
         alt="Charmander" 
         className="w-16 mb-3"
        />

        <h2 className='font-semibold text-lg'>Charmander</h2>
        <h3 className='font-semibold text-lg'>Fogo</h3>

      </div>

       <div className=" w-50 bg-blue-500 rounded-2xl flex flex-col items-center shadow-md">
        <img
         src={squirtleImage} 
         alt="Squirtle" 
         className="w-16 mb-3"
        />

        <h2 className='font-semibold text-lg'>Squirtle</h2>
        <h3 className='font-semibold text-lg'>Água</h3>

      </div>


      </div>

      <footer className= 'bg-blue-950 p-4 '>
        <p className='text-white text-center font-bold '>
          pokedex ° react + tailwindcss
        </p>
        
      </footer>


     

        
    
  

    </main> );
}