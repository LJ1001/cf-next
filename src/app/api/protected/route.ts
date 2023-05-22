import { auth } from '@clerk/nextjs';

import { NextResponse } from "next/server";
export const runtime = 'edge';


export async function GET() {
    const { userId } = auth();

    if (!userId) {
        return new Response("Unauthorized", { status: 401 });
    }

    return NextResponse.json({ userId })
};