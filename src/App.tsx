import './App.css'
import ProfileSelectorIndex from './pages/ProfileSelectorIndex';
import LoginPage from './pages/LoginPage';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/profile-selector" element={<ProfileSelectorIndex />} />
    </Routes>
  )
}

export default App
