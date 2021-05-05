import React,{useState,useEffect} from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import InputOption from './InputOption'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import EventNoteIcon from '@material-ui/icons/EventNote';
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay';
import Post from './Post'
import { db } from '../firebase'
import firebase from "firebase"
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import FlipMove from 'react-flip-move'
function Feed() {
    const user = useSelector(selectUser)
    const[posts,setPosts]=useState([]);
    const [input, setInput] = useState("")
    useEffect(()=>{
        db.collection("posts").orderBy("timestamp","desc").onSnapshot(snapshot=>{
            setPosts(snapshot.docs.map(doc=>{return(
                {
                    id:doc.id,
                    data:doc.data()
                }
            )}))
        })
    },[])

    const sendPost=(e)=>{

        e.preventDefault();
        db.collection("posts").add(
            {
                name: user.displayName,
                description: user.email,
                message:input,
                photoURL: user.photoURL||"",
                timestamp:firebase.firestore.FieldValue.serverTimestamp() 
            }
        )
    }
    return (
        <div className="feed">
            <div className="feed__inputContainer">
                <div className="feed__input">
                    <CreateIcon/>
                    <form>
                        <input value={input} onChange={(e)=>setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost} type="submit">Post</button>
                    </form>
                </div>
                <div className="feed__inputOptions">
                    <InputOption title='Photo' Icon={ImageIcon} color='#70b5f9'/>
                    <InputOption title='Video' Icon={SubscriptionsIcon} color='#7fc15e'/>
                    <InputOption title='Event' Icon={EventNoteIcon} color='#e7a33e'/>
                    <InputOption title='Write Article' Icon={CalendarViewDayIcon} color='#c0cbcd'/>
                </div>
            </div>
            <FlipMove>
            {posts.map(({id, data:{name,description,message,photoURL,timestamp}})=>{
                return (<Post key={id} name={name} description={description} message={message} photoUrl={photoURL}/>)
            })}
            </FlipMove>
            
        </div>
    )
}

export default Feed
