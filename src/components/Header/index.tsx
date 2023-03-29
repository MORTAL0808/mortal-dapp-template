import Image from "next/image"
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import { useState } from "react";
import { MortalConnect } from "../MortalConnect";

const themes = ["corporate", "light", "dark", "cupcake", "bumblebee", "emerald", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]


export function Header () {
    const [theme, setTheme] = useState(themes[0])

    const changeTheme = () => {
        setTheme(themes[Math.floor(Math.random() * themes.length)])
    }

    return <div className="flex justify-between items-center px-4 h-18 shadow-md cursor-pointer">
        <div className="flex items-center">
            <Image width={64} height={64} className="rounded-xl" src="/images/logo_avatar.png" alt="" />
            <div className="ml-2 text-xl font-bold">MORTAL DAPP</div>
        </div>
        <div className="flex flex-none items-center">
            <button data-act-class="shadow-outline" data-set-theme={theme} onClick={changeTheme} className=" mr-4 btn btn-sm btn-outline rounded-3xl btn-square hover:scale-110">
               <GiPerspectiveDiceSixFacesRandom fontSize={'20px'} color="primary" />
            </button>
            <MortalConnect />
        </div>
    </div>
}