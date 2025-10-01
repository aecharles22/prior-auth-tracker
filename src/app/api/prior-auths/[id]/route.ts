import { NextRequest } from "next/server"
import path from "path";
import { readDB, writeDB } from "@/app/lib/json-db";
import { PriorAuth } from "@/app/types/types";
import { parseAppSegmentConfig } from "next/dist/build/segment-config/app/app-segment-config";
import { write } from "fs";

const dbPath = path.join(process.cwd(), "src", "app", "data","prior-auths.json")

export async function PUT(request: NextRequest, {params}: {params: {id: string}}) {
    const { id } = await params;
    const currentAuthList = await readDB(dbPath);
    const updatedAuth = await request.json()
    const indexToUpdate = currentAuthList.findIndex((auth: PriorAuth) => auth.id === Number(id))
      currentAuthList[indexToUpdate] = {...updatedAuth}
      writeDB(dbPath, currentAuthList);

   return Response.json(updatedAuth);
}

export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
   const { id } = await params;
   const currentAuthList = await readDB(dbPath);
   const indexToRemove = currentAuthList.findIndex((auth: PriorAuth) => auth.id === Number(id))
   currentAuthList.splice(indexToRemove, 1);
   writeDB(dbPath, currentAuthList);

   return Response.json(currentAuthList);
}