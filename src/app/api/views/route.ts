// app/api/views/route.ts
export const dynamic = "force-dynamic";

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { PrismaClient } from "@prisma/client";
import { v4 as uuidv4 } from "uuid";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const cookieStore = cookies();
    let visitorId = cookieStore.get("visitorId")?.value;

    // Jika belum ada visitor ID, buat baru
    if (!visitorId) {
      visitorId = uuidv4();
      cookieStore.set("visitorId", visitorId, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 365,
      }); // 1 tahun
    }

    // Cek apakah sudah view dalam 1 jam terakhir
    const lastView = cookieStore.get("lastView")?.value;
    const now = new Date();

    if (
      !lastView ||
      now.getTime() - new Date(lastView).getTime() > 30 * 60 * 1000
    ) {
      // Tambah view baru jika sudah lebih dari 15 menit
      await prisma.pageView.create({
        data: {
          visitorId,
        },
      });

      // Update timestamp view terakhir
      cookieStore.set("lastView", now.toISOString(), {
        httpOnly: true,
        maxAge: 60 * 60,
      }); // 1 jam
    }

    // Hitung total views
    const totalViews = await prisma.pageView.count();
    return NextResponse.json({ totalViews });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to get views" }, { status: 500 });
  }
}
