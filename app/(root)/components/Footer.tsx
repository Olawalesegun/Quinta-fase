

// local imports
import Logo from "@/app/assets/logo2.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-main py-[5rem]">
            <div className="cont grid grid-cols-4 text-white">
                <div className="logo">
                    <Image className="w-[50%]" src={Logo} width={20} alt="Logo" unoptimized/>
                </div>
                <div className="menu flex flex-col gap-[1rem]">
                    <h5 className="font-bold">Menu</h5>
                    <Link href={``}><span>Home</span></Link>
                    <Link href={``}><span>Converter</span></Link>
                    <Link href={``}><span>How It Works</span></Link>
                </div>
                <div className="menu flex flex-col gap-[1rem]">
                    <h5 className="font-bold">About</h5>
                    <Link href={``}><span>Home</span></Link>
                    <Link href={``}><span>Converter</span></Link>
                    <Link href={``}><span>How It Works</span></Link>
                </div>
                <div className="menu flex flex-col gap-[1rem]">
                    <h5 className="font-bold">Menu</h5>
                    <Link href={``}><span>Home</span></Link>
                    <Link href={``}><span>Converter</span></Link>
                    <Link href={``}><span>How It Works</span></Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer