import { prisma } from "@/utils/connect"; // Prisma client for database interaction
import { NextRequest, NextResponse } from "next/server"; // Next.js utilities for handling requests and responses

// FETCH ALL PRODUCTS
export const GET = async (req: NextRequest) => {
  // Extract search parameters from the request URL
  const { searchParams } = new URL(req.url);
  const cat = searchParams.get("cat"); // Get the 'cat' query parameter if present

  try {
    // Fetch products based on the query parameter
    const products = await prisma.product.findMany({
      where: {
        ...(cat ? { catSlug: cat } : { isFeatured: true }), // Filter by category slug or featured products
      },
    });

    // Return the fetched products as a JSON response
    return new NextResponse(JSON.stringify(products), { status: 200 });
  } catch (err) {
    console.log(err); // Log any errors for debugging

    // Return an error response in case of failure
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};

// CREATE A NEW PRODUCT
export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();

    // Validate required fields
    if (!body.title || !body.desc || !body.price || !body.catSlug || !body.img) {
      return new NextResponse(
        JSON.stringify({ message: "Missing required fields!" }),
        { status: 400 }
      );
    }

    const product = await prisma.product.create({
      data: body,
    });

    return new NextResponse(JSON.stringify(product), { status: 201 });
  } catch (err) {
    console.error(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }),
      { status: 500 }
    );
  }
};
