import { db } from "../config/firebase"
import { collection, doc, setDoc, getDoc } from "firebase/firestore"; 

export const updateUser = async (user, token) => {
    try {
        await setDoc(doc(db, `users`, user.email), {
            name: user.displayName,
            profile: user.photoURL,
            email: user.email,
            token: token
        }, {merge: true})
    }
    catch (e){
        console.log(e)
        throw "Something Went wrong"
    }
    
}

export const getUserCredits = async (email) => {
    let res = await getDoc(doc(db, 'users', email))
    return res.data()['credits'] && res.data()['credits'] != undefined ? 
        res.data()['credits'] : 0
}