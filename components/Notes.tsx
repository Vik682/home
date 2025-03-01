// components/Home/Notes.tsx

'use client'; // Mark this as a Client Component

import React from 'react';
import { Note } from '@/types';
import { notesData } from '@/app/api/data/data';


// NoteCard Component
const NoteCard: React.FC<{ note: Note }> = ({ note }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 flex flex-col gap-4 max-w-xs mx-auto">
      <div className="text-xl font-bold">{note.title}</div>
      <div className="text-gray-600 text-sm">{note.description}</div>
      <div className="text-lg font-bold">
        {note.price} <span className="line-through">{note.originalPrice}</span> (Including GST)
      </div>
      <div className="flex items-center gap-2">
        <svg className="w-4 h-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM14 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6z"></path>
        </svg>
        <p className="text-gray-600 text-sm">{note.likes} likes</p>
      </div>
      <button className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-md">
        View Details & Subscribe
      </button>
    </div>
  );
};


// Notes Component
const Notes: React.FC = () => {
  return (
    <main className="flex flex-col h-screen bg-gray-100 p-4">
      {/* Heading for Notes Modules Section */}
      <header className="text-xl font-bold mb-4">
        Notes Modules
      </header>

      {/* Flex Container for Note Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 flex-grow">
        {notesData.map((note, index) => (
          <NoteCard key={index} note={note} />
        ))}
      </div>
    </main>
  );
};

export default Notes;
