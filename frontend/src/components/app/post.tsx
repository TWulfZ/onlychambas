"use client"

import { useState } from "react"
import { MessageCircle, Repeat2, Heart, BarChart2, Share, MoreHorizontal } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { cn } from "@/lib/utils"
import type { PostType } from "@/types"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { UserHoverCard } from "@/components/app/user-hovercard"
import { VerifiedIcon } from "../icons"

interface PostProps {
  post: PostType
}

export default function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false)
  const [retweeted, setRetweeted] = useState(false)

  const likeCount = liked ? post.likes + 1 : post.likes
  const retweetCount = retweeted ? post.retweets + 1 : post.retweets

  return (
    <div className="p-4 border-b border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
      <div className="flex">
        <div className="mr-3">
          <UserHoverCard user={post.author}>
            <div className="cursor-pointer">
              <Avatar className="w-10 h-10">
                <AvatarImage src={post.author.avatar} alt={post.author.name} />
                <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
          </UserHoverCard>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <UserHoverCard user={post.author}>
                <span className="font-bold mr-1 hover:underline cursor-pointer">{post.author.name}</span>
              </UserHoverCard>
              {post.author.verified && (
                <span className="text-primary">
                  <VerifiedIcon/>
                </span>
              )}
              <UserHoverCard user={post.author}>
                <span className="text-gray-500 ml-1 hover:underline cursor-pointer">@{post.author.username}</span>
              </UserHoverCard>
              <span className="text-gray-500 mx-1">·</span>
              <span className="text-gray-500">
                {formatDistanceToNow(new Date(post.timestamp), { addSuffix: true })}
              </span>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="text-gray-500 hover:text-primary">
                  <MoreHorizontal size={18} />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Not interested in this post</DropdownMenuItem>
                <DropdownMenuItem>Follow @{post.author.username}</DropdownMenuItem>
                <DropdownMenuItem>Mute @{post.author.username}</DropdownMenuItem>
                <DropdownMenuItem>Block @{post.author.username}</DropdownMenuItem>
                <DropdownMenuItem>Report post</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="mt-2 text-base">
            <p>{post.content}</p>
          </div>

          {post.image && (
            <div className="mt-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
              <img src={post.image || "/placeholder.svg"} alt="Post image" className="w-full h-auto" />
            </div>
          )}

          <div className="mt-3 flex justify-between max-w-md">
            <button className="flex items-center text-gray-500 hover:text-primary group">
              <div className="p-2 rounded-full group-hover:bg-primary/10">
                <MessageCircle size={18} />
              </div>
              <span className="text-sm ml-1">{post.comments}</span>
            </button>

            <button
              className={cn(
                "flex items-center group",
                retweeted ? "text-green-500" : "text-gray-500 hover:text-green-500",
              )}
              onClick={() => setRetweeted(!retweeted)}
            >
              <div className={cn("p-2 rounded-full", retweeted ? "bg-green-500/10" : "group-hover:bg-green-500/10")}>
                <Repeat2 size={18} />
              </div>
              <span className="text-sm ml-1">{retweetCount}</span>
            </button>

            <button
              className={cn("flex items-center group", liked ? "text-red-500" : "text-gray-500 hover:text-red-500")}
              onClick={() => setLiked(!liked)}
            >
              <div className={cn("p-2 rounded-full", liked ? "bg-red-500/10" : "group-hover:bg-red-500/10")}>
                <Heart size={18} className={cn(liked && "fill-current")} />
              </div>
              <span className="text-sm ml-1">{likeCount}</span>
            </button>

            <button className="flex items-center text-gray-500 hover:text-primary group">
              <div className="p-2 rounded-full group-hover:bg-primary/10">
                <BarChart2 size={18} />
              </div>
              <span className="text-sm ml-1">{post.views}</span>
            </button>

            <button className="flex items-center text-gray-500 hover:text-primary">
              <div className="p-2 rounded-full hover:bg-primary/10">
                <Share size={18} />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

