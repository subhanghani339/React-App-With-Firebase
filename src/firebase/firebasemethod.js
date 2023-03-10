
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set, onValue } from "firebase/database";
import app from "./firebaseconfig";

const auth = getAuth(app);
const database = getDatabase(app);

const SignupUser = (obj) => {
  const { email, password, username, contact } = obj;

  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        obj.id = user.uid;
        console.log(obj);
        const reference = ref(database, `users/${user.uid}`);
        set(reference, obj)
          .then(() => {
            resolve("User Created Successfully");
            alert("User Created Successfully"); 
          })
          .catch((err) => {
            reject(err);
            alert(err);
          });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Username or Email already in use");
        // ..
      });
  });
};

let loginUser = (obj) => {
  const { email, password } = obj;
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        const reference = ref(database, `users/${user.uid}`);
        onValue(reference, (e) => {
          let status = e.exists();
          console.log(status);
          if (status) {
            resolve(e.val());
          } else {
            reject("Data Not Found");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("User Not Found");

      });
  });
};

export { SignupUser, loginUser };
