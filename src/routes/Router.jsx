import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Home, Archive, Trash } from "../pages/index"

 function Router() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/archive' element={<Archive />} />
            <Route path='/trash' element={<Trash />} />
        </Routes>
    )
}
export default Router;