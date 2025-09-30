import React from 'react'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function ApplicationFeedPage() {
    return (
        <div className='p-8'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className="text-2xl font-bold text-[var(--reco-green-20)]">Application Feed</h1>
                <div className='h-1 rounded flex flex-row items-center justify-center gap-2'>
                    <button className="bg-[var(--reco-green-30)] hover:bg-[var(--reco-green-70)] text-white px-4 py-2 rounded cursor-pointer text-sm">
                        Download CSV
                    </button>
                    <button className="bg-[var(--reco-green-30)] hover:bg-[var(--reco-green-70)] text-white px-4 py-2 rounded cursor-pointer text-sm">
                        Download Excel
                    </button>
                    <div>
              <select id="experience" name="experience" className="h-10 border-2 border-[var(--reco-green-40)] p-2 rounded items-center text-sm">
                <option>Last 30 Days</option>
                <option>Last 7 Days</option>
                <option>All Time</option>
              </select>
            </div>
                </div>
            </div>
            <Table>
                <TableCaption>Application Feed</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[100px]">Job Board</TableHead>
                        <TableHead className="w-[150px]">Inbound |Outbound</TableHead>
                        <TableHead className="w-[150px]">Job</TableHead>
                        <TableHead className="w-[150px]">Location</TableHead>
                        <TableHead className="w-[150px]">Name</TableHead>
                        <TableHead className="w-[100px]">Resume</TableHead>
                        <TableHead className="w-[200px]">Candidate Email</TableHead>
                        <TableHead className="w-[150px]">LinkedIn URL</TableHead>
                        <TableHead className="w-[150px]">LinkedIn Connection</TableHead>
                        <TableHead className="w-[200px]">LinkedIn First Message</TableHead>
                        <TableHead className="w-[100px]">ATS Score</TableHead>
                        <TableHead className="w-[100px]">Email 1</TableHead>
                        <TableHead className="w-[200px]">Recruiter Comments</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                <TableRow>
                        <TableCell>Indeed</TableCell>
                        <TableCell>Inbound</TableCell>
                        <TableCell>Software Engineer</TableCell>
                        <TableCell>Fairfax, VA</TableCell>
                        <TableCell>John Doe</TableCell>
                        <TableCell>view_resume.pdf</TableCell>
                        <TableCell>john.doe@example.com</TableCell>
                        <TableCell>linkedin.com/in/johndoe</TableCell>
                        <TableCell>2nd</TableCell>
                        <TableCell>Hi John, saw your profile...</TableCell>
                        <TableCell>85</TableCell>
                        <TableCell>Sent</TableCell>
                        <TableCell>Good fit for the role.</TableCell>
                    </TableRow><TableRow>
                        <TableCell>LinkedIn</TableCell>
                        <TableCell>Outbound</TableCell>
                        <TableCell>Product Manager</TableCell>
                        <TableCell>Remote</TableCell>
                        <TableCell>Jane Smith</TableCell>
                        <TableCell>jane_resume.docx</TableCell>
                        <TableCell>jane.smith@example.com</TableCell>
                        <TableCell>linkedin.com/in/janesmith</TableCell>
                        <TableCell>1st</TableCell>
                        <TableCell>Hi Jane, interested in a PM role?</TableCell>
                        <TableCell>92</TableCell>
                        <TableCell>Sent</TableCell>
                        <TableCell>Strong candidate.</TableCell>
                    </TableRow><TableRow>
                        <TableCell>Company Website</TableCell>
                        <TableCell>Inbound</TableCell>
                        <TableCell>UX Designer</TableCell>
                        <TableCell>New York, NY</TableCell>
                        <TableCell>Alex Johnson</TableCell>
                        <TableCell>alex_j_cv.pdf</TableCell>
                        <TableCell>alex.j@example.com</TableCell>
                        <TableCell>linkedin.com/in/alexjohnson</TableCell>
                        <TableCell>3rd+</TableCell>
                        <TableCell>N/A</TableCell>
                        <TableCell>78</TableCell>
                        <TableCell>Not Sent</TableCell>
                        <TableCell>Needs more experience.</TableCell>
                    </TableRow><TableRow>
                        <TableCell>AngelList</TableCell>
                        <TableCell>Inbound</TableCell>
                        <TableCell>Data Scientist</TableCell>
                        <TableCell>San Francisco, CA</TableCell>
                        <TableCell>Emily White</TableCell>
                        <TableCell>emily_white.pdf</TableCell>
                        <TableCell>emily.w@example.com</TableCell>
                        <TableCell>linkedin.com/in/emilywhite</TableCell>
                        <TableCell>2nd</TableCell>
                        <TableCell>N/A</TableCell>
                        <TableCell>88</TableCell>
                        <TableCell>Sent</TableCell>
                        <TableCell>Promising.</TableCell>
                    </TableRow><TableRow>
                        <TableCell>Indeed</TableCell>
                        <TableCell>Outbound</TableCell>
                        <TableCell>DevOps Engineer</TableCell>
                        <TableCell>Austin, TX</TableCell>
                        <TableCell>Michael Brown</TableCell>
                        <TableCell>mb_resume.pdf</TableCell>
                        <TableCell>michael.b@example.com</TableCell>
                        <TableCell>linkedin.com/in/michaelbrown</TableCell>
                        <TableCell>1st</TableCell>
                        <TableCell>Hi Michael, let's connect.</TableCell>
                        <TableCell>95</TableCell>
                        <TableCell>Sent</TableCell>
                        <TableCell>Excellent background.</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )
}
