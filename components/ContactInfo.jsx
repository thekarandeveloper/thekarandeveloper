export default function ContactInfo() {
  return (
    <div className="flex flex-col justify-center py-20">
      <div className="rounded-2xl w-full h-full p-20">
        <div className="flex flex-col justify-center items-center">
          <div className="text-[50px] py-8 font-extralight">Building Apps</div>
          <div className="text-[50px] py-8 font-extralight">
            Solving Problems
          </div>
          <div className="text-md font-extralight w-100 text-center">
            All-in-one platform to plan, collaborate and deliver faster and
            smarter, collaborate and deliver — faster and smarter.
          </div>
        </div>
      </div>

      {/* Contact Grid */}

      <div className="flex flex-col">
        {/* First row */}

        <div className="flex flex-row px-30">
          <div className="w-[70%] bg-blue-600 flex flex-col gap-5">
            <div className="w-full flex justify-end">+</div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Building Apps
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
          </div>
           <div className="w-[30%] bg-white flex flex-col gap-5">
            <div className="w-full flex justify-end">+</div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Building Apps
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
          </div>
        </div>
         <div className="flex flex-row px-30">
          <div className="w-[70%] bg-blue-600 flex flex-col gap-5">
            <div className="w-full flex justify-end">+</div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Building Apps
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
          </div>
           <div className="w-[30%] bg-white flex flex-col gap-5">
            <div className="w-full flex justify-end">+</div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Building Apps
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
            <div className="text-[50px] py-8 font-extralight text-black">
              Solving Problems
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
