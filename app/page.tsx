"use client";
import axios from "axios";
import { useState } from "react";

import ShowData from "./utils/saveToSheet";


export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [post, setPost] = useState<string>("");
  const timestamp = new Date().toISOString();
  const generatePost = async () => {

    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });

      let generatedPost = response.data.candidates[0].content.parts[0].text.slice(0, 200);
      if (!generatedPost || generatedPost.trim().length === 0) {
        generatedPost = "Content not available";
      } else {
        generatedPost = generatedPost.slice(0, 200).trim();
      }
      setPost(generatedPost);
    
      ShowData(prompt, generatedPost);
    } catch (error) {
      console.error("Error generating post:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    generatePost();
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md">
        <input
          type="text"
          value={prompt}
          onChange={handleChange}
          placeholder="Enter your prompt"
          className="border p-2 rounded w-full"
        />
        <button
          onClick={handleSubmit}
          className="mt-4 bg-blue-500 text-white p-2 rounded"
        >
          Generate Posts
        </button>
          
      </div>
    </div>
  );
}
