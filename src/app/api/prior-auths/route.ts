import type { NextRequest } from "next/server";
import path from "path";
import { readDB, writeDB } from "@/app/lib/json-db";

const dbPath= path.join(process.cwd(), 'src', 'app', 'data', 'prior-auths.json');

export async function GET() {
    const data = await readDB(dbPath);
    return Response.json(data)
}

export async function POST(request: NextRequest) {
    const newAuth = await request.json()
    const existingDb = await readDB(dbPath)
    const newAuthWithId = {...newAuth, id: Date.now()}
    existingDb.push(newAuthWithId)
    writeDB(dbPath, existingDb);
    return Response.json(newAuthWithId)
}
