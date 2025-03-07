"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios"; // Ensure axios is installed and imported
import { sendOtpToEmail, verifyOtp, logout } from "@/app/api/login/route";
import { useAuth } from "@/context/context";
const Header = () => {
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isOtpSent, setOtpSent] = useState(false);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const router = useRouter();
  const [profileExist, setProfileExist] = useState(true);
  const [name, setName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [optionalSubject, setOptionalSubject] = useState("");
  const [targetYear, setTargetYear] = useState("");
  const [medium, setMedium] = useState("");
  const [state, setState] = useState("");
  const [answerEvalMode, setAnswerEvalMode] = useState(false);

  // Toggle the login modal's visibility
  const toggleLoginModal = () => {
    setLoginModalOpen(!isLoginModalOpen);
    setOtpSent(false); // Reset OTP state when modal is opened
    setError(null);
    setMessage(null);
  };
  const toggleAnswerEvalMode = () => {
    setAnswerEvalMode(!answerEvalMode);
  };
  const Login = () => {
    setIsLoggedIn(true);
    console.log("Login called", isLoggedIn);
  };
  const Signup = () => {
    setProfileExist(true);
  };
  const Logout = () => {
    setIsLoggedIn(false);
    console.log("Logout called", isLoggedIn);
  };

  const setOtpField = (e: any) => {
    if (e.target.value.length <= 6) {
      setOtp(e.target.value);
    }
  };
  // Handle Send OTP button click
  const handleSendOtp = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    setOtpSent(false);
    setOtpSent(await sendOtpToEmail(email));
  };

  // Handle Continue button click
  const handleContinue = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setMessage(null);
    if (otp.length != 6) {
      setError("Invalid OTP Length");
    }
    if (await verifyOtp(email, otp)) {
      setMessage("OTP verified successfully");
      setLoginModalOpen(false);
      Login();
    } else {
      setError("Invalid OTP");
    }
  };

  return (
    <div className="bg-white shadow-md flex h-25 px-4 py-3 z-15">
      {/* Top section with login button */}
      <div className="flex items-center justify-between h-1/4">
        <div className="flex items-center">
          <img
            src=""
            alt="IAS Symbol"
            className="h-8 w-8 cursor-pointer" // Adjust logo size
            // onClick={() => router.push("/")}
          />
        </div>
      </div>

      {/* Bottom section with navigation buttons */}
      <div className="flex-grow flex items-end justify-center">
        <ul className="flex flex-wrap space-x-10 ml-auto">
          {isLoggedIn ? (
            <li className="flex justify-center flex-col">
              <button
                onClick={() => toggleAnswerEvalMode()}
                className="font-medium hover:text-blue-600 px-3 py-1 rounded-sm font-medium hover:bg-orange-200 flex items-center"
              >
                Answer Evaluation
                <svg
                  className="ml-2 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {answerEvalMode && (
                <ul className="absolute top-[3em] bg-gray-100 text-gray-500 px-3 py-1 rounded-sm font-medium hover:bg-gray-200 flex flex-col items-center">
                  <li>
                    <button
                      onClick={() => {
                        router.push("/SubmitAnswer");
                        toggleAnswerEvalMode();
                      }}
                      id="submit-answer-button"
                    >
                      Submit Answer
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        router.push("/Answer");
                        toggleAnswerEvalMode();
                      }}
                      id="answer-button"
                    >
                      My Answer
                    </button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <></>
          )}
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/EvaluationPlans")}
              className="font-medium text-violet-500 hover:text-blue-600"
            >
              Evaluation Plans
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/NewPrelims")}
              className="bg-orange-100 text-orange-500 px-3 py-1 rounded-sm font-medium hover:bg-orange-200 flex items-center"
            >
              New Prelims
              <svg
                className="ml-2 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/")}
              className="font-medium hover:text-blue-600"
            >
              Home
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/Csat")}
              className="font-medium hover:text-blue-600"
            >
              CSAT
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/Notes")}
              className="font-medium hover:text-blue-600"
            >
              Notes
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/MAW")}
              className="font-medium hover:text-blue-600"
            >
              MAW
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/Videos")}
              className="font-medium hover:text-blue-600"
            >
              Videos
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/ToppersCopies")}
              className="font-medium hover:text-blue-600"
            >
              Toppers Copies
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/ContactUs")}
              className="font-medium hover:text-blue-600"
            >
              Contact Us
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("/Reviews")}
              className="font-medium hover:text-blue-600"
            >
              Reviews
            </button>
          </li>
          <li className="flex justify-center">
            <button
              onClick={() => router.push("https://jobs.checkias.com")}
              className="font-medium hover:text-blue-600"
            >
              Careers
            </button>
          </li>
          <li className="flex justify-center">
            {isLoggedIn ? (
              <button
                onClick={Logout} // Added click handler to open login modal
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded outline focus:shadow-outline"
              >
                Logout
              </button>
            ) : (
              <button
                onClick={toggleLoginModal} // Added click handler to open login modal
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Login
              </button>
            )}
          </li>
        </ul>
      </div>

      {/* Login Modal */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-md relative w-96">
            <div
              onClick={toggleLoginModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="sticky flex flex-col items-center z-10">
              <img
                src="https://www.wikimedia.org/static/images/wmf-logo.png"
                alt="IAS Symbol"
                className="h-12 w-12 mb-4" // Adjust logo size if needed
              />
              <form
                className="w-full flex flex-col items-center"
                onSubmit={isOtpSent ? handleContinue : handleSendOtp}
              >
                {!isOtpSent ? (
                  <div className="w-full flex flex-col items-center">
                    <input
                      placeholder="Email"
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="mb-4 mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />

                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Send OTP
                    </button>
                  </div>
                ) : (
                  <div className="w-full flex flex-col items-center">
                    <input
                      type="text"
                      placeholder="Enter OTP"
                      value={otp}
                      onChange={setOtpField}
                      className="mb-4 mt-2 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                    <button
                      type="submit"
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                      Continue
                    </button>
                  </div>
                )}
              </form>
              {error && <p className="text-red-500 mt-2">{error}</p>}
              {message && <p className="text-green-500 mt-2">{message}</p>}
            </div>
          </div>
        </div>
      )}
      {isLoggedIn && !profileExist && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-10">
          <div className="bg-white p-6 rounded-lg shadow-md relative w-96">
            <div className="sticky flex flex-col items-center z-10">
              <img
                src="https://www.wikimedia.org/static/images/wmf-logo.png"
                alt="IAS Symbol"
                className="h-12 w-12 mb-4" // Adjust logo size if needed
              />
              <form
                className="w-full flex flex-col items-center"
                onSubmit={Signup}
              >
                <div className="mb-4 w-full">
                  <div className="flex mb-3">
                    <input
                      placeholder="Name"
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex mb-3">
                    <input
                      placeholder="Mobile Number"
                      type="text"
                      id="mobNum"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    />
                  </div>
                  <div className="flex mb-3">
                    <select
                      title="Optional Subject"
                      id="optional"
                      value={optionalSubject}
                      onChange={(e) => setOptionalSubject(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="" disabled selected>
                        Select Optional Subject
                      </option>
                      <option value="History">History</option>
                      <option value="Geography">Geography</option>
                      <option value="Physics">Physics</option>
                    </select>
                  </div>
                  <div className="flex mb-3">
                    <select
                      title="Target Year"
                      id="targetYear"
                      value={targetYear}
                      onChange={(e) => setTargetYear(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="" disabled selected>
                        Target Year
                      </option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </div>
                  <div className="flex mb-3">
                    <select
                      title="Medium"
                      id="medium"
                      value={medium}
                      onChange={(e) => setMedium(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="" disabled selected>
                        Medium
                      </option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                    </select>
                  </div>
                  <div className="flex mb-3">
                    <select
                      title="State"
                      id="state"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    >
                      <option value="" disabled selected>
                        State
                      </option>
                      <option value="Haryana">Haryana</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
