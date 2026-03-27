export async function submitLead(data: {
  email: string;
  phone?: string;
  source: string;
}) {
  const { db } = await import("./firebase");
  const { collection, addDoc, serverTimestamp } = await import("firebase/firestore");

  return addDoc(collection(db, "leads"), {
    ...data,
    createdAt: serverTimestamp(),
  });
}
