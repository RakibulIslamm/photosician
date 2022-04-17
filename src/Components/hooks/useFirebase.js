import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, onAuthStateChanged, updateProfile, signOut, GoogleAuthProvider, sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';
import firebaseAuthInit from "../../firebase/firebaseInit";
import { toast } from "react-toastify";


firebaseAuthInit();

const useFirebase = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // create user
    const signUp = (email, password, name, navigate) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser({ email, displayName: name });
                // setLoading(false);
                sendEmailVerification(auth.currentUser)
                    .then(() => {
                        toast('Verification Mail Sent!')
                    });
                updateProfile(auth.currentUser, { displayName: name })
                    .then(() => {

                    }).catch((error) => {
                        setError(error.code);
                    });

                navigate('/');
                console.log(result.user);
            })
            .catch(error => {
                console.log(error.code);
                setError(error.code);
                // setLoading(false);
            })
            .finally(() => {
                setLoading(false);
                console.log('Signup error/success Completed');
            })
    }

    // Login
    const login = (email, password, location, navigate) => {
        setLoading(true);
        setError('');
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                const url = location?.state?.from || '/';
                navigate(url);
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {
                setLoading('');
            })
    }

    // Password Reset
    const resetPassword = (email) => {
        setLoading('Loading...');
        sendPasswordResetEmail(auth, email)
            .then(() => {
                setLoading('Loading...')
                toast('Reset Password Email Sent!')
            })
            .catch((err) => {

            })
            .finally(() => {
                setLoading('');
            })
    }

    // Google Signin
    const googleSignin = (navigate, location) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                const url = location?.state?.from || '/';
                navigate(url);
            })
            .catch(error => {
                setError(error.code);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser(null);
            }
            setLoading(false);
        })
        return () => unsubscribe
    }, [auth]);


    // log out
    const logOut = (navigate) => {
        signOut(auth)
            .then(() => {
                setUser(null);
                navigate('/');
            })
    }

    return {
        user, setUser,
        signUp,
        login,
        googleSignin,
        resetPassword,
        loading,
        error, setError,
        logOut
    }
}

export default useFirebase;