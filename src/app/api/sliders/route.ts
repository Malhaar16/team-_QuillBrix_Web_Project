// import { prisma } from "@/utils/connect";
// import { NextRequest, NextResponse } from "next/server";

// // FETCH ALL SLIDERS
// export const GET = async (req: NextRequest) => {
//   try {
//     const sliders = await prisma.sliders.findMany();
//     return new NextResponse(JSON.stringify(sliders), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };

// // CREATE NEW SLIDER
// export const POST = async (req: NextRequest) => {
//   try {
//     const body = await req.json();
//     const slider = await prisma.sliders.create({
//       data: body,
//     });
//     return new NextResponse(JSON.stringify(slider), { status: 201 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };
