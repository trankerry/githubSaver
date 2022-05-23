import React from "react";
import "./styles.css";

interface Props {
    username: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    handleAdd: (e: React.FormEvent) => void;
}

const InputField = ({username, setUsername, handleAdd}: Props) => {
    return (
       <form className="input" onSubmit={handleAdd}>
           <input type="input" placeholder="Enter Username" className="userInput" required value={username} onChange={(e => setUsername(e.target.value))}/>
           <button type="submit" className="submitBtn" >Search</button>
       </form>
    )
}

export default InputField