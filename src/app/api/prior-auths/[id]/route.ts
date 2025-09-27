import { mockAuthorizations } from "@/app/data/mockData";
import { NextRequest, NextResponse } from "next/server";
import { mock } from "node:test";
 
const auths = mockAuthorizations
export async function PUT(request: NextRequest, {params}: {params: {id: string}}) {
    const { id } = await params; 
    const updatedAuth = await request.json(); 
    const authIndex = auths.findIndex((auth) => auth.id === Number(id));
   auths[authIndex] = {...updatedAuth, id: Number(id)};

   return Response.json(auths[authIndex])
    
}

export async function DELETE(req: NextRequest) {

}