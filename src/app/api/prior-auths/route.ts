import type { NextRequest } from "next/server";
import path from "path";

const goodPath = path.join(process.cwd(), 'src', 'app', 'data', 'prior-auths.json');
const db = require("../../lib/json-db")

export async function GET() {
    const data = db.readDB(goodPath)
    return Response.json(data)
}

export async function POST(request: NextRequest) {
    const newAuth = await request.json()
    const existingDb = db.readDB(goodPath)
    const newAuthWithId = {...newAuth, id: Date.now()}
    existingDb.push(newAuthWithId)
    db.writeDB(goodPath, existingDb);
    return Response.json(newAuthWithId)
}
