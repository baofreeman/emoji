import { Header } from "./components";
import Content from "./components/Content";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZGFaJCDB9KvgTSl9647Wgl4J5QEdKUMM",
  authDomain: "emoji-c8ef0.firebaseapp.com",
  projectId: "emoji-c8ef0",
  storageBucket: "emoji-c8ef0.appspot.com",
  messagingSenderId: "13545346429",
  appId: "1:13545346429:web:be9232901ad0ebf6f2a814",
  measurementId: "G-7GHL89HCJQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
