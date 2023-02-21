import { useEffect, useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import axios from "axios"

function App() {
  const [imageUrl, setImageUrl] = useState("")
  useEffect(() => {
    async function getDogImageUrl() {
      const response = await axios.get("https://dog.ceo/api/breeds/image/random")
      console.log(response)
      setImageUrl(response.data.message)
    }
    getDogImageUrl()
  },[]) 
  return (
    <div className="App">
      <img src={imageUrl} alt="" />
      <TodoList />
    </div>
  );
}

export default App;