import { NextResponse } from "next/server";
import { firebaseDB } from "../(libs)/firestore.admin";

export async function GET() {
  try {
    const documentRef = await firebaseDB.collection("collections").get();

    const information: any = [];

    for (const data of documentRef.docs) {
      information.push({
        id: data.id,
        data: data.data(),
      });
    }

    return NextResponse.json({
      message: "This is working",
      content: information,
    });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}

export async function POST() {
  try {
    await firebaseDB.collection("collections").doc("edied_ramos").set({
      name: "Edied",
      age: 24,
      height: 165,
    });
    return NextResponse.json({ message: "Edied agregado correctamente" });
  } catch (err) {
    return NextResponse.json({ message: "Error", error: err }, { status: 500 });
  }
}
