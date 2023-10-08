import Image from "next/image";

// local imports
import Logo from "@/app/assets/logo.png"
import Link from "next/link";

const Nav = () => {
    return (
        <nav className="flex bg-white justify-between items-center px-[3rem] py-[1.5rem] border-b border-slate-200">
            <div className="logo">
                <Image className="w-[10rem]" src={Logo} width={20} alt="Help Me Out Logo" unoptimized/>
            </div>

            {/* links */}
            <div className="links text-main font-semibold flex gap-[3rem]">
                <Link href={`#features`}>
                    <span className="">Features</span>
                </Link>
                <Link href={`#howitworks`}>
                    <span className="">How it works</span>
                </Link>
            </div>

            {/* get started */}
            <div className="get-started">
                <button className="text-main font-bold px-[1rem] py-[.5rem]">Get Started</button>
            </div>
        </nav>
    )
}

export default Nav