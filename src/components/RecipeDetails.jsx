import React from "react";
import { useLocation } from "react-router-dom";

export default function RecipeDetails() {
  const location = useLocation();
  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <h1 style={{ color: "#ff6f61", fontWeight: "bold" }}>
          No Recipe Found
        </h1>
      </div>
    );
  }

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        backgroundColor: "#f9f9f9",
        minHeight: "100vh",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      Recipe Image
      <div
        style={{
          width: "100%",
          maxWidth: "800px",
          marginBottom: "20px",
        }}
      >
        <img
          src={recipe.image || "https://via.placeholder.com/800x400"}
          alt={recipe.title}
          style={{
            width: "100%",
            borderRadius: "10px",
            objectFit: "cover",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
      </div>
      {/* Ingredients and Steps Container */}
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          width: "100%",
          maxWidth: "800px",
        }}
      >
        {/* details */}
        <div style={{ marginBottom: "30px" }}>
          <h2
            style={{
              color: "#ff6f61",
              fontSize: "1.8rem",
              borderBottom: "2px solid #ff6f61",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            Title
          </h2>
          <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            {recipe.title}
          </h1>
          <h2
            style={{
              color: "#ff6f61",
              fontSize: "1.8rem",
              borderBottom: "2px solid #ff6f61",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            Description
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              marginTop: "10px",
              fontWeight: "italic",
            }}
          >
            {recipe.description}
          </p>
          <h2
            style={{
              color: "#ff6f61",
              fontSize: "1.8rem",
              borderBottom: "2px solid #ff6f61",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            Ingredients
          </h2>
          <ul
            style={{
              listStyleType: "disc",
              paddingLeft: "20px",
              color: "#555",
              fontSize: "1rem",
              lineHeight: "1.8",
            }}
          >
            {recipe.ingredients
              .join(",")
              .split(",")
              .map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
          </ul>
        </div>

        {/* Steps */}
        <div>
          <h2
            style={{
              color: "#ff6f61",
              fontSize: "1.8rem",
              borderBottom: "2px solid #ff6f61",
              paddingBottom: "10px",
              marginBottom: "15px",
            }}
          >
            Steps
          </h2>
          <ol
            style={{
              listStyleType: "decimal",
              paddingLeft: "20px",
              color: "#555",
              fontSize: "1rem",
              lineHeight: "1.8",
            }}
          >
            {recipe.steps
              .join(",")
              .split(",")
              .map((step, index) => (
                <li key={index} style={{ marginBottom: "10px" }}>
                  {step}
                </li>
              ))}
          </ol>
        </div>
      </div>
      {/* Back Button */}
      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button
          style={{
            backgroundColor: "#ff6f61",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            padding: "10px 20px",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "background-color 0.3s",
            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "#ff8a7a")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "#ff6f61")}
          onClick={() => window.history.back()}
        >
          Back to Recipes
        </button>
      </div>
    </div>
  );
}
