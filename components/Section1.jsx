import Button from "./Button";
import Points from "./Points";
import call_icon from "/public/call_icon.png"
import search_icon from "/public/search_icon.png"

export default function Section1(){
    let css1=" relative flex flex-row md:gap-1 gap-0 md:pt-3 pt-0";
    return(
            <div className=" relative md:text-8xl font-extrabold flex flex-col gap-8 justify-center text-3xl">
                <div className=" relative flex flex-col top-20 left-16 md:gap-6 gap-2">
                <h1>Catchy Line</h1>
                <h1>Catchy Line</h1>
                <p className=" font-bold text-xs text-teal-800 md:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
                </div>
                <div className="relative flex flex-col pt-16">
                    <div className="relative flex md:flex-row flex-col md:gap-8 gap-1 left-16 justify-start">
                        <Points text="Free Sample Testing*" classname="relative flex flex-row gap-1 md:pt-10 pt-0"/>
                        <Points text="Easy Bulk Orders" classname=" relative flex flex-row gap-1 md:pt-10 pt-0 md:pl-12"/>
                        <Points text="Loyalty Program" classname= "relative flex flex-row gap-1 md:pt-10 md:pl-28 pt-0 "/>
                    </div>
                    <div className="relative flex md:flex-row flex-col md:gap-8 gap-1 left-16 justify-start md:text-base text-sm" >
                        <Points text="PAN India Express Shipping" classname={css1}/>
                        <Points text="Personalised Recommendations" classname={css1}/>
                        <Points text="Custom Stores" classname={css1} />
                    </div>
                </div>
                <div className="relative flex md:flex-row flex-col gap-8 left-16">
                    <Button title="Schedule a Call" img={call_icon} />
                    <Button title="Search Your Merch" img={search_icon} />
                </div>
            </div>
    )
}