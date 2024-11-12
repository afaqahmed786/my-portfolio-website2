import Image from "next/image";

export default function About(){
    return(
     
        <div className="justify-items-center bg-sky-200 font-extrabold text-2xl px-12 py-9">
              <div className=""> <Image width={200} height={200} src="/myphoto.jpeg" alt="Afaq Ahmed" /> </div>
          <h1 className="font-extrabold text-5xl py-5 hover:underline text-gray-800">*About me</h1>

<p className="text-gray-700 px-11">Hey there! Im Afaq Ahmed a web developer passionate about building websites that bring ideas to life online. With expertise in Next.js and Tailwind CSS, I focus on creating responsive, visually appealing, and user-friendly experiences that work across all devices.</p>
<br/>
<p  className="text-gray-700 px-11">Im driven by curiosity and a love for technology, which has led me to dive into emerging fields like AI, Web 3.0, and the Metaverse. My goal is to stay ahead of the curve, learning and experimenting with new tech to build future-ready websites. Right now, Im working on an e-commerce project that challenges me to innovate with every step.</p>

<h1 className="font-extrabold text-4xl py-5 hover:underline  text-gray-800">What I Do</h1>
<p className="text-gray-700 px-11">I design with users in mind, aiming to make websites that feel intuitive and easy to explore. Whether its improving site speed, crafting layouts, or focusing on accessibility, I work to ensure that each detail adds to the user experience.</p>

<h2 className="font-extrabold text-3xl py-5  hover:underline  text-gray-800">Skills at a Glance</h2>
<ul className="text-gray-700">
<li>Frontend Development: Next.js, Tailwind CSS, JavaScript</li>
<br/>
<li> Responsive Design: Adapting sites seamlessly for all screen sizes</li>
<br/>       
<li> User Experience: Prioritizing clean, intuitive design</li>  
<br/>
<li>Tech Exploration: Currently diving into AI and Web 3.0</li> 
</ul>
<h2 className="font-extrabold text-2xl py-5  hover:underline  text-gray-800">Looking Ahead</h2>


<p className="text-gray-700 px-14">For me, web development is all about creating impactful, enjoyable digital experiences. Im excited to keep pushing the boundaries, collaborating on creative projects, and building for a digital future.</p>


         </div>
    )
}