'use client';
import React, { useState, useEffect } from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

// Define the structure of an application
interface Application {
    id: number;
    jobBoard: string;
    inboundOutbound: 'Inbound' | 'Outbound';
    job: string;
    location: string;
    name: string;
    resume: string;
    candidateEmail: string;
    linkedinUrl: string;
    linkedinConnection: string;
    linkedinMessage: string;
    atsScore: number | string;
    email1: 'Sent' | 'Not Sent';
    recruiterComments: string;
}

export default function ApplicationFeedPage() {
    const [applications, setApplications] = useState<Application[]>([]);

    // NOTE: Replace with your actual API endpoint from .env.local
    const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

    const fetchApplications = async () => {
        if (!API_URL) {
            console.error("API_URL is not defined. Please check your .env.local file.");
            return;
        }
        try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : String(error);
            console.error("Failed to fetch applications:", errorMessage);
            // Handle cases where the response is not valid JSON, like an HTML error page
            if (errorMessage.includes("Unexpected token '<'")) {
                console.error("The API response was not valid JSON. It might be an HTML error page. Please check the API endpoint and network logs.");
            }
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    return (
        <div className='p-8'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className="text-2xl font-bold text-[var(--reco-green-20)]">Application Feed</h1>
                <div className='flex items-center justify-center gap-2'>
                    <button className="bg-[var(--reco-green-30)] hover:bg-[var(--reco-green-70)] text-white px-4 py-2 rounded cursor-pointer text-sm">
                        Download CSV
                    </button>
                    <button className="bg-[var(--reco-green-30)] hover:bg-[var(--reco-green-70)] text-white px-4 py-2 rounded cursor-pointer text-sm">
                        Download Excel
                    </button>
                    <div>
              <select id="date-filter" name="date-filter" className="h-10 border-2 border-[var(--reco-green-40)] p-2 rounded items-center text-sm">
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
                        <TableHead className="w-[150px]">Inbound/Outbound</TableHead>
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
                    {applications.map((app) => (
                        <TableRow key={app.id}>
                            <TableCell>{app.jobBoard}</TableCell>
                            <TableCell>{app.inboundOutbound}</TableCell>
                            <TableCell>{app.job}</TableCell>
                            <TableCell>{app.location}</TableCell>
                            <TableCell>{app.name}</TableCell>
                            <TableCell>{app.resume}</TableCell>
                            <TableCell>{app.candidateEmail}</TableCell>
                            <TableCell>{app.linkedinUrl}</TableCell>
                            <TableCell>{app.linkedinConnection}</TableCell>
                            <TableCell>{app.linkedinMessage}</TableCell>
                            <TableCell>{app.atsScore}</TableCell>
                            <TableCell>{app.email1}</TableCell>
                            <TableCell>{app.recruiterComments}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
