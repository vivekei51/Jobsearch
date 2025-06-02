"use client";
import { useState } from "react";
import { FaArrowDown, FaRupeeSign, FaCalendarAlt } from "react-icons/fa";

export default function CreateJobForm() {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    location: "Remote",
    type: "FullTime",
    salaryFrom: "",
    salaryTo: "",
    description: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }; 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobs",{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        alert("Job published successfully!");
        setFormData({
          title: "", company: "", location: "",type: "FullTime",
          salaryFrom: "", salaryTo: "", description: ""
        });
      } else {
        alert("Failed to submit job");
      }
    } catch (error) {
      console.error("Submit error:", error);
       return new Response(JSON.stringify({ error: err.message }), { status: 400 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-4">
  <h2 className="text-center text-xl font-bold">Create Job Opening</h2>

  {/* Row 1: Job Title & Company Name */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div>
      <label htmlFor="title" className="block mb-1 font-medium">Job Title</label>
      <input id="title" type="text" name="title" value={formData.title} onChange={handleChange} placeholder="Job Title" className="border rounded-lg px-4 py-2 w-full" required />
    </div>
    <div>
      <label htmlFor="company" className="block mb-1 font-medium">Company Name</label>
      <input id="company" type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="border rounded-lg px-4 py-2 w-full" required />
    </div>
  </div>

  {/* Row 2: Location & Job Type */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="relative">
      <label htmlFor="location" className="block mb-1 font-medium">Location</label>
      <select
        id="location"
        name="location"
        value={formData.location}
        onChange={handleChange}
        required
        className="border rounded-lg px-4 py-2 w-full appearance-none"
      >
        <option value="">Choose Preferred Location</option>
        <option value="Remote">Remote</option>
        <option value="Onsite">Onsite</option>
      </select>
      <FaArrowDown className="absolute right-3 top-10 text-gray-400" />
    </div>
    <div className="relative">
      <label htmlFor="type" className="block mb-1 font-medium">Job Type</label>
      <select id="type" name="type" value={formData.type} onChange={handleChange} className="border rounded-lg px-4 py-2 w-full appearance-none">
        <option value="">Choose Preferred Jobtype</option>
        <option value="FullTime">FullTime</option>
        <option value="PartTime">PartTime</option>
        <option value="Contract">Contract</option>
      </select>
      <FaArrowDown className="absolute right-3 top-10 text-gray-400" />
    </div>
  </div>

  {/* Row 3: Salary Range & Deadline */}
  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
    <div>
      <label htmlFor="salaryFrom" className="block mb-1 font-medium">Salary From (₹LPA)</label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaRupeeSign className="text-gray-500 mr-2" />
        <input id="salaryFrom" type="number" name="salaryFrom" value={formData.salaryFrom} onChange={handleChange} placeholder="₹0" className="w-full outline-none" />
      </div>
    </div>

    <div>
      <label htmlFor="salaryTo" className="block mb-1 font-medium">Salary To (₹LPA)</label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaRupeeSign className="text-gray-500 mr-2" />
        <input id="salaryTo" type="number" name="salaryTo" value={formData.salaryTo} onChange={handleChange} placeholder="₹12,00,000" className="w-full outline-none" />
      </div>
    </div>

    <div>
      <label htmlFor="deadline" className="block mb-1 font-medium">Application Deadline</label>
      <div className="flex items-center border rounded-lg px-3 py-2">
        <FaCalendarAlt className="text-gray-500 mr-2" />
        <input id="deadline" type="date" name="deadline" value={formData.deadline} onChange={handleChange} className="w-full outline-none" />
      </div>
    </div>
  </div>

  {/* Job Description */}
  <div>
    <label htmlFor="description" className="block mb-1 font-medium">Job Description</label>
    <textarea id="description" name="description" value={formData.description} onChange={handleChange} rows="4" placeholder="Description..." className="w-full border rounded-lg px-4 py-2" />
  </div>

  {/* Action Buttons */}
  <div className="flex justify-between items-center">
    <button type="button" className="border px-6 py-2 rounded-lg shadow-sm">Save Draft ⌄</button>
    <button type="submit" className="bg-[#0099FF] text-white px-6 py-2 rounded-lg shadow-md">Publish »</button>
  </div>
</form>

  );
}
