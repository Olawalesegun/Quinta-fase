

// local imports
import Rec from "@/app/assets/rec.png";
import Image from "next/image";

const HowItWorks = () => {
    return (
        <section id="howitworks" className="bg-white">
            <div className="cont py-[4rem] text-center">
                <h3 className="text-main text-center text-[3rem] font-bold">How it works</h3>
                <div className="hows my-[3rem] grid grid-cols-3 gap-[2rem]">
                    <div className="how">
                        <div className="num bg-main text-white text-[1.5rem] p-[1rem] mb-[1rem] w-[4rem] mx-auto rounded-full"><span>1</span></div>
                        <h4 className="text-main font-bold text-[1.5rem] mb-[1rem]">Record Screen</h4>
                        <p className="text-slate-500 mb-[1rem]">Click the "Start Recording" button in our extension.  choose which part of your screen to capture and who you want to send it to.</p>
                        <Image className="w-full" src={Rec} width={20} alt="Recording" unoptimized/>
                    </div>
                    <div className="how">
                        <div className="num bg-main text-white text-[1.5rem] p-[1rem] mb-[1rem] w-[4rem] mx-auto rounded-full"><span>1</span></div>
                        <h4 className="text-main font-bold text-[1.5rem] mb-[1rem]">Share Your Recording</h4>
                        <p className="text-slate-500 mb-[1rem]">We generate a shareable link for your video. Simply send it to your audience via email or copy the link to send via any platform.</p>
                        <Image className="w-full" src={Rec} width={20} alt="Recording" unoptimized/>
                    </div>
                    <div className="how">
                        <div className="num bg-main text-white text-[1.5rem] p-[1rem] mb-[1rem] w-[4rem] mx-auto rounded-full"><span>1</span></div>
                        <h4 className="text-main font-bold text-[1.5rem] mb-[1rem]">Learn Effortlessly</h4>
                        <p className="text-slate-500 mb-[1rem]">Recipients can access your video effortlessly through the provided link, with our user-friendly interface suitable for everyone.</p>
                        <Image className="w-full" src={Rec} width={20} alt="Recording" unoptimized/>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowItWorks