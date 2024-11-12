import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-sky-300 place-items-center pt-7 ">
     <Image width={200} height={300} src="/myphoto.jpeg" alt="Afaq Ahmed"/>
      <ul className="text-2xl ">
        <li className="text-3xl py-5 px-10 text-center font-extrabold text-gray-800 ">Hello Im Afaq Ahmed</li>
        <li className="py-4 mx-16 text-gray-700">Welcome to my portfolio! I specialize in building modern responsive websites using Next.js and Tailwind CSS.</li>
        <li className="py-4 mx-16 text-gray-700">With a focus on clean design and smooth functionality, I create digital experiences that bring ideas to life. </li>
        <li className="py-4 mx-16 text-gray-700">Explore my work and let's connect if you're looking to elevate your online presence.</li>
        
      </ul> 
    </div>

  );
}
