'use client';

import { useState, useEffect } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

export default function CommentForm({ onCommentAdded }) {
  const [text, setText] = useState("");
  const [isClient, setIsClient] = useState(false); // tambahan

  useEffect(() => {
    setIsClient(true); // aktif hanya setelah komponen mounting di client
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    try {
      const docRef = await addDoc(collection(db, "comments"), {
        text,
        createdAt: serverTimestamp(),
      });

      onCommentAdded({ id: docRef.id, text });
      setText("");
    } catch (error) {
      console.error("Gagal menyimpan komentar:", error);
    }
  };

  if (!isClient) return null; // cegah render saat SSR

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mt-6">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="w-full p-2 border rounded"
        placeholder="Tulis komentar..."
        required
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Kirim
      </button>
    </form>
  );
}
