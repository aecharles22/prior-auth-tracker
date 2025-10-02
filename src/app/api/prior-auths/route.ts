import type { NextRequest } from "next/server";
import path from "path";
import { readDB, writeDB } from "@/app/lib/json-db";

const dbPath= path.join(process.cwd(), 'src', 'app', 'data', 'prior-auths.json');

export async function GET() {
    try {
        const data = await readDB(dbPath);
        return Response.json(data, {status:200, statusText: "Successfully retrieved the Prior authorization list"})
    } catch (error) {
        return Response.json({error: "Server error"}, {status: 500})
    }
  
}

export async function POST(request: NextRequest) {
    try {
        const newAuth = await request.json()
        const existingDb = await readDB(dbPath)
        const newAuthWithId = {...newAuth, id: Date.now()}
        existingDb.push(newAuthWithId)
        writeDB(dbPath, existingDb);
        return Response.json(newAuthWithId, {status:200, statusText: "Successfully created a new prior authorization"})
    } catch (error) {
        return Response.json({error: "Bad Request"}, {status: 400})
    }
   
}
