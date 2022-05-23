import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import DataTable from './components/DataTable';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './inti-firebase';

const App: React.FC = () => {

  const [username, setUsername] = useState<string>("");
  const [notification, setNotification] = useState<string>('');
  
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    // fetching data from github API
    fetch(`https://api.github.com/users/${username}`)
      .then(res => res.json())
      .then(data => {
        // when username isnt on github you get a message 'Not found'
        if(data.message === undefined){
          // this is to connect the db to the Users collection on firestore
          const gitInfo = collection(db, 'Users')
          // add the data from the API onto the db collection
          addDoc(gitInfo, {data}).then(response => {
            // user added banner *WIP*
            setUsername('')
            setNotification('Added user successfully')
            document.getElementById('notification')?.classList.remove('alert')
            document.getElementById('notification')?.classList.add('success')
            window.setTimeout(function(){window.location.reload()},2550)
          }).catch(error => {
            console.log(error.message)
          })
        }else{
          // user not found banner *WIP*
          setUsername('')
          setNotification('Username not found')
          document.getElementById('notification')?.classList.remove('success')
          document.getElementById('notification')?.classList.add('alert')
          window.setTimeout(function(){window.location.reload()},2550)
        }
      })
  }

  return (
    <div className="App">
      <div id="notification" >{ notification }</div>
      <h1 className='heading'>Github User Saver</h1>
      <InputField username={username} setUsername={setUsername} handleAdd={handleAdd}/>
      <DataTable />
    </div>
  );
}

export default App;
