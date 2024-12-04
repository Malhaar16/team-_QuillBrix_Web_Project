// Import authentication options and NextAuth handler

import { authOptions } from "@/utils/auth";
import NextAuth from "next-auth/next";

// Create an instance of the NextAuth handler with custom options
const handler = NextAuth(authOptions)

// Export the handler for both GET and POST requests
export {handler as GET, handler as POST}