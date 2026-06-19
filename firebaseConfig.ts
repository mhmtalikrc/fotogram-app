import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import {
 getAuth,
 // @ts-expect-error - the function exists but is not typed in the Firebase SDK
 getReactNativePersistence,
 initializeAuth,
} from 'firebase/auth';
import { Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth =
 Platform.OS === 'web'
 ? getAuth(app)
 : initializeAuth(app, {
 persistence: getReactNativePersistence(AsyncStorage),
 });