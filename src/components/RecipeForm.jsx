import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [image, setImage] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/recipe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
          ingredients: ingredients.split(",").map((item) => item.trim()),
          steps: steps.split(".").map((item) => item.trim()),
          image,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        navigate("/get-recipe");
      } else {
        setMessage(data.message || "Failed to create recipe.");
      }
    } catch (error) {
      console.error("Error creating recipe:", error);
      setMessage("An error occurred while creating the recipe.");
    }

    // Reset form fields
    setTitle("");
    setDescription("");
    setIngredients("");
    setSteps("");
    setImage("");
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          textAlign: "center",
          color: "#ff6f61",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Create a Recipe
      </h1>

      {message && (
        <p
          style={{
            textAlign: "center",
            color: "#888",
            marginBottom: "20px",
            fontSize: "1.1rem",
          }}
        >
          {message}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <label
          style={{ display: "block", marginBottom: "10px", color: "#ff6f61" }}
        >
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter recipe title"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
            }}
          />
        </label>

        <label
          style={{ display: "block", color: "#ff6f61", marginBottom: "10px" }}
        >
          Image:
          <textarea
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Enter recipe description"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              minHeight: "60px",
            }}
          />
        </label>

        <label
          style={{ display: "block", color: "#ff6f61", marginBottom: "10px" }}
        >
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter recipe description"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              minHeight: "60px",
            }}
          />
        </label>

        <label
          style={{ display: "block", color: "#ff6f61", marginBottom: "10px" }}
        >
          Ingredients :
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            placeholder="e.g., eggs, sugar, flour"
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              minHeight: "60px",
            }}
          />
        </label>

        <label
          style={{ display: "block", color: "#ff6f61", marginBottom: "10px" }}
        >
          Steps :
          <textarea
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder="e.g., Mix ingredients. Bake at 180°C for 25 minutes."
            required
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
              border: "1px solid #ddd",
              borderRadius: "5px",
              minHeight: "60px",
            }}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#ff6f61",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            width: "100%",
            marginTop: "10px",
          }}
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}
