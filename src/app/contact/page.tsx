"use client";

import Footer from "@/components/Footer/Footer";
import React, { useState, useEffect } from "react";

const ContactPage = () => {
  //入力されたデータをFormDataに管理したい
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  //送信状況のステータスを管理
  const [status, setStatus] = useState("");

  //フォームの状態管理
  const [isFormValid, setIsFormValid] = useState(false);

  //フォームの検証
  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // メールアドレスの正規表現パターン
    setIsFormValid(
      formData.name !== "" &&
        emailPattern.test(formData.email) &&
        formData.message !== ""
    );
  };

  //入力された値をformDataへ格納する処理
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    //formDataの各プロパティを維持したまま、入力した場所の値をセットする
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
    // console.log(formData);
    validateForm();
  };

  //送信ボタンの処理
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("送信中です...");

    //APIのリクエスト
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      //レスポンスの確認と表示切替。
      if (response.ok) {
        //成功。FormDataは初期化
        setStatus("メッセージの送信に成功しました。");
        setFormData({ name: "", email: "", message: "" });
      } else {
        //失敗。エラー表示
        setStatus("メッセージの送信に失敗しました。");
      }
      //そもそもレスポンスが返ってこない場合
    } catch (error) {
      console.error("メッセージ送信処理失敗!", error);
      setStatus("メッセージの送信に失敗しました。");
    }
  };
  //メッセージの送信に成功した場合に3秒間表示。
  useEffect(() => {
    if (status === "メッセージの送信に成功しました。") {
      const timer = setTimeout(() => {
        setStatus("");
      }, 3000); // 3秒後にメッセージを消す

      return () => clearTimeout(timer); //タイマーリセット
    }
  }, [status]);

  return (
    <div>
      <div className="p-20 bg-gray-100">
        <h2 className="text-6xl font-sans font-bold underline mb-16 text-center">
          CONTACT
        </h2>
        <form className="bg-white p-10 shadow rounded m-10">
          <div className="mx-10 mb-4">
            <label htmlFor="name" className="block text-gray-700">
              お名前
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 border rounded"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="mx-10 mb-4">
            <label htmlFor="email" className="block text-gray-700">
              メールアドレス
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mx-10 mb-4">
            <label htmlFor="message" className="block text-gray-700">
              本文
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-2 border rounded"
              required
              value={formData.message}
              onChange={handleChange}
              rows={3} // ここで高さを指定
            ></textarea>
          </div>
          <div className="flex justify-end mx-10 mb-4">
            <button
              type="submit"
              className="disabled:bg-gray-500 bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              送信
            </button>
          </div>
        </form>
      </div>
      {status && (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          {status}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ContactPage;
