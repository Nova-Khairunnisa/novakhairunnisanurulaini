"use client";

import { useState } from "react";
import RatingForm from "./RatingForm";
import RatingDisplay from "./RatingDisplay";

export default function RatingSection() {
  const [refreshRating, setRefreshRating] = useState(0);

  return (
    <section id="rating" className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold text-center">Beri Rating Website Ini</h2>
      <RatingForm onRatingSubmitted={() => setRefreshRating((r) => r + 1)} />
      <RatingDisplay refreshTrigger={refreshRating} />
    </section>
  );
}
