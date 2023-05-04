
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react'
import { Home, Search, AllRecipes, RecipePage, SavedRecipes, YourRecipes, Login, SignUp } from './allcomponents'

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
