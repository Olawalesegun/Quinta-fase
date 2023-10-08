import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";

// local imports
import Woman from "@/app/assets/woman.png"
import Woman2 from "@/app/assets/woman2.png";
import FatherSon from "@/app/assets/father_son.png";
import AshGrid from "@/app/assets/ash_grid.png";
import BlueGrid from "@/app/assets/blue_grid.png";


const Hero = () => {
    return (
        <div className="hero bg-white py-[8rem]">
            <div className="cont flex items-center ">
                <div className="text">
                    <h1 className="text-[4rem] font-bold text-main leading-[4rem]">Show Them <br /> Don’t Just Tell</h1>
                    <p className="text-slate-500 my-[2rem] w-full md:w-[70%]">Help your friends and loved ones by creating and sending videos on how to get things done on a website.</p>
                    <button className="flex items-center gap-3 text-white bg-main p-[1.3rem] rounded-md">Install HelpMeOut <BsArrowRight className="text-[1.2rem]"/></button>
                </div>
                <div className="images flex gap-4 relative">
                    <Image className="w-[50%] absolute -top-[10%] -right-[10%]" src={AshGrid} width={20} alt="Woman" unoptimized/>
                    <Image className="w-[50%] absolute -bottom-[10%] -left-[10%]" src={BlueGrid} width={20} alt="Woman" unoptimized/>
                    <div className="left flex gap-4 flex-col z-10">
                        <Image className="w-full" src={Woman} width={20} alt="Woman" unoptimized/>
                        <Image className="w-full" src={FatherSon} width={20} alt="Woman" unoptimized/>
                    </div>
                    <div className="right z-10">
                        <Image className="w-full" src={Woman2} width={20} alt="Woman" unoptimized/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
