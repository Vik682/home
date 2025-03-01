// components/Home/Csat.tsx
'use client';

import React from 'react';
import CSATCard from './CSATCard';
import { CSATPlan } from '@/types';
import { CSATPlans } from '@/app/api/data/data';


const Csat: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 p-4">
      {/* Heading for CSAT Section */}
      <h1 className="text-2xl font-bold mb-6">CSAT</h1>
      
      {/* Button Group */}
      <div className="flex gap-4 mb-4">
        <button className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          CSAT
        </button>
        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
          Sessions
        </button>
      </div>

      {/* Flex Container for CSAT Cards */}
      <div className="flex gap-4">
        {CSATPlans.map((plan, index) => (
          <CSATCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Csat;