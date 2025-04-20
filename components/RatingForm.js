"use client";

import { useState } from "react";

export default function RatingForm({ onRatingSubmitted }) {
  const [rating, setRating] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!rating) return;

    await fetch("/api/rating", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: parseInt(rating) }),
    });

    setRating("");
    onRatingSubmitted(); // trigger refresh on parent
  };

  return (
    <form onSubmit={handleSubmit} className="text-center">
      <input
        type="number"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        min="1"
        max="5"
        required
        className="border p-2 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded ml-2"
      >
        Kirim Rating
      </button>
    </form>
  );
}
