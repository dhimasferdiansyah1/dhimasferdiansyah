import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
    // Hitung total likes
    const totalLikes = await prisma.pageLike.count();

    // Check if current visitor has liked
    const cookieStore = cookies();
    const visitorId = cookieStore.get("visitorId")?.value;

    let hasLiked = false;
    if (visitorId) {
      const existingLike = await prisma.pageLike.findUnique({
        where: { visitorId },
      });
      hasLiked = !!existingLike;
    }

    return NextResponse.json({ totalLikes, hasLiked });
  } catch {
    return NextResponse.json({ error: "Failed to get likes" }, { status: 500 });
  }
}

export async function POST() {
  try {
    const cookieStore = cookies();
    const visitorId = cookieStore.get("visitorId")?.value;

    if (!visitorId) {
      return NextResponse.json(
        { error: "No visitor ID found" },
        { status: 401 }
      );
    }

    // Check if visitor has already liked
    const existingLike = await prisma.pageLike.findUnique({
      where: { visitorId },
    });

    if (existingLike) {
      // If like exists, remove it
      await prisma.pageLike.delete({
        where: { visitorId },
      });
    } else {
      // If like doesn't exist, create it
      await prisma.pageLike.create({
        data: {
          visitorId,
        },
      });
    }

    const totalLikes = await prisma.pageLike.count();
    return NextResponse.json({ totalLikes, hasLiked: !existingLike });
  } catch {
    return NextResponse.json(
      { error: "Failed to toggle like" },
      { status: 500 }
    );
  }
}
