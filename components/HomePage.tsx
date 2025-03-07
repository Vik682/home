// app/home/page.tsx (for Next.js 13 and later with the App Router)
// or
// pages/index.tsx (for Next.js 12 or earlier, or if not using the App Router)

"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // or 'next/router' for older Next.js versions

const HomePage: React.FC = () => {
  const router = useRouter();

  const handleViewEvaluationPlans = () => {
    router.push('/EvaluationPlans');
  };

  return (
    <div className="bg-white flex items-center w-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-24 flex w-[90vw]">
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Concerned about your UPSC mains?
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-gray-500">
            Get your answers evaluated by Interview-Appeared faculty
          </p>
          <div className="mt-8 flex justify-center">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Start For Free
            </a>
            <button
              onClick={handleViewEvaluationPlans}
              className="ml-4 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-600 bg-white hover:bg-indigo-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              View Evaluation Plans
            </button>
          </div>
        </div>
        <div className="mt-16">
          <img
            src="hero_illustration.svg"
            alt="Illustration"
            className="w-[400px] sm:w-[800px]"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
