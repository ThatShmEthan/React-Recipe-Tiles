
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Home from './Home'
import Search from './Search'
import AllRecipes from './AllRecipes'
import RecipePage from './RecipePage'
import SavedRecipes from './SavedRecipes'
import YourRecipes from './YourRecipes'
import Login from './Login'
import SignUp from './SignUp'

export default function App(props) {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/all-recipes" element={<AllRecipes/>} />
        <Route path="/saved-recipes" element={<SavedRecipes/>}/>
        <Route path="/your-recipes" element={<YourRecipes/>}/>
        <Route path="/search" element={<Search/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/recipe/:id" element={<RecipePage/>}/>
      </Routes>
    </BrowserRouter>
  );
}
