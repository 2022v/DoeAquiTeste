import { initializeApp } from 'firebase/app';
import { getReactNativePersistence, initializeAuth } from "firebase/auth/react-native";
import AsyncStorage from '@react-native-async-storage/async-storage'


const firebaseConfig = {
  apiKey: "AIzaSyAH-kgdhgdxBhpeNEDVHhGNu4aPdMk9Mpg",
  authDomain: "doeaqui-d0c20.firebaseapp.com",
  projectId: "doeaqui-d0c20",
  storageBucket: "doeaqui-d0c20.appspot.com",
  messagingSenderId: "256131488663",
  appId: "1:256131488663:web:c8437aace47b3c2c1082d2",
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

export default auth;
