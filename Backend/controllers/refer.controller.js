import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";
const prisma = new PrismaClient();

export const AddRefere = async (req, res) => {
  const { user_name, refree_name, user_email, refree_email, phoneno } =
    req.body;

  if (!user_name || !refree_name || !user_email || !refree_email || !phoneno) {
    return res.status(400).json({ error: "All fields are required" });
  }

  // if (typeof phoneno !== "number") {
  //   return res.status(400).json({ error: "Phone number must be a number" });
  // }

  console.log(req.body);
  const referralCode = user_name + "50";

  try {
    const newReferral = await prisma.referral.create({
      data: {
        user_name,
        refree_name,
        user_email,
        refree_email,
        referralCode,
        phoneno,
      },
    });

    // Send referral email
    await sendReferralEmail(refree_email, referralCode, user_name);

    res.status(200).json({
      success: true,
      message: "Referee added to database",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while saving the referral data" });
    console.log(error);
  }
};

// Function to send referral email
async function sendReferralEmail(email, referralCode, name) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  let mailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "Referral Code",
    html: `<h2>Congrats !!!</h2><br>
        You have been refered to join Accredian by <i>${name}</i>.<br>Login now to get exciting offers.<br>
     <b>Your referral code is ${referralCode}</b>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
