import { credential } from 'firebase-admin';

const { initializeApp } = require('firebase-admin/app');
const admin = require('firebase-admin')
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "auto-pitch-generator.firebaseapp.com",
    projectId: "auto-pitch-generator",
    storageBucket: "auto-pitch-generator.appspot.com",
    messagingSenderId: "1019792873032",
    appId: "1:1019792873032:web:d9e8a177d9926886616a7d",
    measurementId: "G-LLKF2XJCM6"
  };


var serviceAccount = require("./auto-pitch-generator-firebase-adminsdk-rgl1b-17c43fd0a4.json");

const getAppInstance = () => {
  if (admin.apps.length) {
      return admin.apps[0];
  } else {
      return initializeApp({credential: credential.cert(serviceAccount)});
  }
}

export const firebaseApp = getAppInstance()