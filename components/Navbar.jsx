import Image from "next/image"
import SYM_Logo from "/public/SYM_Logo.png"
import cart from "/public/cart.svg"
import profile from "/public/profile.svg"
export default function Navbar()

{
    return(
            <div className="relative md:rounded-lg md:w-11/12 w-full md:left-10 md:right-10 flex flex-row justify-around gap-24 bg-navcolor top-3">
                <div className="relative left-2 md:left-0 md:h-10 h-12 md:top-0 w-10 md:w-10">
                    <Image src={SYM_Logo} />
                </div>
                <div className=" text-textcolor top-3 md:left-8 relative md:text-xs md:gap-8 flex flex-row justify-evenly text-xs">
                        <a href="#" >Home &#9207;</a>
                        <a href="#" >Products &#9207;</a>
                        <a href="#" >Pricing &#9207;</a>
                        <a href="#" >Company &#9207;</a>
                        <a href="#" >Search Your College &#9207;</a>
                        <a href="#" >Search Your Youtuber &#9207;</a>
                </div>
                <div className="relative flex flex-row">
                    <div className="relative md:bottom-1 md:left-20 md:top-2 md:h-6 md:w-6 h-8 w-8">
                                    <Image src={cart}/>
                                </div>    
                                <div className="relative md:bottom-1 md:left-0 md:top-2 md:h-6 md:w-6">    
                                    <Image src={profile}/>
                                </div>
                    </div>
            </div>   
    )
}