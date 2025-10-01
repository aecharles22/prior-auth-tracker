import { PriorAuth } from "../types/types";
import fs from "fs/promises";

export async function readDB(pathName: string) {
    try {
        const data = await fs.readFile(pathName, "utf8");
        return JSON.parse(data);
    } catch(error) {
        console.error("Failed to read data: ", error);
        return [];
    }
}

export async function writeDB(pathName: string, auth: object):Promise <void> {
    try {
        await fs.writeFile(pathName, JSON.stringify(auth))
    } catch(error) {
        console.error("Failed to write to DB: ", error);
    }
}

// export function updateDB(updatedRecord:PriorAuth[], authList:PriorAuth[],uniqueIdentifyer = 'id') {
//     const existingData = readDB(authList);

//     if (!existingData) {
//         console.error("No existing list found.")
//         return
//     }

//     const indexToUpdate = existingData.findIndex((record: { [x: string]: any; }) => record[uniqueIdentifyer] === updatedRecord[uniqueIdentifyer])
//     existingData[indexToUpdate] = {...authList[indexToUpdate], updatedRecord};
//     writeDB(existingData, authList);

// }