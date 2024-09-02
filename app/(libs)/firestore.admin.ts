import admin from "firebase-admin";

class FirebaseAdmin {
  private static instance: FirebaseAdmin;
  private firebaseAdmin;

  private validateVariables(): asserts this {
    if (
      !process.env.FIRESTORE_PROJECT_ID ||
      !process.env.FIRESTORE_CLIENT_EMAIL ||
      !process.env.FIRESTORE_PRIVATE_KEY
    ) {
      throw new Error(
        "FIRESTORE_PROJECT_ID, FIRESTORE_CLIENT_EMAIL and FIRESTORE_PRIVATE_KEY variables must be provided."
      );
    }
  }

  private constructor() {
    if (admin.apps.length) {
      this.firebaseAdmin = admin.app();
      return;
    }

    this.validateVariables();

    this.firebaseAdmin = admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIRESTORE_PROJECT_ID as string,
        clientEmail: process.env.FIRESTORE_CLIENT_EMAIL as string,
        privateKey: (process.env.FIRESTORE_PRIVATE_KEY as string).replace(
          /\\n/g,
          "\n"
        ),
      }),
      databaseURL: process.env.FIRESTORE_DATABASE_URL,
    });
  }

  public static get getInstance(): FirebaseAdmin {
    if (!FirebaseAdmin.instance) this.instance = new FirebaseAdmin();
    return this.instance;
  }

  public getDataBase() {
    return this.firebaseAdmin.firestore();
  }
}

export const firebaseDB = FirebaseAdmin.getInstance.getDataBase();
