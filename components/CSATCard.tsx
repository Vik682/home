// components/Home/CSATCard.tsx
import React from 'react';
import { CSATPlan } from '@/types';


interface CSATCardProps {
  plan: CSATPlan;
}

const CSATCard: React.FC<CSATCardProps> = ({ plan }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 w-96">
      <h2 className="text-xl font-bold mb-2">{plan.title}</h2>
      <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
      <p className="text-gray-600 text-sm mb-4">
        {plan.currentCost} <span className="line-through">{plan.cost}</span> (Including GST)
      </p>
      <div className="flex items-center gap-2 mb-4">
        <svg 
          className="w-4 h-4 text-gray-500" 
          fill="currentColor" 
          viewBox="0 0 20 20" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM14 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z"></path>
        </svg>
        <p className="text-gray-600 text-sm">{plan.likes}</p>
      </div>
      <button 
        className={`${
          plan.open 
            ? 'bg-purple-500 hover:bg-purple-700' 
            : 'bg-gray-400 hover:bg-gray-500'
        } text-white font-bold py-2 px-4 rounded`}
      >
        {plan.open ? 'View Details & Subscribe' : 'Seats Full'}
      </button>
    </div>
  );
};

export default CSATCard;