import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";

const ProfilePage = () => {
  return (
    <div>
      <div className="p-20 bg-gray-100">
        <h2 className="text-6xl font-sans font-bold underline mb-16 text-center">
          MY PROFILE
        </h2>
        <div className="m-10 flex bg-white p-10 shadow-md rounded-lg justify-between">
          <div className="">
            <div className="text-xl font-semibold mt-5">基本情報</div>
            <div className="flex mt-10">
              <div>
                <ul className="mr-5 font-semibold">
                  <li>氏名 :</li>
                  <li>年齢 :</li>
                  <li>出身 :</li>
                  <li>経歴 :</li>
                  <li>資格 :</li>
                  <li>スキル :</li>
                  <li>趣味1 :</li>
                  <li>趣味2 :</li>
                </ul>
              </div>
              <div>
                <ul className="mr-5">
                  <li>安藤 成希</li>
                  <li>25歳</li>
                  <li>茨城県</li>
                  <li>明治大学/銀行員</li>
                  <li>基本情報技術者/ITコーディネータ/FP2級/簿記2級</li>
                  <li>Javascript/Typescrpt/React/Next.js/node.js</li>
                  <li>サッカー/筋トレ</li>
                  <li>キャンプ/登山/映画鑑賞</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="ml-28 mt-5">
            <Image
              src="/image_123650291.JPG"
              alt="NaruIcon1"
              className=""
              width={200}
              height={200}
              // style={{ aspectRatio: "1 / 1" }}
            />
          </div>
        </div>
        <hr />
        <div className="m-10 flex bg-white p-10 shadow-md rounded-lg justify-between">
          <div className="">
            <div className="text-xl font-semibold mt-5">自己紹介</div>
            <div className="flex  flex-col mt-10">
              <div>
                <p className="mr-5 font-semibold">現在</p>
              </div>
              <div>
                <p className="mr-5">
                  はじめまして。安藤成希と申します。明治大学卒業後、銀行の営業職に従事。業務や日常の中でITが世界に大きなインパクトを与えている点に魅了され、エンジニアへのキャリアチェンジを決意しました。
                </p>
                <p className="mr-5">
                  現在は独学で日々学習しており、特にJavascript/Typescriptの各種フレームワークを利用した開発を学習しております。
                </p>
                <p>
                  また平日は筋トレや映画鑑賞を、休みの日はアウトドアを楽しんでいます。
                </p>
              </div>
              <div>
                <p className="mr-5 mt-5 font-semibold">今後</p>
              </div>
              <div>
                <p className="mr-5">
                  フロントエンドとバックエンドの両領域を扱えるように学習を継続。
                </p>
              </div>
              <div>
                <p className="mr-5 mt-5 font-semibold">将来</p>
              </div>
              <div>
                <p className="mr-5">
                  世界中で使用されるようなサービス・プロダクトを開発し、多くの人に使って貰う！
                </p>
              </div>
            </div>
          </div>
          <div className="ml-20 mt-20">
            <Image
              src="/3573D9AC-EDA4-4708-BBD6-2058A218F9CD.jpg"
              alt="NaruIcon2"
              className=""
              width={320}
              height={700}
              // style={{ aspectRatio: "1 / 1" }}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfilePage;
