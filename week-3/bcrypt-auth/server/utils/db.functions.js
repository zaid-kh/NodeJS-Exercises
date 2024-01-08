import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const passwordJsonPath = join(__dirname, "../db/passwords.json");

export function loadDb() {
  const db = JSON.parse(readFileSync(passwordJsonPath));
  console.log("db: ", db);
  return db;
}

export function findUser(givenUsername) {}

export function saveUserData(userObj) {
  const db = loadDb();
  db.push(userObj);
  writeFileSync();
  return true;
}
