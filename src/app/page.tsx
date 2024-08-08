"use client";
import PostOwnner from "@/components/PostOwnner";
import Comment from "@/components/Comment";
import Reply from "@/components/Reply";
import Comments from "@/components/comments";
export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "#18191A" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px", backgroundColor: "#242526" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm"
      >
        {/* Post Owner Example*/}
        <PostOwnner/>
        

        {/* Comment Example */}
        <Comment/>
        {/* Reply Example */}
        <Reply/>
        <Comments/>
        {/* map-loop render Comment component here */}
      </div>
    </div>
  );
}
