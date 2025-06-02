// components/Navbar.tsx
import Image from 'next/image';
import Link from 'next/link';
 function Navbar() {
  return (
    <div className=" flex justify-center items-center py-6">
      <nav className="w-[838px] h-[80px] bg-white border border-[#FCFCFC] rounded-[122px] 
                   shadow-[0px_0px_20px_0px_#7F7F7F26] flex items-center px-6 space-x-6 gap-[11px]">
        <Image
          src="/Frame.png"
          alt="Logo"
          width={44}
          height={44}
          className="rounded-full"
        />
<Link href="/about"><span className="font-[SatoshiVariable] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#303030]">
    About Us
  </span>
</Link>
<Link href="/about"><span className="font-[SatoshiVariable] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#303030]">
    Find Job
  </span>
</Link>        
<Link href="/about"><span className="font-[SatoshiVariable] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#303030]">
    Find Talents
  </span>
</Link>  
        <Link href="/about"><span className="font-[SatoshiVariable] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#303030]">
    About Us
  </span>
</Link>  
      <Link href="/about"><span className="font-[SatoshiVariable] font-semibold text-[16px] leading-[100%] tracking-[0%] text-[#303030]">
    Testimonials
  </span>
</Link>  
        <Link
          href="/create-jobs"
          className="w-[123px] h-[38px] rounded-[30px]  text-white  bg-[linear-gradient(180deg,_#A128FF_0%,_#6100AD_113.79%)] flex items-center justify-center"
        >
        <span   className="   font-[SatoshiVariable] font-semibold text-[16px] leading-[100%] tracking-[0%] text-center  text-[#FFFFFF]"
>Create Jobs</span>  
        </Link>
      </nav>
    </div>
  );
}
export default Navbar;


