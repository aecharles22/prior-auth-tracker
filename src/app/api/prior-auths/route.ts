import { mockAuthorizations } from "@/app/data/mockData";
import type { NextRequest } from "next/server";

let priorAuth = mockAuthorizations;

export async function GET() {
    const data = priorAuth
    return Response.json(data)
}

export async function POST(req: NextRequest) {
    const auth = await req.json()
    priorAuth.push(auth);
    return Response.json(auth)
}
