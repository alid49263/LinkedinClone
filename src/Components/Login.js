import React,{useState} from 'react'
import './Login.css'
import {auth} from '../firebase'
import { login } from '../features/userSlice';
import { useDispatch } from 'react-redux';
function Login() {
    const [email, setemail] = useState("");
    const [pass, setpass] = useState("");
    const [name, setname] = useState("")
    const [pic, setpic] = useState("")
    const dispatch = useDispatch();
    const loginToApp=(e)=>{
         e.preventDefault();
         auth.signInWithEmailAndPassword(email,pass).then(userAuth=>{
             dispatch(login({
                 email:userAuth.user.email,
                 uid:userAuth.user.uid,
                 displayName:userAuth.user.dislayName,
                 profileURL:userAuth.user.profileURL
             }))
         }).catch(error=>alert(error))
    }
    const register=()=>{
        
         if(!name){
            alert("Please Enter Your Name")
         }else{
            auth.createUserWithEmailAndPassword(email,pass)
            .then(userAuth=>{
               userAuth.user.updateProfile({
                   displayName:name,
                   photoURL:pic
               })
               .then(()=>{
                   dispatch(login({
                       email:userAuth.user.email,
                       uid:userAuth.user.uid,
                       displayName:name,
                       photoURL:pic
                   }))
               })
            }).catch(error=>alert(error))
         }
    }
    return (
        <div className="login">
            <img src="https://www.socialmediabutterflyblog.com/wp-content/uploads/sites/567/2019/02/linkedin-367x275.jpg" alt=""/>
            <form>
                <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Full Name (Required If Not Registered)"/>
                <input value={pic} onChange={(e)=>setpic(e.target.value)} type="text" placeholder="Profile Picture URL"/>
                <input value={email} onChange={(e)=>setemail(e.target.value)} type="email" placeholder="Email"/>
                <input value={pass} onChange={(e)=>setpass(e.target.value)} type="Password" placeholder="Password"/>
                <button type="submit" onClick={loginToApp}> Sign In</button>
            </form>
            <p>Not a Member?{" "}<span className="login__register" onClick={register}>Register Now</span></p>
        </div>
    )
}

export default Login
