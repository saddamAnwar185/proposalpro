'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function GeneratePage() {
    const [profile, setProfile] = useState('')
    const [jobDescription, setJobDescription] = useState('')
    const [length, setLength] = useState('medium')
    const [tone, setTone] = useState('professional')
    const [proposal, setProposal] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [copied, setCopied] = useState(false)
    const [error, setError] = useState('')

    const handleGenerate = async () => {
        if (!profile.trim() || !jobDescription.trim()) {
            setError('Please fill in both your profile and the job description.')
            return
        }

        setIsLoading(true)
        setError('')
        setProposal('')

        try {
            const response = await fetch('/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    profile,
                    jobDescription,
                    length,
                    tone,
                }),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Failed to generate proposal')
            }

            setProposal(data.proposal)
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(proposal)
            setCopied(true)
            setTimeout(() => setCopied(false), 2000)
        } catch (err) {
            setError('Failed to copy. Please select and copy manually.')
        }
    }

    const handleClear = () => {
        setProfile('')
        setJobDescription('')
        setProposal('')
        setError('')
    }

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="glass fixed w-full z-50 border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <Link href="/" className="flex items-center">
                            <span className="text-2xl font-bold gradient-text">ProposalPro AI</span>
                        </Link>

                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-gray-600 hover:text-purple-600 transition">
                                Home
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="pt-24 pb-12 px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-10 animate-fade-in">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Generate Your <span className="gradient-text">Winning Proposal</span>
                        </h1>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Fill in your profile and the job description, then let AI craft the perfect proposal for you.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Column - Inputs */}
                        <div className="space-y-6 animate-fade-in">
                            {/* Profile Input */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-50">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    📝 Your Freelancer Profile
                                </label>
                                <p className="text-xs text-gray-500 mb-3">
                                    Include your skills, experience, past projects, and your unique value proposition.
                                </p>
                                <textarea
                                    value={profile}
                                    onChange={(e) => setProfile(e.target.value)}
                                    placeholder="Example: I'm a full-stack developer with 5 years of experience. I specialize in React, Node.js, and Python. I've built e-commerce platforms, SaaS applications, and mobile apps. I'm known for clean code, meeting deadlines, and excellent communication..."
                                    className="w-full h-40 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition text-gray-700"
                                />
                                <div className="text-xs text-gray-400 mt-2 text-right">
                                    {profile.length} characters
                                </div>
                            </div>

                            {/* Job Description Input */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-50">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    💼 Job Description
                                </label>
                                <p className="text-xs text-gray-500 mb-3">
                                    Paste the job posting you want to apply for.
                                </p>
                                <textarea
                                    value={jobDescription}
                                    onChange={(e) => setJobDescription(e.target.value)}
                                    placeholder="Paste the job description here..."
                                    className="w-full h-40 px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition text-gray-700"
                                />
                                <div className="text-xs text-gray-400 mt-2 text-right">
                                    {jobDescription.length} characters
                                </div>
                            </div>

                            {/* Options */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-50">
                                <div className="grid sm:grid-cols-2 gap-6">
                                    {/* Length */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            📏 Proposal Length
                                        </label>
                                        <div className="flex gap-2">
                                            {['short', 'medium', 'long'].map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => setLength(option)}
                                                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${length === option
                                                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tone */}
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-3">
                                            🎭 Tone
                                        </label>
                                        <div className="flex gap-2">
                                            {['professional', 'friendly'].map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => setTone(option)}
                                                    className={`flex-1 py-2 px-3 rounded-lg text-sm font-medium transition ${tone === option
                                                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white'
                                                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                                        }`}
                                                >
                                                    {option.charAt(0).toUpperCase() + option.slice(1)}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Generate Button */}
                            <div className="flex gap-4">
                                <button
                                    onClick={handleGenerate}
                                    disabled={isLoading}
                                    className={`flex-1 py-4 px-6 rounded-xl font-semibold text-lg transition flex items-center justify-center gap-2 ${isLoading
                                            ? 'bg-gray-300 cursor-not-allowed'
                                            : 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:opacity-90 btn-glow'
                                        }`}
                                >
                                    {isLoading ? (
                                        <>
                                            <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Generating...
                                        </>
                                    ) : (
                                        <>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                            </svg>
                                            Generate Proposal
                                        </>
                                    )}
                                </button>
                                <button
                                    onClick={handleClear}
                                    className="py-4 px-6 rounded-xl font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 transition"
                                >
                                    Clear
                                </button>
                            </div>

                            {/* Error Message */}
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                                    ⚠️ {error}
                                </div>
                            )}
                        </div>

                        {/* Right Column - Output */}
                        <div className="animate-fade-in">
                            <div className="bg-white rounded-2xl p-6 shadow-lg border border-purple-50 h-full flex flex-col">
                                <div className="flex items-center justify-between mb-4">
                                    <label className="block text-sm font-semibold text-gray-700">
                                        ✨ Generated Proposal
                                    </label>
                                    {proposal && (
                                        <button
                                            onClick={handleCopy}
                                            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition ${copied
                                                    ? 'bg-green-100 text-green-600'
                                                    : 'bg-purple-100 text-purple-600 hover:bg-purple-200'
                                                }`}
                                        >
                                            {copied ? (
                                                <>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                    </svg>
                                                    Copied!
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                                    </svg>
                                                    Copy to Clipboard
                                                </>
                                            )}
                                        </button>
                                    )}
                                </div>

                                <div className="flex-1 min-h-[400px]">
                                    {proposal ? (
                                        <div className="h-full">
                                            <textarea
                                                value={proposal}
                                                onChange={(e) => setProposal(e.target.value)}
                                                className="w-full h-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none transition text-gray-700 bg-gradient-to-br from-purple-50 to-indigo-50"
                                            />
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl border-2 border-dashed border-purple-200">
                                            <div className="text-center p-8">
                                                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                    </svg>
                                                </div>
                                                <p className="text-gray-500 text-sm">
                                                    Your AI-generated proposal will appear here
                                                </p>
                                                <p className="text-gray-400 text-xs mt-2">
                                                    Fill in your profile and job description, then click Generate
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {proposal && (
                                    <div className="mt-4 flex items-center justify-between text-xs text-gray-400">
                                        <span>{proposal.length} characters</span>
                                        <span>~{Math.ceil(proposal.split(/\s+/).length)} words</span>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Tips Section */}
                    <div className="mt-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
                        <h3 className="text-xl font-bold mb-4">💡 Pro Tips for Better Proposals</h3>
                        <div className="grid sm:grid-cols-3 gap-6 text-sm">
                            <div>
                                <strong className="block mb-2">Be Specific</strong>
                                <p className="opacity-90">Include concrete examples of relevant past work in your profile.</p>
                            </div>
                            <div>
                                <strong className="block mb-2">Match the Tone</strong>
                                <p className="opacity-90">Use &quot;Friendly&quot; for creative jobs, &quot;Professional&quot; for corporate clients.</p>
                            </div>
                            <div>
                                <strong className="block mb-2">Edit & Personalize</strong>
                                <p className="opacity-90">Add a personal touch after generating. Mention specifics from the job post.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
