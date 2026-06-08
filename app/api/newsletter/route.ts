import { NextResponse } from "next/server";

const API_URL = "https://api.brevo.com/v3/contacts";

export async function POST(request: Request) {
  const apiKey = process.env.BREVO_NEWSLETTER_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Newsletter service is not configured" },
      { status: 500 }
    );
  }

  try {
    const { email } = await request.json();

    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "api-key": apiKey,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [2],
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return NextResponse.json(data, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error adding email to newsletter:", error);
    return NextResponse.json(
      { error: "Failed to subscribe to newsletter" },
      { status: 500 }
    );
  }
}
