// components/Home/Maw.tsx

"use client"; // Mark this as a Client Component

import React from "react";
import CSATCard from "./CSATCard";
import { CSATPlan } from "@/types";
import { MAWPlan } from "@/app/api/data/data";
const MAW: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4 w-full">
      {/* Heading for MAW Section */}
      <h1 className="text-2xl font-bold mb-6">Mentored Answer Writing</h1>

      {/* Button Group */}
      <div className="flex gap-4 mb-4">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          MAW
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Sessions
        </button>
      </div>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(400px,1fr))] place-content-center px-[3%] w-full">
        {MAWPlan.map((plan, index) => (
          <CSATCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default MAW;
