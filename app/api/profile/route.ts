// pages/api/profile/router.ts
import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie

// Helper function to send OTP to email
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getProfile = async () => {
  // end point is added here
  // returns true ( OTP send )/ false (OTP send failed)
  // TODO fix it
  try {
    const idToken = Cookies.get("idToken");
    const response = await axios.get(`${BACKEND_URL}/user_profile/student`, {
      headers: {
        Authorization: `idToken ${idToken}`,
      },
    });
    if (response.data.msg === "fail") {
      return false;
    } else {
      return true;
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error while getting profile:", error.message);
      throw new Error("Failed to get profile");
    } else {
      console.error("General Error while getting profile:", error);
      throw new Error("Failed to get profile");
    }
  }
  return false;
};

export const setProfile = async (data: {
  name: string;
  phone_number: string;
  attempt: string;
  medium: string;
}) => {
  try {
    const idToken = Cookies.get("idToken");
    const response = await axios.post(
      `${BACKEND_URL}/user_profile/student`,
      data, // Send the data as an object
      {
        headers: {
          Authorization: `idToken ${idToken}`,
          "Content-Type": "application/json", // Ensure the content type is set
        },
      }
    );

    console.log(response.data);
    if (response.status === 201) {
      return true; // Profile set successfully
    } else {
      return false; // Handle other status codes if necessary
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error while setting profile:", error.message);
      throw new Error("Failed to set profile");
    } else {
      console.error("General Error while setting profile:", error);
      throw new Error("Failed to set profile");
    }
  }
};
