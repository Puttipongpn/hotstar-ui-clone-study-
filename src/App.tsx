import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProfileSelectorIndex from './pages/ProfileSelectorIndex';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile-selector" element={<ProfileSelectorIndex />} />
    </Routes>
  )
}

export default App
