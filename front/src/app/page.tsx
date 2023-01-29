import Image from "next/image";
import { Inter } from "@next/font/google";
import { fetcher } from "../../lib/api";
import dynamic from "next/dynamic";
const RootLayout = dynamic(() => import("./layout"),{ssr:false});
import FimlistCom from "./components/filmListCom";
import FormCom from "./components/formCom";
const inter = Inter({ subsets: ['greek'] });
export default async function Home() {
  // fetch films from Strapi
  // let {data}:{data:Film[]} = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/films`);
  // console.log("films:", data);

  return (
    <>
      <main className="w-full">

        {/* film list */}
        <section className="w-[60%] mx-auto">

        <div className="w-1/4 relative overflow-hidden transition-all duration-1000  bg-blue-400 group hover:scale-125">
            <Image className="h-full w-full" width={200} height={300} alt="-MOVIE" src='https://img.yts.mx/assets/images/movies/spider_man_no_way_home_2021/medium-cover.jpg' />
            
            <div className="flex justify-center">
              <button className="w-[80%] absolute z-0 left-4 transition-[hover] duration-200 ease-in-out delay-100 group-hover:bottom-3 right-4 bottom-[-1] text-white rounded bg-blue-500 px-3 py-2">detail</button>
            </div>
        </div>
      </section>
        {/* <FimlistCom data={data}/> */}


      
        </main>
    </>
  );
}
