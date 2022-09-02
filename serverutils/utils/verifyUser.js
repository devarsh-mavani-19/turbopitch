const { firebaseApp } = require('../../admin/config/firebase')

const { getAuth } = require('firebase-admin/auth')

module.exports.verifyUser =  function verifyUser (idToken) {
    return new Promise((resolve, reject) => {
        getAuth(firebaseApp).verifyIdToken(idToken)
            .then(r => {
                resolve(r)
            })
            .catch(e => {
                console.log(e)
                reject(e)
            })
    })
}