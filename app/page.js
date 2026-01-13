'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div className="min-h-screen">
            {/* Navigation */}
            <nav className="glass fixed w-full z-50 border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16 items-center">
                        <div className="flex items-center">
                            <span className="text-2xl font-bold gradient-text">ProposalPro AI</span>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden md:flex items-center space-x-8">
                            <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
                            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition">How It Works</a>
                            <Link href="/auth/signin" className="text-gray-600 hover:text-purple-600 transition">
                                Sign In
                            </Link>
                            <Link
                                href="/generate"
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition btn-glow"
                            >
                                Get Started Free
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2"
                        >
                            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-purple-100 py-4">
                        <div className="flex flex-col space-y-4 px-4">
                            <a href="#features" className="text-gray-600 hover:text-purple-600 transition">Features</a>
                            <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 transition">How It Works</a>
                            <Link href="/auth/signin" className="text-gray-600 hover:text-purple-600 transition">Sign In</Link>
                            <Link
                                href="/generate"
                                className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-2 rounded-full font-medium text-center"
                            >
                                Get Started Free
                            </Link>
                        </div>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4">
                <div className="max-w-6xl mx-auto text-center animate-fade-in">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                        AI-Powered Proposal Generator
                    </div>

                    {/* Main headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                        Win More Clients with
                        <br />
                        <span className="gradient-text">AI-Generated Proposals</span>
                    </h1>

                    <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
                        Stop spending hours writing proposals. Let AI create personalized,
                        high-converting proposals in seconds that match your style and the job requirements.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Link
                            href="/generate"
                            className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition btn-glow pulse-glow flex items-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Generate Your First Proposal
                        </Link>
                        <a href="#how-it-works" className="text-gray-600 hover:text-purple-600 font-medium flex items-center gap-2 transition">
                            See How It Works
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </a>
                    </div>

                    {/* Social proof */}
                    <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-500 text-sm">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border-2 border-white flex items-center justify-center text-white text-xs font-medium">
                                    {String.fromCharCode(64 + i)}
                                </div>
                            ))}
                        </div>
                        <span>Joined by 2,500+ freelancers</span>
                        <div className="flex items-center gap-1">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                </svg>
                            ))}
                            <span className="ml-1">4.9/5 rating</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* App Screenshot/Preview */}
            <section className="py-10 px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-2xl shadow-2xl border border-purple-100 overflow-hidden card-hover">
                        <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                            <div className="w-3 h-3 rounded-full bg-red-400"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <span className="ml-4 text-sm text-gray-500">proposalpro.ai/generate</span>
                        </div>
                        <div className="p-8 bg-gradient-to-br from-purple-50 to-indigo-50">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-4">
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <label className="text-sm font-medium text-gray-700">Your Profile</label>
                                        <div className="mt-2 h-24 bg-gray-100 rounded animate-pulse"></div>
                                    </div>
                                    <div className="bg-white rounded-lg p-4 shadow-sm">
                                        <label className="text-sm font-medium text-gray-700">Job Description</label>
                                        <div className="mt-2 h-24 bg-gray-100 rounded animate-pulse"></div>
                                    </div>
                                </div>
                                <div className="bg-white rounded-lg p-4 shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <label className="text-sm font-medium text-gray-700">Generated Proposal</label>
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">AI Generated</span>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="h-3 bg-purple-100 rounded w-full"></div>
                                        <div className="h-3 bg-purple-100 rounded w-11/12"></div>
                                        <div className="h-3 bg-purple-100 rounded w-full"></div>
                                        <div className="h-3 bg-purple-100 rounded w-4/5"></div>
                                        <div className="h-3 bg-purple-100 rounded w-full"></div>
                                        <div className="h-3 bg-purple-100 rounded w-3/4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            Everything You Need to <span className="gradient-text">Win More Work</span>
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Our AI understands what clients want and crafts proposals that stand out from the competition.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-50 card-hover">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
                            <p className="text-gray-600">
                                Generate professional proposals in seconds, not hours. Spend more time on actual work.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-50 card-hover">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized</h3>
                            <p className="text-gray-600">
                                Each proposal is tailored to your profile and the specific job requirements.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-50 card-hover">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">High Win Rate</h3>
                            <p className="text-gray-600">
                                Our AI is trained on winning proposals to help you land more clients.
                            </p>
                        </div>

                        {/* Feature 4 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-50 card-hover">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Customizable</h3>
                            <p className="text-gray-600">
                                Choose proposal length and tone to match your personal style and the job needs.
                            </p>
                        </div>

                        {/* Feature 5 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-50 card-hover">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Easy Copy</h3>
                            <p className="text-gray-600">
                                One-click copy to clipboard. Paste directly into any freelance platform.
                            </p>
                        </div>

                        {/* Feature 6 */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-50 card-hover">
                            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-xl flex items-center justify-center mb-6">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Mobile Friendly</h3>
                            <p className="text-gray-600">
                                Generate proposals on any device. Perfect for applying on the go.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section id="how-it-works" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                            How It Works
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Three simple steps to create winning proposals
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Step 1 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                                1
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Paste Your Profile</h3>
                            <p className="text-gray-600">
                                Add your skills, experience, and the tone you want to convey to clients.
                            </p>
                        </div>

                        {/* Step 2 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                                2
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Add Job Description</h3>
                            <p className="text-gray-600">
                                Paste the job posting you want to apply for. Our AI analyzes the requirements.
                            </p>
                        </div>

                        {/* Step 3 */}
                        <div className="text-center">
                            <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg">
                                3
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">Get Your Proposal</h3>
                            <p className="text-gray-600">
                                Click generate and get a personalized proposal ready to send in seconds.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-16">
                        <Link
                            href="/generate"
                            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition btn-glow"
                        >
                            Try It Now — It's Free
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="py-12 px-4 border-t border-purple-100">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-2">
                            <span className="text-xl font-bold gradient-text">ProposalPro AI</span>
                        </div>
                        <div className="flex items-center gap-8 text-gray-500 text-sm">
                            <a href="#" className="hover:text-purple-600 transition">Privacy Policy</a>
                            <a href="#" className="hover:text-purple-600 transition">Terms of Service</a>
                            <a href="#" className="hover:text-purple-600 transition">Contact</a>
                        </div>
                        <div className="text-gray-400 text-sm">
                            © 2024 ProposalPro AI. All rights reserved.
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
