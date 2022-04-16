import {
    collection,
    addDoc,
    updateDoc,
    onSnapshot,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
} from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const collectionName = "categories";
export function getCategories() {
    return getDocs(collection(db, collectionName))
}