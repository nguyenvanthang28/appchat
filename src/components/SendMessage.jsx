import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {db} from '../firebase'

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (value.trim() === "") {
      alert("Enter valid message");
    }

    try {
      const { uid, displayName, photoURL } = currentUser;
      await addDoc(collection(db, 'messages'),{
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid: uid
      });
    } catch (error) {console.log(error.message)}

    console.log(value);
    setValue("");
  };

  return (
    <div className="bg-gray-200 fixed bottom-0 w-full shadow-lg py-5">
      <form className="containerWrap flex px-2" onSubmit={handleSubmit}>
        <input
          onChange={(e) => setValue(e.target.value)}
          value={value}
          className="input w-full focus:outline-none bg-gray-100 rounded-r-none"
          type="text"
        />
        <button
          type="submit"
          className="w-auto bg-gray-500 text-white rounded-r-lg px-5"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
