import { createContext, useState, useEffect } from 'react';
import firebase from 'firebase/app';
import { browserLocalPersistence, getAuth, inMemoryPersistence, User } from 'firebase/auth';
import { app as FirebaseApp } from '../structures/database';

const FireBaseContext = createContext<{ app: firebase.FirebaseApp, user: User | null | undefined }>(null as any);


const FireBaseProvider = ({ children }: any) => {
    const [firebaseUser, setFirebaseUser] = useState<User | null | undefined>(undefined)
    const app = FirebaseApp;

    useEffect(() => {
        const auth = getAuth(app);
        // const rememberme = getPersistence();
        auth.setPersistence(browserLocalPersistence)
        // auth.setPersistence(rememberme === PersistenceType.REMEMBER_USER ? browserLocalPersistence : inMemoryPersistence)
        const unsub = auth.onAuthStateChanged((user) => {
            console.log('state change', user);
            setFirebaseUser(user);
        });
        return unsub;
    }, [])

    return (
        <FireBaseContext.Provider value={{ app: app, user: firebaseUser }}>
            {children}
        </FireBaseContext.Provider>
    )
}

export default FireBaseProvider;
export { FireBaseContext };