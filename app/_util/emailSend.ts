"use client";

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

    if (file) {
      const base64File = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = (error) => reject(error);
        reader.readAsDataURL(file);
      });

      attachments.push({
        name: file.name,
        content: base64File.split(",")[1],
      });
    }

    const payload = {
      sender: {
        name: senderName,
        email: senderEmail,
      },
      to: receivers.map((email) => ({ email })),
      subject,
      htmlContent,
      attachment: attachments,
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return response.json();
  } catch (error) {
    console.log("Error sending email:", error);
  }
};

export default sendEmail;
