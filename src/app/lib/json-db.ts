import { PriorAuth } from "../types/types";
const fs = require("fs");

export function readDB(pathName: string) {
    try {
        const data = fs.readFileSync(pathName, "utf8");
        return JSON.parse(data);
    } catch(error) {
        console.error("Failed to read data: ", error);
    }
}

export function writeDB(pathName: string, auth: object) {
    try {
        fs.writeFileSync(pathName, JSON.stringify(auth))
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