import axios from "axios";
import Cookies from "js-cookie"; // Import js-cookie

// Helper function to send OTP to email
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const sendOtpToEmail = async (email: string) => {
  // end point is added here
  // returns true ( OTP send )/ false (OTP send failed)
  // TODO fix it
  try {
    console.log("Payload: ", { email });
    const response = await axios.post(`${BACKEND_URL}/mail/send/`, { email });
    return true;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error("Axios Error while sending OTP:", error.message);
      throw new Error("Failed to send OTP");
    } else {
      console.error("General Error while sending OTP:", error);
      throw new Error("Failed to send OTP");
    }
  }
  return false;
};
export const logout = () => {
  Cookies.remove("idToken");
  return true;
};

export const verifyOtp = async (email: string, otp: string) => {
  // end point is added here
  // returns true ( OTP verified )/ false (OTP not verified)
  // Add role ID automatically
  try {
    // Sending a POST request to verify OTP in Django backend
    const role_id: string = "student";
    const response = await axios.post(`${BACKEND_URL}/auth/validate/`, {
      email,
      otp,
      role_id,
    });
    Cookies.set("idToken", response.data.idToken, { expires: 7 });
    return true; // Assuming Django returns success or failure
  } catch (error: any) {
    // Type error as AxiosError or any
    if (axios.isAxiosError(error)) {
      console.error("Axios Error while verifying OTP:", error.message);
      throw new Error("Failed to verify OTP");
    } else {
      console.error("General Error while verifying OTP:", error);
      throw new Error("Failed to verify OTP");
    }
  }
  return false;
};

// export async function login(req: NextRequest) {
//   try {
//     const body = await req.json();
//     const { email, endpoint } = body;

//     if (endpoint === 'send-otp') {
//       try {
//         const result = await sendOtpToEmail(email);
//         // Return a response with status 200 and the result data
//         return NextResponse.json(result, { status: 200 });
//       } catch (error: unknown) {
//         // Return error response with status 500
//         return NextResponse.json(
//           { message: 'Failed to send OTP', error: error instanceof Error ? error.message : 'Unknown error' },
//           { status: 500 }
//         );
//       }
//     } else if (endpoint === 'verify-otp') {
//       try {
//         const { otp } = body;
//         const result = await verifyOtp(email, otp);
//         // Return a response with status 200 and the result data
//         return NextResponse.json(result, { status: 200 });
//       } catch (error: unknown) {
//         // Return error response with status 500
//         return NextResponse.json(
//           { message: 'Failed to verify OTP', error: error instanceof Error ? error.message : 'Unknown error' },
//           { status: 500 }
//         );
//       }
//     } else {
//       return NextResponse.json(
//         { message: 'Unrecognized endpoint', error: 'Unknown error' },
//         { status: 500 }
//       );
//     }
//   } catch (error: unknown) {
//     // Handle errors by checking for message and returning a 500 status
//     const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
//     return NextResponse.json({ error: errorMessage }, { status: 500 });
//   }
// }
