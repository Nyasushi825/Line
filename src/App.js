// import "./App.css";
// import Line from "./components/Line";
// import SignIn from "./components/SignIn";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "./firebase.js";

// // "react-firebase-hooks/auth"は、”（シングルコーテーション）では機能しない！！

// function App() {
//   const [user]=useAuthState(auth);
//   return(<div >{user ? <Line /> : <SignIn />}</div>);
// }

// export default App;

import "./App.css";
import Line from "./components/Line";
import SignIn from "./components/SignIn";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);
  return <div className="App">{user ? <Line /> : <SignIn />}</div>;
}

export default App;