import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Message } from './styled';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

export interface User {
    displayName: string,
    photoUrl: string
};

const Login: React.FC = () => {

    const auth = getAuth();
    const navigation = useNavigate();
    const [authInProgress, setAuthInProgress] = useState<boolean>(false);
    const [user, setUser] = useState<User | null | undefined | {}>();
    //console.log(user, "user");

    const signInWithGoogle = () => {
        setAuthInProgress(true);
        signInWithPopup(auth, new GoogleAuthProvider())
            .then(response => {
                const user = {
                    displayedName: response.user.displayName,
                    photoUrl: response.user.photoURL
                }
                setUser(user);
                setAuthInProgress(false);
                //console.log(response, "response del singin");
                navigation('/admin/dashboard');
            })
            .catch(error => {
                console.log('Error:', error);
                setAuthInProgress(false);
            })
    };

    return (
        <Wrapper>
            <Message>Bienvenido, administrador. Por favor proceda a iniciar sesión.</Message>
            <Button
                variant="contained"
                startIcon={<GoogleIcon />}
                onClick={signInWithGoogle}
            >
                Login
            </Button>
        </Wrapper>
    )
};

export default Login;