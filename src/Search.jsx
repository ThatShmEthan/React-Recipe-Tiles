
import React from 'react'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Sidebar, HomeHeader, RecipeTiles, AddRecipe } from './allcomponents'

export default function Search() {
    function useQuery() {
        const { search } = useLocation;
        return React.useMemo(() => new URLSearchParams(search), [search]);
    }

    var query = useQuery();

    return (
        <>
            <AddRecipe></AddRecipe>
            <HomeHeader></HomeHeader>
            <Sidebar activePage="Search"></Sidebar>

            <div id="main-container" className="main-container">
                <RecipeTiles filters={[
                    {
                        property: "name",
                        value: document.location.href.match(/(?<=\?)[A-Za-z]+/)[0]
                    }
                ]} />
            </div>
        </>
    );
}
