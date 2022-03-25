import { auth } from '../../firebase/firebaseConfig';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export const signInWithGoogle = () => {
    signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response, "response del singin");
        })
        .catch(error => {
            console.log('Error:', error);
        })
};