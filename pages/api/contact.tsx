import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //POSTメソッドのみ処理
  if (req.method === "POST") {
    //受け取った各要素を格納
    const { name, email, message } = req.body;
    //Gmailのサーバーに接続
    const transpoter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
    //メール概要設定　formからtoへ送信。Subjectは件名。
    const mailOptions = {
      from: email,
      to: process.env.GMAIL_USER,
      subject: `ポートフォリオサイトからの問い合わせ。 ${name}様`,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`,
    };
    try {
      await transpoter.sendMail(mailOptions);
      res.status(200).json({ message: "メッセージの送信に成功しました。" });
    } catch (error) {
      console.error("メッセージの送信に失敗しました:", error);
      res.status(500).json({ error: "メッセージの送信に失敗しました。" });
    }
  } else {
    res.status(405).json({ error: "メソッドに誤りがあります。" });
  }
}
