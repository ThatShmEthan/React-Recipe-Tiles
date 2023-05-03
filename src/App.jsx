import './App.css'
//import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import HomeHeader from './components/HomeHeader.jsx'
import RecipeTiles from './components/RecipeTiles'
import Home from './Home.jsx'
import Search from './Search.jsx'
import AllRecipes from './AllRecipes.jsx'
import RecipePage from './RecipePage.jsx'
import SavedRecipes from './SavedRecipes.jsx'
import YourRecipes from './YourRecipes.jsx'

export default function App(props) {
  return (
    <>
    <Search/>
    </>
  )
}
