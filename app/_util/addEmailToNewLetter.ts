"use client";

const addEmailToNewLetter = async (email: string) => {
  try {
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    if (!response.ok) {
      throw new Error("Failed to subscribe to newsletter");
    }

    return response.json();
  } catch (error) {
    console.error("Error adding email to newsletter:", error);
    throw error;
  }
};

export default addEmailToNewLetter;
