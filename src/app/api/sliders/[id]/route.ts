// import { prisma } from "@/utils/connect";
// import { NextRequest, NextResponse } from "next/server";

// // GET SINGLE SLIDER
// export const GET = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;

//   try {
//     const slider = await prisma.sliders.findUnique({
//       where: {
//         id: id,
//       },
//     });

//     if (!slider) {
//       return new NextResponse(
//         JSON.stringify({ message: "Slider not found!" }),
//         { status: 404 }
//       );
//     }

//     return new NextResponse(JSON.stringify(slider), { status: 200 });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };

// // DELETE SINGLE SLIDER
// export const DELETE = async (
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   const { id } = params;

//   try {
//     const slider = await prisma.sliders.findUnique({
//       where: {
//         id: id,
//       },
//     });

//     if (!slider) {
//       return new NextResponse(
//         JSON.stringify({ message: "Slider not found!" }),
//         { status: 404 }
//       );
//     }

//     await prisma.sliders.delete({
//       where: {
//         id: id,
//       },
//     });

//     return new NextResponse(JSON.stringify("Slider has been deleted!"), {
//       status: 200,
//     });
//   } catch (err) {
//     console.log(err);
//     return new NextResponse(
//       JSON.stringify({ message: "Something went wrong!" }),
//       { status: 500 }
//     );
//   }
// };
