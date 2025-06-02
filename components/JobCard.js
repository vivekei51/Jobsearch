import Image from "next/image";
import { FaUserFriends, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function JobCard({title,location,salaryFrom,salaryTo}) {
    console.log(title,location,salaryFrom,salaryTo)
  return (
    <div className="w-[300px] bg-white shadow-md rounded-[12px]  relative font-[SatoshiVariable] shadow-[0px_0px_14px_0px_#D3D3D326]  p-[12px]">
      {/* Badge */}
      <span className="flex items-center justify-center absolute w-[75px] h-[33px] right-3 bg-[#B0D9FF] text-[#000000] text-xs font-medium px-2 mt-[8px]  rounded-[10px]">
        24h Ago
      </span>
      {/* Company Logo */}
      <div className="relative p-0">
        <Image
          src="/f1.png" // Replace with actual logo path
          alt="Amazon"
          width={83}
          height={82}
          className="rounded-lg object-cover "
        /> 
      </div>

      {/* Title */}
      <h2 className=" flex text-[#000000] font-bold text-[20px] leading-[100%] tracking-[0%] pt-[15px]">
        {title}
      </h2>
      {/* Job Details */}
      <div className="flex items-center  text-[#5A5A5A] gap-[16px] mb-2 pt-[20px]">
        <div className="flex items-center gap-1 font-medium text-[16px] leading-[100%] tracking-[0%]">
          <FaUserFriends className="text-gray-500 text-sm" />
          1-3 yr Exp
        </div>
        <div className="flex items-center gap-1 font-medium text-[16px] leading-[100%] tracking-[0%]">
          <FaMapMarkerAlt className="text-gray-500 text-sm" />
          {location}
        </div>
        <div className="flex items-center gap-1 font-medium text-[16px] leading-[100%] tracking-[0%]">
          <MdWork className="text-gray-500 text-sm" />
          {salaryFrom}-{salaryTo}LPA
        </div>
      </div>

      {/* Description */}
      <ul className="text-gray-500 list-disc pl-5 mb-4 space-y-1 font-medium text-[14px] leading-[100%] tracking-[0]">
        <li>A user-friendly interface lets you browse stunning photos and videos</li>
        <li>Filter destinations based on interests and travel style</li>
      </ul>

      {/* Button */}
      <button className=" flex items-center justify-center w-full h-[46px] text-white bg-[#0099FF] shadow-[0px_0px_14px_0px_#5D5D5D26] font-medium   rounded-[10px] border border-solid border-gray-200 ">
        Apply Now
      </button>
    </div>
  );
}
 