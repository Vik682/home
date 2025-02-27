import { NextResponse } from 'next/server';

// let lastRequestTime = 0; // Track the last request timestamp

// // Define the rate limit in milliseconds (2 seconds)
// const RATE_LIMIT = 2000; // 2000 milliseconds = 2 seconds

export function middleware(req: Request) {
//   const currentTime = Date.now();
  
return NextResponse.next();
//   // If it's been less than 2 seconds since the last request, block the request
//   if (currentTime - lastRequestTime < RATE_LIMIT) {
//     return new NextResponse('Too many requests, please try again later.', {
//       status: 429, // HTTP status for Too Many Requests
//     });
//   }

//   // Update the last request time to the current time
//   lastRequestTime = currentTime;

//   // Allow the request to continue
//   return NextResponse.next();
}
