import Image from "next/image";
import { FaArrowsRotate } from "react-icons/fa6"

// local import
import FeaturesImage from "@/app/assets/features.png";
import Simple from "@/app/assets/simple.png"
import Revisit from "@/app/assets/revisit.png"
import Easy from "@/app/assets/easy.png"

const Features = () => {
    return (
        <section id="features" className="bg-white mt-[6rem] mb-[4rem] p-[4rem]">
            <div className="cont">
                <h2 className="text-center text-[1.3rem] font-bold text-main">Features</h2>
                <p className="text-center text-slate-500">Key Highlights of Our Extension</p>
                {/* highlight */}
                <div className="highlight mt-[4rem] grid grid-cols-2 gap-[2rem]">
                    <div className="list flex flex-col justify-center h-full md:h-[80%] gap-[2rem]">
                        <div className="list-ite flex items-start gap-[1rem]">
                            <div className="icon bg-main p-[.7rem] rounded-full">
                                <Image src={Simple} width={30} alt="Icon" unoptimized/>
                            </div>
                            <div className="text">
                                <h4 className="font-bold text-[2rem] text-main">Simple Screen Recording</h4>
                                <p>Effortless screen recording for everyone. Record with ease, no tech expertise required.</p>
                            </div>
                        </div>
                        <div className="list-ite flex items-start gap-[1rem]">
                            <div className="icon bg-main p-[.7rem] rounded-full">
                                <Image src={Easy} width={30} alt="Icon" unoptimized/>
                            </div>
                            <div className="text">
                                <h4 className="font-bold text-[2rem] text-main">Easy-to-Share URL</h4>
                                <p>Share your recordings instantly with a single link. No attachments, no downloads.</p>
                            </div>
                        </div>
                        <div className="list-ite flex items-start gap-[1rem]">
                            <div className="icon bg-main p-[.7rem] rounded-full">
                                <Image src={Revisit} width={30} alt="Icon" unoptimized/>
                            </div>
                            <div className="text">
                                <h4 className="font-bold text-[2rem] text-main">Revisit Recordings</h4>
                                <p>Access and review your past content effortlessly. Your recordings, always at your fingertips.</p>
                            </div>
                        </div>
                    </div>
                    <Image className="w-[100%]" src={FeaturesImage} width={20} alt="Features" unoptimized/>
                </div>
            </div>
        </section>
    )
}

export default Features