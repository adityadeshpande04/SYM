import Image from "next/image"
export default function Review(props){
    return(
        <div>
                    <div className="relative flex flex-col gap-4 w-52 justify-center items-center text-center">
                        <div className="w-28 h-28"><Image src={props.imgLink}/></div>
                        <p className="relative">{props.text}</p>
                    </div>
        </div>
    )
}