import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";

const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const login = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUser = (name, imgUrl) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: imgUrl,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            console.log(user);

            setUser(user);
            if (user) {
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    imageUrl: user.photoURL

                };
                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        // console.log(res.data.token);
                        if (res.data.token) {
                            localStorage.setItem('token', res.data.token);
                            setLoading(false);
                        }
                    })
            } else {
                localStorage.removeItem('token');
            }
            setLoading(false);
        });
        return () => unsubscribe();
    }, [axiosPublic])


    const authInfo = {
        user,
        signUp,
        login,
        googleSignIn,
        logout,
        updateUser,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};


export default AuthProvider;