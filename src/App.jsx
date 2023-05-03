import './App.css'
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import HomeHeader from './components/HomeHeader'
import RecipeTiles from './components/RecipeTiles'
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
    <>
    <Home/>
    </>
  )
}
