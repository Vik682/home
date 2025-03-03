// app/my-answers/page.tsx
"use client";

import { useState } from "react";
import { useAuth } from "@/context/context";
import { useRouter } from "next/navigation";
import { submittedAnswers } from "@/app/api/data/data";

const AnswersPage = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
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
          My Answers
        </h1>
      </div>
      {submittedAnswers.length > 0 ? (
        <div className="space-y-6">
          { submittedAnswers.map((answer) => (
            <div key={answer.id} className="border-b py-4">
              <h2 className="text-xl font-semibold text-violet-600">
                {answer.title}
              </h2>
              <p className="text-gray-600 text-sm">
                Submitted on {answer.date}
              </p>
              <p className="text-gray-800 mt-2">{answer.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            {/* Illustration */}
            <div className="w-48 h-48">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Person */}
                <circle cx="100" cy="80" r="30" fill="#F3E8FF" />
                <circle cx="100" cy="70" r="20" fill="#A855F7" />
                <rect
                  x="70"
                  y="110"
                  width="60"
                  height="80"
                  rx="10"
                  fill="#F3E8FF"
                />

                {/* Arms */}
                <path
                  d="M70 130 L50 150"
                  stroke="#A855F7"
                  strokeWidth="8"
                  strokeLinecap="round"
                />
                <path
                  d="M130 130 L150 150"
                  stroke="#A855F7"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Question mark bubble */}
                <circle
                  cx="160"
                  cy="40"
                  r="15"
                  fill="#F3E8FF"
                  stroke="#A855F7"
                  strokeWidth="2"
                />
                <text
                  x="155"
                  y="47"
                  fill="#A855F7"
                  fontSize="20"
                  fontWeight="bold"
                >
                  ?
                </text>
              </svg>
            </div>

            {/* Text Content */}
            <div className="text-center">
              <h2 className="text-xl font-semibold text-violet-600 mb-2">
                No answers found
              </h2>
              <p className="text-gray-600 mb-4">
                You haven&apos;t submitted any answers yet.
              </p>
            </div>

            {/* Submit Button */}
            <button
              onClick={()=>router.push("/SubmitAnswer")}
              disabled={isLoading}
              className={`
              bg-violet-600 text-white px-6 py-2 rounded-md
              transition-all duration-200
              focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2
              ${
                isLoading
                  ? "opacity-75 cursor-not-allowed"
                  : "hover:bg-violet-700 hover:shadow-lg transform hover:-translate-y-0.5"
              }
            `}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Loading...
                </span>
              ) : (
                "Submit Answer"
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnswersPage;
