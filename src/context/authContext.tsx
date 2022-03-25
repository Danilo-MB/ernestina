import { createContext, useContext } from 'react';

export interface User {
    displayName: string,
    photoUrl: string
}

const user: User = {
    displayName: '',
    photoUrl: ''
};

export const AuthContext = createContext(user);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('No auth provider');
    return context;
};

interface AuthProviderProps {
    children: JSX.Element | JSX.Element[]
};


const AuthProvider = ({ children }: AuthProviderProps) => {

    // const auth = getAuth();
    // signInWithPopup(auth, provider)
    // .then((result) => {
    // // This gives you a Google Access Token. You can use it to access the Google API.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;
    // // The signed-in user info.
    // const user = result.user;
    // // ...
    // }).catch((error) => {
    // // Handle Errors here.
    // const errorCode = error.code;
    // const errorMessage = error.message;
    // // The email of the user's account used.
    // const email = error.email;
    // // The AuthCredential type that was used.
    // const credential = GoogleAuthProvider.credentialFromError(error);
    // // ...
    // });

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
};

export default AuthProvider;

