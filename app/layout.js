import './globals.css'

export const metadata = {
    title: 'ProposalPro AI - Generate Winning Freelance Proposals',
    description: 'Use AI to create personalized, high-quality job proposals in seconds. Win more clients with professional proposals tailored to each job.',
    keywords: 'freelance, proposal, AI, job application, freelancer, Upwork, Fiverr',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
            </head>
            <body style={{ fontFamily: "'Inter', sans-serif" }}>
                {children}
            </body>
        </html>
    )
}
