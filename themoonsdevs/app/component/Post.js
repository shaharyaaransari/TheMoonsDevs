import React from "react";

const Posts = ({ data }) => {
  return (
    <div class="max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Prompt: {data.Prompt}</div>
        <p class="text-gray-700 text-base">Post :{data.Post}</p>
        <p>Date:{data.Timestamp}</p>
      </div>
    </div>
  );
};

export default Posts;
