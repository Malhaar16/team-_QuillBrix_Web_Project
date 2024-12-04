// Import Prisma client for database interaction and Next.js response utility
import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";


// Handler to fetch all categories from the database
export const GET = async () => {
  try {
    // Fetch all categories using Prisma ORM
    const categories = await prisma.category.findMany();

    // Return the fetched categories as a JSON response with status 200
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};