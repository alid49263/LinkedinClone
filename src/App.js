import React,{useEffect} from "react";
import "./App.css";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Login from "./Components/Login";
import { auth } from "./firebase";
import Widget from "./Components/Widget";
function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoUrl
        }))
      }else{
        dispatch(logout())
      }
    })
  }, [dispatch])
  return (
    <div>
      <div className="wrapper">
          <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDg2LjQ2MyA0ODYuNDYzIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0ODYuNDYzIDQ4Ni40NjM7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNMjQzLjIyNSwzMzMuMzgyYy0xMy42LDAtMjUsMTEuNC0yNSwyNXMxMS40LDI1LDI1LDI1YzEzLjEsMCwyNS0xMS40LDI0LjQtMjQuNA0KCQkJQzI2OC4yMjUsMzQ0LjY4MiwyNTYuOTI1LDMzMy4zODIsMjQzLjIyNSwzMzMuMzgyeiIvPg0KCQk8cGF0aCBkPSJNNDc0LjYyNSw0MjEuOTgyYzE1LjctMjcuMSwxNS44LTU5LjQsMC4yLTg2LjRsLTE1Ni42LTI3MS4yYy0xNS41LTI3LjMtNDMuNS00My41LTc0LjktNDMuNXMtNTkuNCwxNi4zLTc0LjksNDMuNA0KCQkJbC0xNTYuOCwyNzEuNWMtMTUuNiwyNy4zLTE1LjUsNTkuOCwwLjMsODYuOWMxNS42LDI2LjgsNDMuNSw0Mi45LDc0LjcsNDIuOWgzMTIuOA0KCQkJQzQzMC43MjUsNDY1LjU4Miw0NTguODI1LDQ0OS4yODIsNDc0LjYyNSw0MjEuOTgyeiBNNDQwLjYyNSw0MDIuMzgyYy04LjcsMTUtMjQuMSwyMy45LTQxLjMsMjMuOWgtMzEyLjgNCgkJCWMtMTcsMC0zMi4zLTguNy00MC44LTIzLjRjLTguNi0xNC45LTguNy0zMi43LTAuMS00Ny43bDE1Ni44LTI3MS40YzguNS0xNC45LDIzLjctMjMuNyw0MC45LTIzLjdjMTcuMSwwLDMyLjQsOC45LDQwLjksMjMuOA0KCQkJbDE1Ni43LDI3MS40QzQ0OS4zMjUsMzY5Ljg4Miw0NDkuMjI1LDM4Ny40ODIsNDQwLjYyNSw0MDIuMzgyeiIvPg0KCQk8cGF0aCBkPSJNMjM3LjAyNSwxNTcuODgyYy0xMS45LDMuNC0xOS4zLDE0LjItMTkuMywyNy4zYzAuNiw3LjksMS4xLDE1LjksMS43LDIzLjhjMS43LDMwLjEsMy40LDU5LjYsNS4xLDg5LjcNCgkJCWMwLjYsMTAuMiw4LjUsMTcuNiwxOC43LDE3LjZjMTAuMiwwLDE4LjItNy45LDE4LjctMTguMmMwLTYuMiwwLTExLjksMC42LTE4LjJjMS4xLTE5LjMsMi4zLTM4LjYsMy40LTU3LjkNCgkJCWMwLjYtMTIuNSwxLjctMjUsMi4zLTM3LjVjMC00LjUtMC42LTguNS0yLjMtMTIuNUMyNjAuODI1LDE2MC43ODIsMjQ4LjkyNSwxNTUuMDgyLDIzNy4wMjUsMTU3Ljg4MnoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" alt="nn" />
          <p>Please Switch To a Computer Or Laptop</p>
      </div>
    <div className="app">
      
      {!user ? (
        <Login />
      ) : (
        <div>
          <Header />
          <div className="app__body">
            <Sidebar />
            <Feed />
            <Widget/>
          </div>
        </div>
      )}
    </div>
    </div>
  );
}

export default App;
