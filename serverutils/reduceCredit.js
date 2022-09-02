import { firebaseApp } from '../admin/config/firebase'

const { getFirestore } = require('firebase-admin/firestore')

export const reduceCredit = async (userEmail) => {
    let db = getFirestore(firebaseApp)
    let newCredits = await db.runTransaction(async (transaction) => {
        let docRef = await db.doc(`users/${userEmail}`)
        console.log(docRef.path)
        let userDoc = await transaction.get(docRef)
        console.log(userDoc.data())
        let currentCredits = userDoc.data()['credits']
        await transaction.update(docRef, {
            credits: currentCredits - 1
        })
        return currentCredits - 1
    })
    return newCredits
}