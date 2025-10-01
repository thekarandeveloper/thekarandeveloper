import Image from "next/image"
import { ArrowDownToLineIcon } from "lucide-react"

export default function TopApps(){

    const imageLocation = "/apps/sakhi.png"

    return (
        <div className="flex justify-between items-center w-full h-full py-20">

        <div className="w-[50%]">
        <Image src={imageLocation} className="w-full h-full" width={300} height={600}></Image>

        </div>
        <div className="flex flex-col gap-5 w-[50%] pr-20">
                <div className="text-md">
                    Sakhi - Your Menstrual Companion
                </div>
                 <div className="text-2xl">
                  “Codevarsity helped me master mobile app development with expert guidance and hands-on projects, making learning seamless and practical.”
                </div>

                <div className="flex justify-start gap-4">
                    <div className="hidden md:flex items-center justify-center p-4 bg-[#0071E3] text-white w-28 h-8 rounded-3xl cursor-pointer hover:bg-blue-700">
        <ArrowDownToLineIcon className="w-4 h-4 mr-2" />
        Resume
      </div>
      
      <div className="hidden md:flex items-center justify-center p-4 bg-[#0071E3] text-white w-28 h-8 rounded-3xl cursor-pointer hover:bg-blue-700">
        <ArrowDownToLineIcon className="w-4 h-4 mr-2" />
        Resume
      </div>
                </div>

        </div>
        </div>
    )
}