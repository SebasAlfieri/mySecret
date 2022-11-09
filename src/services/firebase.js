import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBlxb-05Yp0xcHdh-tjYXy3j_ol7mSwyXg",
  authDomain: "mysecret-e4d5d.firebaseapp.com",
  projectId: "mysecret-e4d5d",
  storageBucket: "mysecret-e4d5d.appspot.com",
  messagingSenderId: "371664448636",
  appId: "1:371664448636:web:be72f3d387a866ed82adf9"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export async function getItems(){
  const collectionRef = collection(firestore, "posting")
  let respuesta = await getDocs(collectionRef)

  let dataDocs = respuesta.docs.map( (documento) => {
    let docFormateado = { ...documento.data(), id: documento.id }
    return docFormateado
  });
  return dataDocs
}

  export async function createPost(orderData){
    const collectionRef = collection(firestore, "posting")
    let respuesta = await addDoc(collectionRef, orderData)
    window.location.reload();
    
    return respuesta.id
  }

export default app;
export { firestore }