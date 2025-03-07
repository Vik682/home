// components/Home/EvaluationPlans.tsx

'use client'; // Mark this as a Client Component

import React from 'react';
import { plans } from '@/app/api/data/data';
interface PlanCardProps {
  title: string;
  features: string[];
  price: string;
  oldPrice?: string;
  note?: string;
  isEmiAvailable?: boolean;
}

const PlanCard: React.FC<PlanCardProps> = ({ title, features, price, oldPrice, note, isEmiAvailable }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index}>✔ {feature}</li>
        ))}
      </ul>
      <div className="mt-4">
        <span className="text-lg font-bold">{price}</span>
        {oldPrice && <span className="text-gray-500 line-through ml-2">{oldPrice}</span>}
        <span className="text-gray-500 ml-2">(Including GST)</span>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Subscribe</button>
      {isEmiAvailable && (
        <>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2">Pay in EMI</button>
          <div className="mt-2">
            <p className="text-gray-500">{note}</p>
          </div>
        </>
      )}
    </div>
  );
};

const EvaluationPlans: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-8 px-4">
      <div className="sticky top-10 bg-white p-4 rounded-lg shadow-lg w-full max-w-md mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Evaluation Plans</h2>
        <div className="text-gray-600 mb-4">
          <a href="#" className="text-blue-500 hover:underline">Convert's Circle</a> - A new initiative coming soon!
        </div>
        <div className="grid grid-cols-3 gap-4">
          <button className="bg-gray-100 text-gray-800 font-medium rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors">GS/ESSAY</button>
          <button className="bg-gray-100 text-gray-800 font-medium rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors">OPTIONAL</button>
          <button className="bg-gray-100 text-gray-800 font-medium rounded-lg px-4 py-2 hover:bg-gray-200 transition-colors">COMBO</button>
        </div>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, index) => (
            <PlanCard key={index} {...plan} />
          ))}
        </div>
        {/* Note Section */}
        <div className="mt-4">
          <p className="text-gray-500">
            <strong>Note:</strong>
            <br />
            24 Working hours is for up to 5 Questions/1 Essay. Full length takes 5-7 days for Evaluation
            <br />
            Working hours is defined as 9 hours a day
            <br />
            Complimentary Mentorship calls with your Mentors are on Demand basis and can be availed once a month
            <br />
            24 working hours is the average timeline. As Evaluation is a Human Intensive process no deadline can be guaranteed.
            <br />
            The Unlimited Evaluation Plan will end 10 days before the first Mains paper. During the last 10 days, only pending copies will be evaluated; no new submissions will be accepted.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EvaluationPlans;
