"use client";

import axios from "axios";

const API_KEY =
  "REDACTED";
const API_URL = "https://api.brevo.com/v3/contacts";

const addEmailToNewLetter = async (email: string) => {
  try {
    const payload = {
      email: email,
      listIds: [2],
    };

    const response = await axios({
      method: "POST",
      url: API_URL,
      headers: {
        "api-key": API_KEY,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: payload,
    });

    return response.data;
  } catch (error) {
    console.error("Error adding email to newsletter:", error);
    throw error;
  }
};


export default addEmailToNewLetter;