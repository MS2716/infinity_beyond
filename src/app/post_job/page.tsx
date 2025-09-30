import React from 'react'

export default function job_posting() {
  return (
    <div>
      <main className="p-8">
        <div className="mt-4 border-2 p-8 rounded-2xl shadow w-full max-w-4xl mx-auto">
          <h2 className="text-[var(--reco-green-0)] text-center text-3xl font-semibold mb-8">Let's Create a Job Posting</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Title */}
            <div className="md:col-span-2">
              <label htmlFor="jobTitle" className="block text-sm font-medium text-[var(--reco-green-0)]">Job Title</label>
              <input type="text" id="jobTitle" name="jobTitle" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Job Code */}
            <div>
              <label htmlFor="jobCode" className="block text-sm font-medium text-[var(--reco-green-0)]">Job Code</label>
              <input type="text" id="jobCode" name="jobCode" defaultValue="IN106" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Experience Required */}
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-[var(--reco-green-0)]">Experience Required</label>
              <select id="experience" name="experience" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded">
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
                    <input id={`employment-${type}`} name="employmentType" type="radio" className="h-4 w-4 text-[var(--reco-green-0)] border-[var(--reco-green-40)]" />
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
                    <input id={`job-type-${type}`} name="jobType" type="radio" className="h-4 w-4 text-[var(--reco-green-0)] border-[var(--reco-green-40)]" />
                    <label htmlFor={`job-type-${type}`} className="ml-2 block text-sm text-[var(--reco-green-0)]">{type}</label>
                  </div>
                ))}
              </div>
            </div>

            {/* Office Location */}
            <div>
              <label htmlFor="officeLocation" className="block text-sm font-medium text-[var(--reco-green-0)]">Office Location</label>
              <input type="text" id="officeLocation" name="officeLocation" defaultValue="Fairfax" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Department */}
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-[var(--reco-green-0)]">Department</label>
              <input type="text" id="department" name="department" defaultValue="Default" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Industry */}
            <div className="md:col-span-2">
              <label htmlFor="industry" className="block text-sm font-medium text-[var(--reco-green-0)]">Industry</label>
              <input type="text" id="industry" name="industry" defaultValue="Recreational Facilities/Services" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
            </div>

            {/* Salary Details */}
            <div className="md:col-span-2 border-t border-[var(--reco-green-40)] pt-4 mt-4">
              <p className="text-sm font-medium text-[var(--reco-green-0)]">Salary Details (Optional)</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-2">
                <div>
                  <select name="currency" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded">
                    <option>USD - United States Dollar</option>
                  </select>
                </div>
                <input type="number" placeholder="Minimum Salary" name="minSalary" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
                <input type="number" placeholder="Maximum Salary" name="maxSalary" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded" />
                <div>
                  <select name="salaryInterval" className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded">
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
              <textarea id="jobDescription" name="jobDescription" rows={8} className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded"></textarea>
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
