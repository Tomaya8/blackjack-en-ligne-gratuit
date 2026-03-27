import { db } from "./firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export async function submitLead(data: {
  email: string;
  phone?: string;
  source: string;
}) {
  return addDoc(collection(db, "leads"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
