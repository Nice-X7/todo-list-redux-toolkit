import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadAlbums } from "../redux/Albums/AlbumsSlice";
import { Photos } from "./Photos";
import { Route, Routes } from "react-router-dom";
import { Albums } from "./Albums";


export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadAlbums())
  }, [dispatch])

  return (
    <Routes>
      <Route 
      path="/:id?"
      element={
      <div className="App">
        <Albums />
        <Photos />
      </div>
      }
      />
    </Routes>
  );
}