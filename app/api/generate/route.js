import { NextResponse } from 'next/server'

export async function POST(request) {
  try {
    if (!process.env.GEMINI_API_KEY) {
      return NextResponse.json(
        { error: 'Gemini API key not configured.' },
        { status: 500 }
      )
    }

    const { profile, jobDescription, length, tone } = await request.json()

    if (!profile || !jobDescription) {
      return NextResponse.json(
        { error: 'Profile and job description are required.' },
        { status: 400 }
      )
    }

    const lengthGuide = {
      short: '100-150 words.',
      medium: '200-300 words.',
      long: '400-500 words.',
    }

    const toneGuide = {
      professional: 'Use a formal, professional tone.',
      friendly: 'Use a warm, conversational tone.',
    }

    const prompt = `You are an expert freelance proposal writer. Write a compelling proposal.

FREELANCER PROFILE:
${profile}

JOB DESCRIPTION:
${jobDescription}

REQUIREMENTS:
- Length: ${lengthGuide[length] || lengthGuide.medium}
- Tone: ${toneGuide[tone] || toneGuide.professional}

Write only the proposal text, nothing else.`

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1/models/gemini-1.0-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.7, maxOutputTokens: 1000 }
        }),
      }
    )

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.error?.message || 'Failed to generate proposal')
    }

    const proposal = data.candidates?.[0]?.content?.parts?.[0]?.text?.trim()

    if (!proposal) {
      throw new Error('No proposal generated')
    }

    return NextResponse.json({ proposal })
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to generate proposal.' },
      { status: 500 }
    )
  }
}
