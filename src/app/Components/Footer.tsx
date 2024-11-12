

export default function Footer(){
    return(
        <footer className="bg-sky-400 text-gray-300 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-xl font-semibold text-white">Afaq Ahmed</h2>
            <p className="mt-2 text-gray-600">Building seamless digital experiences.</p>
          </div>
         
            <div className="flex mt-4 space-x-4">
             
              <a href="#" className="hover:text-white">Twitter</a>
              <a href="https://www.linkedin.com/in/afaqahmed786/" className="hover:text-white">LinkedIn</a>
              <a href="https://github.com/afaqahmed786" className="hover:text-white">Github</a>
              <a href="#" className="hover:text-white">youtube</a>
            </div>
          </div>
        
        <p className="text-center mt-8 text-gray-700">&copy; 2024 Afaq Ahmed. All rights reserved.</p>
      </footer>
      
      
    )
}