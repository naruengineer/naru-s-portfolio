import React from "react";
import Footer from "@/components/Footer/Footer";

const HobbyPage = () => {
  return (
    <div>
      <div className="p-20 bg-gray-100">
        <h2 className="text-6xl font-sans font-bold underline mb-16 text-center">
          MY HOBBYS
        </h2>
        <div className="m-10 flex bg-white p-10 shadow-md rounded-lg justify-between"></div>
        <hr />
        <div className="m-10 flex bg-white p-10 shadow-md rounded-lg justify-between"></div>
      </div>
      <Footer />
    </div>
  );
};

export default HobbyPage;
