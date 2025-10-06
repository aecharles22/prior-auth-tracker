
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
