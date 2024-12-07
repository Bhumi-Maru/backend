import React from "react";
import "./App.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RecipeForm from "./components/RecipeForm";
import RecipeCard from "./components/RecipeCard";
import Navbar from "./components/Navbar";
import RecipeDetails from "./components/RecipeDetails";
import { AuthProvider } from "./context/AuthContext";
import UpdateRecipeForm from "./components/UpdateRecipeForm";

export default function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* Protect /create-recipe route */}
            <Route path="/create-recipe" element={<RecipeForm />} />

            <Route path="/get-recipe" element={<RecipeCard />} />
            <Route path="/recipe/:id" element={<RecipeDetails />} />
            <Route path="/update-recipe/:id" element={<UpdateRecipeForm />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}
