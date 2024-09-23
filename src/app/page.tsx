import Image from "next/image";
import businessman from "./businessman.png"

export default function Home() {
  return (
   <div className="flex h-5/6 bg-black">
    <div>
     <h1 className="text-9xl p-10 mt-2 font-fascinate text-red-700">Hi,</h1>
     <h2 className="text-7xl p-10 mt-2 font-shadows text-yellow-500">I am Abdul Wasay</h2>
     <h3 className="text-5xl p-10 mt-2 font-protest text-green-900">I Want To Become A Full Stack Developer</h3>
    </div>
     <Image src={businessman} alt={"businessman"} className="h-96 w-96 p-10 mt-20" />
   </div>
  );
}
