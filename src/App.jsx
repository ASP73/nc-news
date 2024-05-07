import './App.css';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import { Routes, Route } from "react-router-dom";
import ArticleList from './Components/ArticleList';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Welcome />} />
				{/* <Route path="/articles" element={<ArticleList />} />   */}
      </Routes>

      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div> */}
    </>
  )
}

export default App
