import { NextRequest, NextResponse } from "next/server"
import path from "path";
import { readDB, writeDB } from "@/app/lib/json-db";
import { PriorAuth } from "@/app/types/types";

const dbPath = path.join(process.cwd(), "src", "app", "data","prior-auths.json")

export async function PUT(request: NextRequest,  {params}: {params: {id: string}}) {

   try {
      const { id } = await params;
      const currentAuthList = await readDB(dbPath);
      const updatedAuth = await request.json()
      const indexToUpdate = currentAuthList.findIndex((auth: PriorAuth) => auth.id === Number(id))
      if (indexToUpdate === -1) {
         return Response.json({error: "Prior auth not found"}, {status: 404})
      }
      currentAuthList[indexToUpdate] = {...updatedAuth}
      writeDB(dbPath, currentAuthList);

      return Response.json(updatedAuth, {status: 200, statusText: "Authorization was updated succesfully!"});
   } catch (error) {
      return Response.json({error: "Bad Request"}, {status: 404})
   }
}

export async function DELETE(request: NextRequest, {params}: {params: {id: string}}) {
   
   try{
      const { id } = await params;
      const currentAuthList = await readDB(dbPath);
      const indexToRemove = currentAuthList.findIndex((auth: PriorAuth) => auth.id === Number(id))
      if (indexToRemove === -1) {
         return Response.json({error: "Prior auth not found"}, {status: 404})
      }
      currentAuthList.splice(indexToRemove, 1);
      writeDB(dbPath, currentAuthList);

      return new Response(null, {status:204});
   } catch (error) {
      return Response.json({error: "Bad Request"}, {status: 400})
   }
}