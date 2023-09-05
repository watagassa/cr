import { Button } from "@mui/material";
import { signInWithPopup } from "firebase/auth";
import React, { useState } from "react";
import { provider, auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import LogoutIcon from '@mui/icons-material/Logout';
import "./Login.css";
import Sidebar from "./components/Sidebar";
//import auth from './firebase';
function Login(){
    const [user] = useAuthState(auth);
    return (
        <div>
            {user ? (
                <div className = "logOut">
                    <UserInfo />
                    <SignOutButton/>
                    <Sidebar />
                </div>
            )  : (
                <SignInButton />
            )}
        </div>
    )
}

export default Login;

function SignInButton(){
    const signInWithGoogle = () => {
    //firebaseでログイン
    signInWithPopup(auth, provider);
 };

    return (
        <Button variant="contained" onClick={signInWithGoogle}>
            <p>Googleでログイン</p>
        </Button>
 ) 
}
function SignOutButton(){
    return (
        <Button variant="contained" onClick={() => auth.signOut() }>
            <LogoutIcon/>
        </Button>
 ) 
}
function UserInfo(){
    return (
        <div className="userInfo">
            <img src={auth.currentUser.photoURL} alt="" />
            <p>{auth.currentUser.displayName}</p>
        </div>

 ) 
}