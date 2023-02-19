import admin from "firebase-admin";
import "dotenv/config";

console.log("FIREBASE_DATABASE_EMULATOR_HOST:", process.env.FIREBASE_DATABASE_EMULATOR_HOST)

try {
  console.log("firebase initializeApp...");
  admin.initializeApp({
    databaseURL: "https://biofun.firebaseio.com"
  });

  console.log("initialized firebase server app!");
} catch (error) { 
  console.log(error);
}

const db = admin.database();

async function main() {
  try {
    const userdataRefDoc = await db.ref("userdata").get();

    if (userdataRefDoc.exists()) {
      const value = userdataRefDoc.val();
      console.log(value);
    } else {
      console.log({error: "can't find snapshot for userdata" });
    }
  } catch (error) {
    console.error(error);
  }
}

main();