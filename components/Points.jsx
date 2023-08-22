import tick from "/public/tick.png"
import Image from "next/image"
export default function Points(props){
    return(
        <div className={props.classname}>
            <div className=" relative h-10 top-2">
                <Image src={tick} />
            </div>
            <div className="relative text-teal-800 text-lg font-light">{props.text}</div>
        </div>
    )
}