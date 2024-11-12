import Link from "next/link"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  


  
export default function Header(){
    return( 
        <div className="flex justify-between py-12 px-7 bg-sky-400">
            <h2 className="hover:text-pink-600 hover:underline text-2xl font-bold">AFAQ AHMED </h2>
            <nav className=" hidden md:block">
            <ul className="flex space-x-8 font-bold text-gray-700 text-xl">
            <li className="hover:text-yellow-100 "><Link href="/"> Home</Link></li>
            <li className="hover:text-yellow-100 "><Link href="About">About</Link></li>
            <li className="hover:text-yellow-100 "><Link href="Contact"> Contact</Link></li>
            </ul>
            </nav>
            <div className="md:hidden">
        <Sheet>
  <SheetTrigger><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-align-justify"><path d="M3 12h18"/><path d="M3 18h18"/><path d="M3 6h18"/></svg></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <nav>
            <ul className="flex space-x-8 font-bold text-gray-700">
            <li className="hover:text-yellow-100 "><Link href="/"> Home</Link></li>
            <li className="hover:text-yellow-100 "><Link href="About">About</Link></li>
            <li className="hover:text-yellow-100 "><Link href="Contact"> Contact</Link></li>
            </ul>
            </nav>
      
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
</div>

           
        </div>
    )
}