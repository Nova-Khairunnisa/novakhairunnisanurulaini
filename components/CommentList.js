// components/CommentList.js
import { useEffect, useState } from "react";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";

export default function CommentList({ newComment }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, [newComment]);

  return (
    <ul className="space-y-2">
      {comments.map((comment) => (
        <li key={comment.id} className="bg-white dark:bg-gray-700 p-3 rounded shadow">
          {comment.text}
        </li>
      ))}
    </ul>
  );
}
