import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RecipeCard() {
  const [recipes, setRecipes] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/recipe", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (response.ok) {
          setRecipes(data.recipe);
          setMessage(data.message);
        } else {
          setMessage(data.message);
        }
      } catch (error) {
        console.log("Error fetching recipes:", error);
        setMessage("Failed to fetch recipes. Please try again later.");
      }
    };
    fetchRecipes();
  }, []);

  const handleViewFullRecipe = (recipe) => {
    navigate(`/recipe/${recipe._id}`, { state: { recipe } });
  };

  const handleUpdate = (recipe) => {
    navigate(`/update-recipe/${recipe._id}`, { state: { recipe } });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (!confirmDelete) return;

    try {
      const response = await fetch(`http://localhost:5000/api/recipe/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe._id !== id)
        );
        setMessage("Recipe deleted successfully.");
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log("Error deleting recipe:", error);
      setMessage("Failed to delete the recipe. Please try again later.");
    }
  };

  return (
    <div
      className="container py-4"
      style={{
        fontFamily: "'Poppins', sans-serif",
        minHeight: "100vh",
      }}
    >
      {/* Page Title */}
      <h1 className="text-center text-danger fw-bold mb-4">
        Recipe Collection
      </h1>

      {/* Message */}
      {message && (
        <p className="text-center text-secondary fs-5 mb-4">{message}</p>
      )}

      {/* Card Grid */}
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {recipes.map((recipe, index) => (
          <div key={index} className="col">
            <div className="card h-100 shadow-sm">
              {/* Card Header */}
              <div className="card-header text-center bg-danger text-white fw-bold">
                {recipe.title}
              </div>

              {/* Card Image */}
              <img
                src={recipe.image || "https://via.placeholder.com/150"}
                className="card-img-top"
                alt={recipe.title}
                style={{ height: "400px" }}
              />

              {/* Card Body */}
              <div className="card-body">
                <p className="card-text">
                  <strong>Description:</strong> {recipe.description}
                </p>
              </div>

              {/* Card Footer */}
              <div className="card-footer d-flex justify-content-between align-items-center bg-light">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleViewFullRecipe(recipe)}
                >
                  View Full Recipe
                </button>

                <div>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleUpdate(recipe)}
                  >
                    Update
                  </button>
                  <button
                    className="btn btn-outline-danger btn-sm"
                    onClick={() => handleDelete(recipe._id)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
