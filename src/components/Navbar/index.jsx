import Link from "next/link";
import InputSearch from "./InputSearch";


const navbar = () => {
  return (
    <>  
    <div> 
        <header className="bg-slate-900 p-2">
            <div className="flex md:flex-row flex-col md:items-center justify-between p-4 gap-2">
                <Link href="/" className="font-bold text-slate-400 text-3xl hover:text-cyan-600">MyAnime</Link>
          <InputSearch/>
            </div>
        </header>
         </div>
    </>

)
};

export default navbar;
