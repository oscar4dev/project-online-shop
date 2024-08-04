import { db } from "../firebase";
import { getDocs, collection } from "firebase/firestore";
const API_URL = "https://react-fast-pizza-api.onrender.com/api";
// const MENU_API = 'http://localhost:8000'

export async function getMenu () {

   const menuCollectionRef = collection(db, 'menu') 

   try {
      const data = await getDocs(menuCollectionRef)
      const filteredData = data.docs.map((doc) => {
        return {
         ...doc.data(), id: doc.id
        }
      })
      return filteredData
   } catch (error) {
      throw new Error('Sorry, there was an error fetching menu 😢')
   }
   // try {
   //    const res = await fetch(`${ MENU_API }/data`)
   //    const data = await res.json()
   //    return data
   // } catch (error) {
   //    throw new Error('')
   // }
}

export async function createOrder(newOrder) {
   try {
      const res = await fetch(`${API_URL}/order`, {
         method: "POST",
         body: JSON.stringify(newOrder),
         headers: {
            "Content-Type": "application/json",
         },
      });
 
      if (!res.ok) throw Error('Failed creating your order 😢');
      const { data } = await res.json();
      return data;
   } catch {
      throw Error("Failed creating your order 😢");
   }
}

export async function getOrder (id) {
   try {
      const res = await fetch(`${ API_URL }/order/${ id }`)

      if (!res.ok) 
         throw new Error('There was an error getting your order 😢')

      const {data} = await res.json()
      return data
   } catch (error) {
      throw new Error('There was an error getting your order 😢')
   }
}

export async function makePriority (id, newObj) {
   try {
      const res = await fetch(`${ API_URL }/order/${ id }`, {
         method: 'PATCH',
         body: JSON.stringify(newObj),
         headers: {
            "Content-Type" : "application/json"
         }
      })  

      if (!res.ok) 
         throw new Error('Failed to meke your order a priority 😢')

   } catch (error) {
      throw new Error('Failed to meke your order a priority 😢')
   }
}