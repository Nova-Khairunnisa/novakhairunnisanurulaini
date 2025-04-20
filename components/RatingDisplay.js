"use client";

import { useEffect, useState } from "react";

export default function RatingDisplay({ refreshTrigger }) {
  const [data, setData] = useState({ average: 0, totalVotes: 0 });

  const fetchRatings = async () => {
    const res = await fetch("/api/rating");
    const result = await res.json();
    setData(result);
  };

  useEffect(() => {
    fetchRatings();
  }, [refreshTrigger]); // refreshTrigger will trigger refetch

  return (
    <div className="text-center mt-4">
      <p className="text-lg">
        ⭐ Rata-rata: {data.average.toFixed(1)} dari {data.totalVotes} vote
      </p>
    </div>
  );
}
