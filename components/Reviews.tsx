'use client'; // Mark this as a Client Component

import React from 'react';

// Template Component
const Template: React.FC<{ name: string; rank: string; examYear: string; imageUrl: string; videoUrl: string }> = ({ name, rank, examYear, imageUrl, videoUrl }) => {
  return (
    <div className="bg-purple-500 p-6 rounded-lg shadow-lg max-w-sm mx-auto">
      <div className="text-center text-white font-bold text-3xl">{rank}</div>
      <div className="text-center text-white font-bold text-lg mt-2">{examYear}</div>
      <div className="flex justify-center mt-4">
        <img src={imageUrl} alt={`${name}`} className="rounded-full w-24 h-24" />
      </div>
      <div className="text-center text-white font-bold text-xl mt-4">{name}</div>
      <div className="text-center mt-4">
        <a href={videoUrl} target="_blank" rel="noopener noreferrer">
          <button className="bg-white text-purple-500 font-bold py-2 px-4 rounded-full hover:bg-purple-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707a1 1 0 00-1.414-1.414l-4 4a1 1 0 000 1.414l4 4a1 1 0 001.414-1.414L7.414 11H13a1 1 0 100-2H7.414l2.293-2.293z" clipRule="evenodd" />
            </svg>
            View Video
          </button>
        </a>
      </div>
    </div>
  );
};


import { templateDetails } from '@/app/api/data/data';
// Reviews Component
const Reviews: React.FC = () => {
  return (
    <div className="bg-violet-800 p-4">
      <h1 className="text-3xl font-bold text-white text-center my-6">Toppers from CheckIAS</h1>
      <div className="grid gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] place-content-center px-[3%]">
        {templateDetails.map((details, index) => (
          <Template
            key={index}
            name={details.name}
            rank={details.rank}
            examYear={details.examYear}
            imageUrl={details.imageUrl}
            videoUrl={details.videoUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
