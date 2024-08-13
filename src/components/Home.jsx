// import img from '../assets/happy.png'



const Home = () => {
  return (
    <>
<nav class="bg-gray-800 p-4">
  <div class="flex items-center justify-between">
    {/* <img src={img} alt="Logo" class="h-8"/> */}
    <ul class="flex space-x-4 ml-auto mr-auto">
      <li class="text-white hover:text-gray-300 transition duration-300">HOME</li>
      <li class="text-white hover:text-gray-300 transition duration-300">ABOUT</li>
      <li class="text-white hover:text-gray-300 transition duration-300">SERVICES</li>
      <li class="text-white hover:text-gray-300 transition duration-300">CONTACT</li>
    </ul>
    <button class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
      LOGIN
    </button>
  </div>
</nav>


</>
  )
}

export default Home