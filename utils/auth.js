import { auth, db } from '../config/firebase'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";
import { updateUser, getUserCredits } from './firestore';
import { doc, setDoc } from 'firebase/firestore';

export const signInUser = () => {
    return new Promise((resolve, reject) => {
        const provider = new GoogleAuthProvider();

        setPersistence(auth, browserLocalPersistence)
        .then(() => {
            signInWithPopup(auth, provider)
            .then((result) => {
                // // This gives you a Google Access Token. You can use it to access the Google API.
                // const credential = GoogleAuthProvider.credentialFromResult(result);
                // const token = credential.accessToken;
                // // The signed-in user info.
                // const user = result.user;
                // user.getIdToken(true)
                // .then(r => {
                //     console.log(user)
                //     updateUser(user, r).then(() => {
                //         getUserCredits(user.email)
                //         .then(credits=> {
                //             console.log(credits)
                //             resolve({user, token: r, credits})
                //         })
                //         .catch(e => {
                //             console.log(e)
                //             reject(e)
                //         })
                //     }).catch(e => {
                //         reject(e)
                //     })

                // }).catch(e => {
                //     reject(e)
                // })
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                console.log(error)
                reject(error)
                // ...
            });
            
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage)
          reject(error)
        });

    }) 
}

export const resolveTokenAndCredits = (user) => {
    return new Promise((resolve, reject) => {
        user.getIdToken(true)
                .then(r => {
                    setDoc(doc(db, `users/${user.email}`), {
                        name: user.displayName,
                        profile: user.photoURL,
                        email: user.email,
                        token: r
                    }, {merge: true})
                    .then(() => {
                        getUserCredits(user.email)
                        .then(credits=> {
                            console.log(credits)
                            resolve({user, token: r, credits})
                        })
                        .catch(e => {
                            console.log(e)
                            reject(e)
                        })
                    })
                    .catch(er => {
                        console.log(er)
                        reject(er)
                    })

                    
                }).catch(e => {
                    reject(e)
                })
    })
}


export const signOutUser = () => {
    return new Promise((resolve, reject) => {
        signOut(auth).then(r => {
            resolve(r)
        }).catch(e => {
            reject(e)
        })
    })
}

export const signOutCompletely = () => {
    signOutUser().then().catch()
}