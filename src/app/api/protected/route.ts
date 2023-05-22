import { getAuth } from "@clerk/nextjs/server";

import type { NextApiRequest, NextApiResponse } from 'next'
import { NextRequest, NextResponse } from "next/server";
export const runtime = 'edge';


export async function GET(req: NextRequest) {

    const { userId } = getAuth(req);
    console.log(userId)

    if (!userId) {
        return new NextResponse(undefined, {
            status: 403
        })
    }

    // Load any data your application needs for the API route

    return NextResponse.json({ userId })

};