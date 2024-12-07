import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UpdateRecipeForm() {
  const location = useLocation();
  const navigate = useNavigate();
  const recipe = location.state?.recipe || {};

  const [formData, setFormData] = useState({
    title: recipe.title || "",
    description: recipe.description || "",
    ingredients: recipe.ingredients || "",
    steps: recipe.steps || "",
    image: recipe.image || "",
  });

  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!recipe._id) {
      navigate("/");
    }
  }, [recipe, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5000/api/recipe/${recipe._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessage("Recipe updated successfully!");
        setTimeout(() => {
          navigate("/get-recipe");
        }, 2000);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.log("Error updating recipe:", error);
      setMessage("Failed to update the recipe. Please try again later.");
    }
  };

  return (
    <div
      className="container py-4"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <h1 className="text-center text-danger fw-bold mb-4">Update Recipe</h1>

      {message && (
        <p className="text-center text-secondary fs-5 mb-4">{message}</p>
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Recipe Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="form-control"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="form-control"
            rows="3"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="ingredients" className="form-label">
            Ingredients
          </label>
          <textarea
            id="ingredients"
            name="ingredients"
            value={formData.ingredients}
            onChange={handleChange}
            className="form-control"
            rows="3"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="steps" className="form-label">
            Steps
          </label>
          <textarea
            id="steps"
            name="steps"
            value={formData.steps}
            onChange={handleChange}
            className="form-control"
            rows="3"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="image" className="form-label">
            Image URL
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formData.image}
            onChange={handleChange}
            className="form-control"
          />
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success me-2">
            Update Recipe
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/get-recipe")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
