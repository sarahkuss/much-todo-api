import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { serviceAccount } from "../serviceAccount.js"

//connect to firebase project
initializeApp({
  credential: cert(serviceAccount),
})

export const db = getFirestore()
