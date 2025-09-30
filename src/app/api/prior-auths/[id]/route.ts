import { sharedData } from "@/app/lib/shared-data";
import { NextRequest } from "next/server"
 
const auths = sharedData;

export async function PUT(request: NextRequest, {params}: {params: {id: string}}) {
    const { id } = params; 
    const updatedAuth = await request.json();
    const authIndex = auths.findIndex((auth) => auth.id === Number(id));
    console.log("PUT - Before update:", auths[authIndex]?.firstName);
   auths[authIndex] = {...updatedAuth, id: Number(id)};
   console.log("PUT - After update:", auths[authIndex]?.firstName);
      console.log("PUT - Array length:", auths.length);

   return Response.json(auths[authIndex])
    
}

export async function DELETE(req: NextRequest) {

}