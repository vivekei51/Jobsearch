import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'About Us', path: '/about-us' },
    { name: 'Find Job', path: '/find-job' },
    { name: 'Find Talents', path: '/find-talents' },
    { name: 'Testimonials', path: '/testimonials' },
  ];

  return (
    <header className="w-full flex justify-center px-4 py-4 md:py-6 bg-transparent">
  <div className="w-full max-w-[1140px] flex justify-center items-center relative">
    <nav className="flex items-center bg-white border border-[#FCFCFC] rounded-[122px] shadow-[0px_0px_20px_0px_#7F7F7F26] px-6 py-3 gap-6">
      {/* Logo */}
      <Image
        src="/Frame.png"
        alt="Logo"
        width={44}
        height={44}
        className="rounded-full"
      />

      {/* Links */}
      {navItems.map(({ name, path }) => (
        <Link key={path} href={path}>
          <span className="font-[SatoshiVariable] font-semibold text-[16px] text-[#303030] hover:text-[#6100AD]">
            {name}
          </span>
        </Link>
      ))}

      {/* Button */}
      <Link
        href="/create-jobs"
        className="min-w-[123px] h-[38px] rounded-[30px] text-white bg-[linear-gradient(180deg,_#A128FF_0%,_#6100AD_113.79%)] flex items-center justify-center hover:opacity-90 px-4"
      >
        <span className="font-[SatoshiVariable] font-semibold text-[16px]">
          Create Jobs
        </span>
      </Link>
    </nav>
  </div>
</header>

  );
}

export default Navbar;
