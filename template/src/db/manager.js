import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "src/db/database.json");

let db = {};
if (fs.existsFileSync(dbPath)) {
    const data = fs.readFileSync(dbPath, "utf-8");
    db = JSON.parse(data);
} else {
    fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

export async function saveDB() {
    await fs.writeFileSync(dbPath, JSON.stringify(db, null, 2));
}

export {
    db
}