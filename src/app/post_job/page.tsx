'use client';

import React from 'react';

export default function job_posting() {
  const [formData, setFormData] = React.useState({
    jobTitle: '',
    jobCode: 'IN106',
    experience: '',
    employmentType: '',
    jobType: '',
    officeLocation: 'Fairfax',
    department: 'Default',
    industry: 'Recreational Facilities/Services',
    salaryDetails: {
      currency: 'USD - United States Dollar',
      minSalary: '',
      maxSalary: '',
      salaryInterval: ''
    },
    jobDescription: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name in formData.salaryDetails) {
      setFormData(prevState => ({
        ...prevState,
        salaryDetails: {
          ...prevState.salaryDetails,
          [name]: value
        }
      }));
    } else {
      setFormData(prevState => ({
        ...prevState,
        [name]: value
      }));
    }
  }

  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.error('Error: NEXT_PUBLIC_API_URL is not defined. Please check your .env.local file and restart the server.');
      return; 
    }

    try{
      const absoluteApiUrl = new URL(apiUrl, window.location.origin).href;

      // Use an environment variable for the API URL
      const response = await fetch(absoluteApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        console.log('Job created successfully');
      } else {
        // Log the status and the response body for more details
        console.error('Failed to create job:', response.status, await response.text());
      }
    } catch (error) {
      console.error('Error occurred while creating job:', error);
    }
  }

  return (
    <div>
      <main className="p-8">
        <div className="mt-4 border-2 p-8 rounded-2xl shadow w-full max-w-4xl mx-auto">
          <h2 className="text-[var(--reco-green-0)] text-center text-3xl font-semibold mb-8">Let&apos;s Create a Job Posting</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handlesubmit}>
            {/* Job Title */}
            <div className="md:col-span-2">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-[var(--reco-green-0)]">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" required />
            </div>

            {/* Job Code */}
            <div>
              <label htmlFor="jobCode" className="block text-sm font-medium text-[var(--reco-green-0)]">Job Code</label>
              <input type="text" id="jobCode" name="jobCode" value={formData.jobCode} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Experience Required */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-[var(--reco-green-0)]">Experience Required</label>
              <select id="experience" name="experience" value={formData.experience} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded">
                <option>Internship</option>
                <option>Entry Level</option>
                <option>Associate</option>
                <option>Mid-Senior Level</option>
                <option>Director/ Vice-President</option>
                <option>Executive/ President</option>
              </select>
            </div>

            {/* Employment Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[var(--reco-green-0)]">Employment Type</label>
              <div className="mt-2 flex flex-wrap gap-4">
                {['Full Time', 'Part Time', 'Contract', 'Internship', 'Other'].map(type => (
                  <div key={type} className="flex items-center">
                    <input id={`employment-${type}`} name="employmentType" type="radio" value={type} checked={formData.employmentType === type} onChange={handleChange} className="h-4 w-4 text-[var(--reco-green-0)] border-[var(--reco-green-40)]" />
                    <label htmlFor={`employment-${type}`} className="ml-2 block text-sm text-[var(--reco-green-0)]">{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Type */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-[var(--reco-green-0)]">Job Type</label>
              <div className="mt-2 flex flex-wrap gap-4">
                {['On Site', 'Hybrid', 'Remote'].map(type => (
                  <div key={type} className="flex items-center">
                    <input id={`job-type-${type}`} name="jobType" type="radio" value={type} checked={formData.jobType === type} onChange={handleChange} className="h-4 w-4 text-[var(--reco-green-0)] border-[var(--reco-green-40)]" />
                    <label htmlFor={`job-type-${type}`} className="ml-2 block text-sm text-[var(--reco-green-0)]">{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Location */}
            <div>
              <label htmlFor="officeLocation" className="block text-sm font-medium text-[var(--reco-green-0)]">Office Location</label>
              <input type="text" id="officeLocation" name="officeLocation" value={formData.officeLocation} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-[var(--reco-green-0)]">Department</label>
              <input type="text" id="department" name="department" value={formData.department} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Industry */}
            <div className="md:col-span-2">
              <label htmlFor="industry" className="block text-sm font-medium text-[var(--reco-green-0)]">Industry</label>
              <input type="text" id="industry" name="industry" value={formData.industry} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Salary Details */}
            <div className="md:col-span-2 border-t border-[var(--reco-green-40)] pt-4 mt-4">
              <p className="text-sm font-medium text-[var(--reco-green-0)]">Salary Details (Optional)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                <div>
                  <select name="currency" value={formData.salaryDetails.currency} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded">
                    <option>USD - United States Dollar</option>
                  </select>
                </div>
                <input type="number" placeholder="Minimum Salary" name="minSalary" value={formData.salaryDetails.minSalary} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
                <input type="number" placeholder="Maximum Salary" name="maxSalary" value={formData.salaryDetails.maxSalary} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
                <div>
                  <select name="salaryInterval" value={formData.salaryDetails.salaryInterval} onChange={handleChange} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded">
                    <option>Yearly</option>
                    <option>Monthly</option>
                    <option>Hourly</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="md:col-span-2">
              <label htmlFor="jobDescription" className="block text-sm font-medium text-[var(--reco-green-0)]">Job Description</label>
              <textarea id="jobDescription" name="jobDescription" value={formData.jobDescription} onChange={handleChange} rows={8} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded"></textarea>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="bg-[var(--reco-green-0)] hover:bg-[var(--reco-green-50)] text-white px-8 py-3 mt-4 rounded-lg text-xl cursor-pointer">
                Create Job
              </button>
            </div>
      </form>
        </div>
      </main>
    </div>
  )
}
