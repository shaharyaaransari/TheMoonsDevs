"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import ShowData from "./utils/SavetoSheet";
import Posts from "./component/Post"; 

interface PostData {
  Timestamp: string;
  Prompt: string;
  Post: string;
}

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [post, setPost] = useState<string>("");
  const [postData, setPostData] = useState<PostData[]>([]);

  const generatePost = async () => {
    try {
      const response = await axios({
        url: `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${process.env.NEXT_PUBLIC_GEMINI_API_KEY}`,
        method: "post",
        data: {
          contents: [{ parts: [{ text: prompt }] }],
        },
      });
  showPost();
      let generatedPost =
        response.data.candidates[0].content.parts[0].text.slice(0, 200);
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

  const handleSubmit = () => {
    generatePost();
  };

  const showPost = () => {
    axios
      .get("https://sheetdb.io/api/v1/os7z3l7ouqvta")
      .then((res) => {
        setPostData(res.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    showPost();
  }, []);

  return (
    <div className="h-screen bg-gray-100 p-6">
      <div className="bg-white p-6 rounded shadow-md max-w-xl mx-auto">
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
        {post && (
          <p className="bg-gray-100 border border-gray-300 p-4 rounded-md shadow-md mt-4">
            {post}
          </p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6">
        {postData.length > 0 &&
          postData.map((el) => {
            return <Posts key={el.Timestamp} data={el} />;
          })}
      </div>
    </div>
  );
}
