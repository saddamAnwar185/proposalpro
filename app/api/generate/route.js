import { NextResponse } from 'next/server'

export async function POST(request) {
    try {
        // Check for API key
        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json(
                { error: 'Gemini API key not configured. Please add your GEMINI_API_KEY to the environment variables.' },
                { status: 500 }
            )
        }

        const { profile, jobDescription, length, tone } = await request.json()

        // Validate inputs
        if (!profile || !jobDescription) {
            return NextResponse.json(
                { error: 'Profile and job description are required.' },
                { status: 400 }
            )
        }

        // Define length guidelines
        const lengthGuide = {
            short: '100-150 words. Be concise and impactful.',
            medium: '200-300 words. Provide good detail without being too long.',
            long: '400-500 words. Be comprehensive and thorough.',
        }

        // Define tone guidelines  
        const toneGuide = {
            professional: 'Use a formal, professional tone. Be confident but not arrogant. Focus on qualifications and results.',
            friendly: 'Use a warm, conversational tone. Be personable and enthusiastic while still being professional. Show genuine interest in the project.',
        }

        const prompt = `You are an expert freelance proposal writer with years of experience helping freelancers win high-paying clients on platforms like Upwork, Fiverr, and Freelancer.

Your proposals are known for:
- Strong, attention-grabbing opening lines that show you understand the client's needs
- Clear demonstration of relevant experience and skills
- Specific mentions of how you would approach the project
- Professional yet personable tone
- Clear call to action

Write a freelance job proposal based on the following:

FREELANCER PROFILE:
${profile}

JOB DESCRIPTION:
${jobDescription}

REQUIREMENTS:
- Length: ${lengthGuide[length] || lengthGuide.medium}
- Tone: ${toneGuide[tone] || toneGuide.professional}

GUIDELINES:
1. Start with a hook that shows you understand the client's specific needs
2. Highlight relevant experience from the freelancer's profile that matches the job
3. Briefly explain your approach to the project
4. Include a confident but not arrogant closing with a call to action
5. Do NOT use generic phrases like "I am the perfect candidate" or "I would be happy to discuss"
6. Be specific and reference details from both the profile and job description
7. Do NOT include a subject line - just the proposal body

Write only the proposal text, nothing else.`

        // Call Gemini API
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    contents: [
                        {
                            parts: [
                                {
                                    text: prompt
                                }
                            ]
                        }
                    ],
                    generationConfig: {
                        temperature: 0.7,
                        maxOutputTokens: 1000,
                    }
                }),
            }
        )

        const data = await response.json()

        if (!response.ok) {
            console.error('Gemini API error:', data)
            throw new Error(data.error?.message || 'Failed to generate proposal')
        }

        // Extract the generated text from Gemini response
        const proposal = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

        if (!proposal) {
            throw new Error('No proposal generated')
        }

        return NextResponse.json({ proposal })
    } catch (error) {
        console.error('Error generating proposal:', error)

        return NextResponse.json(
            { error: error.message || 'Failed to generate proposal. Please try again.' },
            { status: 500 }
        )
    }
}
