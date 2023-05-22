import { prisma } from "../../../../lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const users = await prisma.user.findMany();
    console.log(users);
    return NextResponse.json(users);
}