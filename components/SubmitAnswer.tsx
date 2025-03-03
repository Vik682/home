// app/submit-answer/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { useAuth } from "@/context/context";
import { useRouter } from "next/navigation";

const SubmitAnswerPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();
  const [answerType, setAnswerType] = useState("");
  const [answersCount, setAnswersCount] = useState("0");
  const [containsPYQ, setContainsPYQ] = useState<string | null>(null);
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Simulate an API call or other asynchronous task
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setIsLoading(false);
    }
  };
  if (!isLoggedIn) {
    router.push("/");
  }
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-xl font-semibold text-violet-600 border-b-2 border-violet-600 inline-block">
          Submit Answer
        </h1>
      </div>

      {/* Form Content */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Answer Type Dropdown */}
          <div className="relative">
            <select
              title="Subject"
              value={answerType}
              onChange={(e) => setAnswerType(e.target.value)}
              className="w-full bg-violet-600 text-white px-4 py-2 rounded-md appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-violet-500"
              required
            >
              <option value="" disabled>
                Select Type
              </option>
              <option value="gs1">GS Paper 1</option>
              <option value="gs2">GS Paper 2</option>
              <option value="gs3">GS Paper 3</option>
              <option value="gs4">GS Paper 4</option>
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>

          {/* Answers Count */}
          <div className="flex items-center space-x-4">
            <label className="text-violet-600 font-medium">
              No. of answers submitted
            </label>
            <input
              title="Number"
              type="number"
              value={answersCount}
              onChange={(e) => setAnswersCount(e.target.value)}
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
              min="0"
            />
          </div>

          {/* File Upload */}
          <div className="border-2 border-dashed border-violet-300 rounded-lg p-8 text-center">
            <input
              type="file"
              multiple
              accept="image/*,.pdf"
              onChange={handleFileUpload}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <svg
                className="w-12 h-12 text-violet-600 mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 4v16m8-8H4"
                />
              </svg>
              <span className="text-gray-600">Add Image/PDF</span>
              {files.length > 0 && (
                <div className="mt-4 text-sm text-violet-600">
                  {files.length} file(s) selected
                </div>
              )}
            </label>
          </div>

          {/* PYQ Radio Buttons */}
          <div className="space-y-2">
            <label className="block text-gray-700">
              Contains PYQ <span className="text-gray-400">(optional)</span>
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="pyq"
                  value="yes"
                  checked={containsPYQ === "yes"}
                  onChange={(e) => setContainsPYQ(e.target.value)}
                  className="text-violet-600 focus:ring-violet-500"
                />
                <span>Yes</span>
              </label>
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  name="pyq"
                  value="no"
                  checked={containsPYQ === "no"}
                  onChange={(e) => setContainsPYQ(e.target.value)}
                  className="text-violet-600 focus:ring-violet-500"
                />
                <span>No</span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className={`
              w-full bg-violet-600 text-white py-2 px-4 rounded-md
              transition-all duration-200
              ${
                isLoading
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:bg-violet-700 hover:shadow-lg"
              }
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
            `}
          >
            {isLoading ? "Submitting..." : "Submit Answer"}
          </button>

          {/* Notes */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-2">
            <h3 className="text-violet-600 font-medium">Note</h3>
            <ul className="text-gray-600 text-sm list-disc list-inside space-y-1">
              <li>Upload multiple images or a single PDF</li>
              <li>
                Please note that handwriting mismatch from previously submitted
                answers will lead to subscription being cancelled without any
                refund
              </li>
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SubmitAnswerPage;
