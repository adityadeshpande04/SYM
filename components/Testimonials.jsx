import Image from "next/image"
import DTU from "/public/DTU.png"
import conquest from "/public/conquest.png"
import bits from "/public/bits.png"
import Review from "./Review"
export default function Testimonials()
{
    const DTU_review="Search Your Merch has been an incredible partner for our university merchandise needs. Their attention to detail, quality products, and timely delivery have made them our go-to choice. The personalized touch they bring to each design truly reflects our university's spirit."

    const bits_review="Search Your Merch has helped us elevate our startup’s identity through custom merchandise. The creative designs and attention to detail have been remarkable. Our members now proudly wear merchandise that truly represents our startup’s essence."

    const conquest_review="Working with Search Your Merch has been an absolute pleasure. Their dedication to understanding our brand and translating it into unique merchandise has exceeded our expectations. Our participants and attendees have been delighted with the merchandise quality and design."
  return (

    <>
        <div className="relative flex flex-col gap-16 items-center">
            <div className="relative flex flex-col gap-3">
                <p className="relative text-6xl font-black text-center">Our Clients</p>
                <p className=" relative font-bold text-lg text-center">A legacy of satisfied customers</p>
            </div>
            <div className="relative flex flex-col gap-24">
                <div className="relative flex flex-row gap-24">
                    <Review text={DTU_review} imgLink= {DTU} />
                    <Review text={conquest_review} imgLink={conquest} />
                    <Review text={bits_review} imgLink={bits} />
                </div>
                <div className="relative flex flex-row gap-24">
                    <Review text={DTU_review} imgLink= {DTU} />
                    <Review text={conquest_review} imgLink={conquest} />
                    <Review text={bits_review} imgLink={bits} />
                </div>
            </div>
        </div>
        </>
  )
}