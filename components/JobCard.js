import Image from "next/image";
import { FaUserFriends, FaMapMarkerAlt } from "react-icons/fa";
import { MdWork } from "react-icons/md";

export default function JobCard({ title, location, salaryFrom, salaryTo }) {
  return (
    <div className="w-full sm:w-[300px] bg-white shadow-md rounded-[12px] relative font-[SatoshiVariable] shadow-[0px_0px_14px_0px_#D3D3D326] p-4 sm:p-[12px]">
      {/* Badge */}
      <span className="absolute top-2 right-2 w-[75px] h-[30px] bg-[#B0D9FF] text-black text-xs font-medium flex items-center justify-center rounded-[10px]">
        24h Ago
      </span>

      {/* Company Logo */}
      <div className="relative w-[70px] h-[70px] sm:w-[83px] sm:h-[82px]">
        <Image
          src="/f1.png"
          alt="Company Logo"
          layout="fill"
          className="rounded-lg object-cover"
        />
      </div>

      {/* Title */}
      <h2 className="text-black font-bold text-[18px] sm:text-[20px] mt-4">
        {title}
      </h2>

      {/* Job Details */}
      <div className="flex flex-wrap sm:flex-nowrap items-center text-[#5A5A5A] gap-3 sm:gap-[16px] mt-3">
        <div className="flex items-center gap-1 text-sm sm:text-base font-medium">
          <FaUserFriends className="text-gray-500 text-sm" />
          1-3 yr Exp
        </div>
        <div className="flex items-center gap-1 text-sm sm:text-base font-medium">
          <FaMapMarkerAlt className="text-gray-500 text-sm" />
          {location}
        </div>
        <div className="flex items-center gap-1 text-sm sm:text-base font-medium">
          <MdWork className="text-gray-500 text-sm" />
          {salaryFrom}-{salaryTo} LPA
        </div>
      </div>

      {/* Description */}
      <ul className="text-gray-500 list-disc pl-5 mt-3 mb-4 space-y-1 text-sm sm:text-[14px] font-medium">
        <li>User-friendly interface with photos/videos</li>
        <li>Filter destinations by interests and style</li>
      </ul>

      {/* Button */}
      <button className="w-full h-[44px] sm:h-[46px] text-white bg-[#0099FF] shadow-md font-medium rounded-[10px] border border-gray-200">
        Apply Now
      </button>
    </div>
  );
}
