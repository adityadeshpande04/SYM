import Link from "next/link"
import Image from "next/image"
export default function Button(props)
{
    return(
        <div>
        <button className="relative flex flex-row gap-2 text-xl text-teal-800 font-bold rounded-2xl back bg-white shadow-lg w-60 h-12">
            <div className="relative flex flex-row pt-2">
                <div className="relative pl-2 pt-1 pr-2 rounded-full"><Image src={props.img}/></div>
                <a href="">{props.title}</a>
            </div>
        </button>
            
        </div>
    )
} 