import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Photos } from "./Photos";
import { Route, Routes } from "react-router-dom";
import { Albums } from "./Albums";
import { loadAlbums } from "../redux/Albums/AlbumsSlice";
import { AppDispatch } from "../redux";


export const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()

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