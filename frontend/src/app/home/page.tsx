"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Post from "@/components/app/post"
import { dummyPosts } from "@/dummy-data"
import NewPost from "@/components/app/new-post"

export default function Feed() {
  const [activeTab, setActiveTab] = useState("for-you")

  // Filtrar posts según la pestaña seleccionada
  const filteredPosts =
    activeTab === "following"
      ? dummyPosts.filter((post) => post.author.username === "elonmusk" || post.author.username === "music_news777")
      : dummyPosts

  return (
    <div className="flex-grow border-x border-gray-200 dark:border-gray-800 w-2xl ">
      <div className="sticky top-0 z-10 bg-white/80 dark:bg-black/80 backdrop-blur">
        <Tabs defaultValue="for-you" className="w-full">
          <TabsList className="w-full grid grid-cols-2 bg-transparent h-14">
            <TabsTrigger
              value="for-you"
              className="tab-header"
              onClick={() => setActiveTab("for-you")}
            >
              For you
            </TabsTrigger>
            <TabsTrigger
              value="following"
              className="tab-header"
              onClick={() => setActiveTab("following")}
            >
              Following
            </TabsTrigger>
            {/* <TabsTrigger
              value="ai-math"
              className="tab-header"
              onClick={() => setActiveTab("ai-math")}
            >
              AI Math
            </TabsTrigger> */}
          </TabsList>
        </Tabs>
      </div>

      <NewPost/>


      <div>
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}

