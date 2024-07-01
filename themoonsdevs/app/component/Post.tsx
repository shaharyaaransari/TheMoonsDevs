import React from "react";

interface PostData {
  Timestamp: string;
  Prompt: string;
  Post: string;
}

interface PostsProps {
  data: PostData;
}

const Posts: React.FC<PostsProps> = ({ data }) => {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-md shadow-md">
      <h3 className="font-bold">{data.Prompt}</h3>
      <p>{data.Post}</p>
      <p className="text-gray-500 text-sm">{new Date(data.Timestamp).toLocaleString()}</p>
    </div>
  );
};

export default Posts;
