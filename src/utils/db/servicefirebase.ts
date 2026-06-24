import { getFirestore, collection, getDocs, getDoc, doc, addDoc, deleteDoc, query, where, updateDoc } from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data ? { id: snapshot.id, ...data } : null; 
}

export async function addData(collectionName: string, payload: any) {
  try {
    const docRef = await addDoc(collection(db, collectionName), payload);
    return { 
      status: true, 
      id: docRef.id, 
      message: "Data produk berhasil ditambahkan ke database." 
    };
  } catch (error) {
    console.error("Error adding document: ", error);
    return { status: false, message: "Gagal menambahkan data." };
  }
}

export async function deleteData(collectionName: string, id: string) {
  try {
    await deleteDoc(doc(db, collectionName, id));
    return { 
      status: true, 
      message: `Data produk dengan ID ${id} berhasil dihapus.` 
    };
  } catch (error) {
    console.error("Error deleting document: ", error);
    return { status: false, message: "Gagal menghapus data." };
  }
}

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
    createdAt?: Date | string;
  },
  callback: Function
) {
  const q = query(
    collection(db, "users"),
    where("email", "==", userData.email)
  );

  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  if (data.length > 0) {
    callback({
      status: "error",
      message: "Email already exists",
    });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    userData.createdAt = new Date();

    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: "success",
          message: "User registered successfully",
        });
      })
      .catch((error) => {
        callback({
          status: "error",
          message: error.message,
        });
      });
  }
}

export async function signIn(email: string) {
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    }));

    if (data.length > 0) {
        return data[0];
    } else {
        return null;
    }
}

export async function signInWithOAuth(userData: any, callback: any) {
  try {
    // Mencari apakah user dengan email tersebut sudah ada di database
    const q = query(
      collection(db, "users"),
      where("email", "==", userData.email)
    );

    const querySnapshot = await getDocs(q);
    const data: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    if (data.length > 0) {
      // Skenario: User sudah ada, lakukan update data
      userData.role = data[0].role; // Mempertahankan role yang sudah ada
      await updateDoc(doc(db, "users", data[0].id), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    } else {
      // Skenario: User baru pertama kali login
      userData.role = "member"; // Memberikan role default 'member'
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    }
  } catch (error: any) {
    // Menangani error jika proses ke database gagal
    callback({
      status: false,
      message: "Failed to register user with Google",
    });
  }
}