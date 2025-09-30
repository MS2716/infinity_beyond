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
import { PlusCircle } from 'lucide-react';

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formData, setFormData] = useState<Omit<Application, 'id'>>({
        jobBoard: '',
        inboundOutbound: 'Inbound',
        job: '',
        location: '',
        name: '',
        resume: '',
        candidateEmail: '',
        linkedinUrl: '',
        linkedinConnection: '',
        linkedinMessage: '',
        atsScore: '',
        email1: 'Not Sent',
        recruiterComments: ''
    });

    // NOTE: Replace with your actual API endpoint from .env.local
    const API_URL = process.env.NEXT_PUBLIC_API_URL ?? '';

    const fetchApplications = async () => {
        if (!API_URL) {
            console.error("API_URL is not defined.");
            return;
        }
        try {
            // This is a placeholder for fetching data.
            // In a real app, you would fetch from your backend:
            const response = await fetch(API_URL);
            const data = await response.json();
            setApplications(data);
        } catch (error) {
            console.error("Failed to fetch applications:", error);
        }
    };

    useEffect(() => {
        fetchApplications();
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!API_URL) {
            console.error("API_URL is not defined.");
            return;
        }
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                console.log('Application submitted successfully');
                alert('Application has been added successfully!');
                setIsModalOpen(false);
                fetchApplications(); // Re-fetch applications to update the table
            } else {
                console.error('Failed to submit application:', response.statusText);
            }
        } catch (error) {
            console.error('Error submitting application:', error);
        }
    };

    return (
        <div className='p-8'>
            <div className='flex items-center justify-between mb-4'>
                <h1 className="text-2xl font-bold text-[var(--reco-green-20)]">Application Feed</h1>
                <div className='flex items-center justify-center gap-2'>
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[var(--reco-green-0)] hover:bg-[var(--reco-green-50)] text-white px-4 py-2 rounded cursor-pointer text-sm flex items-center gap-2">
                        <PlusCircle size={16} />
                        Add Application
                    </button>
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
            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-[var(--reco-green-100)] p-8 rounded-lg shadow-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
                        <h2 className="text-2xl font-bold text-[var(--reco-green-0)] mb-4">Add New Application</h2>
                        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Form fields go here, mapping to the 'formData' state */}
                            {Object.keys(formData).map((key) => (
                                <div key={key}>
                                    <label htmlFor={key} className="block text-sm font-medium text-[var(--reco-green-0)] capitalize">
                                        {key.replace(/([A-Z])/g, ' $1')}
                                    </label>
                                    <input
                                        type={key.includes('Email') ? 'email' : key.includes('Score') ? 'number' : 'text'}
                                        id={key}
                                        name={key}
                                        value={formData[key as keyof typeof formData]}
                                        onChange={handleChange}
                                        className="mt-1 block w-full border-2 border-[var(--reco-green-40)] p-2 rounded"
                                        required={!['linkedinMessage', 'recruiterComments'].includes(key)}
                                    />
                                </div>
                            ))}
                            <div className="md:col-span-2 flex justify-end gap-4 mt-4">
                                <button type="button" onClick={() => setIsModalOpen(false)} className="bg-gray-300 hover:bg-gray-400 text-black px-4 py-2 rounded">
                                    Cancel
                                </button>
                                <button type="submit" className="bg-[var(--reco-green-0)] hover:bg-[var(--reco-green-50)] text-white px-4 py-2 rounded">
                                    Submit Application
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}
