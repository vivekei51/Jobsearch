import { FaSearch, FaMapMarkerAlt, FaUserFriends, FaChevronDown } from "react-icons/fa";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

export default function FilterBar() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    title: "",
    location: "",
    type: "",
    salary: 520,
  });

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await fetch('/api/jobs');
        const data = await res.json();
        setJobs(data);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch jobs:', error);
        setLoading(false);
      }
    };
    fetchJobs();
  }, []);

  if (loading) return <p className="text-center mt-4">Loading jobs...</p>;

  const filteredJobs = jobs.filter((job) => {
    const salaryMatch = filters.salary ? job.salaryTo <= filters.salary : true;
    const titleMatch = filters.title ? job.title.toLowerCase().includes(filters.title.toLowerCase()) : true;
    const locationMatch = filters.location ? job.location.toLowerCase().includes(filters.location.toLowerCase()) : true;
    const typeMatch = filters.type ? job.type === filters.type : true;
    return salaryMatch && titleMatch && locationMatch && typeMatch;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div>
      <div className="w-full mt-6 bg-white shadow-md px-4 sm:px-6 md:px-10 py-4 flex flex-col lg:flex-row items-center justify-between gap-4">
        {/* 🔍 Search */}
        <div className="flex items-center gap-2 w-full lg:w-1/4">
          <FaSearch className="text-gray-500" />
          <input
            name="title"
            type="text"
            placeholder="Search By Job Title, Role"
            value={filters.title}
            onChange={handleChange}
            className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400 font-[SatoshiVariable]"
          />
        </div>

        {/* 📍 Location */}
        <div className="relative flex items-center gap-2 w-full lg:w-1/5">
          <FaMapMarkerAlt className="text-gray-500" />
          <select
            name="location"
            value={filters.location}
            onChange={handleChange}
            className="appearance-none bg-transparent text-gray-700 outline-none w-full pr-6 font-[SatoshiVariable]"
          >
            <option value="">Preferred Location</option>
            <option value="Remote">Remote</option>
            <option value="Onsite">Onsite</option>
          </select>
          <FaChevronDown className="absolute right-2 text-gray-500 pointer-events-none" />
        </div>

        {/* 👥 Job Type */}
        <div className="relative flex items-center gap-2 w-full lg:w-1/5">
          <FaUserFriends className="text-gray-500" />
          <select
            name="type"
            value={filters.type}
            onChange={handleChange}
            className="appearance-none bg-transparent text-gray-700 outline-none w-full pr-6 font-[SatoshiVariable]"
          >
            <option value="">Job Type</option>
            <option value="FullTime">Fulltime</option>
            <option value="PartTime">Parttime</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
          <FaChevronDown className="absolute right-2 text-gray-500 pointer-events-none" />
        </div>

        {/* 💰 Salary */}
        <div className="flex flex-col w-full lg:w-1/4">
          <span className="text-sm text-[#686868] font-medium font-[SatoshiVariable]">Salary Per Month</span>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-sm text-black font-[SatoshiVariable] text-[#686868]">₹0LPA</span>
            <input
              name="salary"
              type="range"
              min={0}
              max={520}
              step={1}
              value={filters.salary}
              onChange={handleChange}
              className="w-full"
            />
            <span className="text-sm text-black font-[SatoshiVariable] text-[#686868]">₹520LPA</span>
          </div>
        </div>
      </div>

      {/* Job Grid */}
      <div className="max-w-7xl mt-6 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center px-4">
        {filteredJobs.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            location={job.location}
            salaryFrom={job.salaryFrom}
            salaryTo={job.salaryTo}
          />
        ))}
      </div>
    </div>
  );
}
