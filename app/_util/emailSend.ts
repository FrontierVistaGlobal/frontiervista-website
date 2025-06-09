"use client";

import axios from "axios";

const API_KEY =
  "REDACTED";
const API_URL = "https://api.brevo.com/v3/smtp/email";

const sendEmail = async ({
  subject,
  senderName,
  senderEmail,
  htmlContent,
  receivers,
  file,
}: {
  subject: string;
  senderName: string;
  senderEmail: string;
  htmlContent: string;
  receivers: string[];
  file?: File;
}) => {
  try {
    const attachments = [];

    // If a file is provided, convert it to base64 and add to attachments
    if (file) {
      const base64File = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });

      attachments.push({
        name: file.name,
        content: base64File.split(",")[1], // Remove the data URI prefix
      });
    }

    const payload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: receivers.map((email) => ({ email })), // Receivers should be an array of email addresses
      subject: subject,
      htmlContent: htmlContent,
      attachment: attachments,
    };
    console.log(payload);

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

    console.log(response);

    return response.data;
  } catch (error) {
    console.log("Error sending email:", error);
  }
};

export default sendEmail;
