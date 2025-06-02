"use client"
import FilterBar from "@/components/FilterBar";
import JobCard from "@/components/JobCard";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <main className="h-[700px]">
      <Navbar/>
      <FilterBar/>
    </main>  
  );
}
