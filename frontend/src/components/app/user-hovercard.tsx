"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card"
import type { Author, SuggestionType, UserProfileType } from "@/types"
import { dummyUserProfile } from "@/dummy-data"
import { useRouter } from "next/navigation"

interface UserHovercardProps {
  user: Author | SuggestionType | UserProfileType
  children: React.ReactNode
}

export function UserHoverCard({ user, children }: UserHovercardProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const router = useRouter()

  const navigateToProfile = () => {
    router.push(`/profile/${user.username}`)
  }

  // Obtener datos completos del perfil si están disponibles
  // En una app real, harías una llamada a la API para obtener estos datos
  const profileData =
    "stats" in user
      ? (user as UserProfileType)
      : { ...dummyUserProfile, name: user.name, username: user.username, avatar: user.avatar, verified: user.verified }

  return (
    <HoverCard openDelay={300} closeDelay={200}>
      <HoverCardTrigger className="cursor-pointer">{children}</HoverCardTrigger>
      <HoverCardContent className="w-80 p-0" align="start">
        <div className="p-4">
          <div className="flex justify-between items-start mb-4">
            <div onClick={navigateToProfile} className="cursor-pointer">
              <Avatar className="w-12 h-12 border-2 border-white dark:border-black">
                <AvatarImage src={profileData.avatar} alt={profileData.name} />
                <AvatarFallback>{profileData.name.charAt(0)}</AvatarFallback>
              </Avatar>
            </div>
            <Button
              variant={isFollowing ? "outline" : "default"}
              className="rounded-full font-bold"
              onClick={() => setIsFollowing(!isFollowing)}
            >
              {isFollowing ? "Following" : "Follow"}
            </Button>
          </div>

          <div className="mb-3">
            <div className="flex items-center">
              <span onClick={navigateToProfile} className="font-bold text-lg hover:underline cursor-pointer">
                {profileData.name}
              </span>
              {profileData.verified && (
                <span className="text-primary ml-1">
                  <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-5 h-5 fill-current">
                    <g>
                      <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
                    </g>
                  </svg>
                </span>
              )}
            </div>
            <p className="text-gray-500">@{profileData.username}</p>
          </div>

          {"bio" in profileData && profileData.bio && <p className="mb-3">{profileData.bio}</p>}

          <div className="flex gap-4">
            <div
              onClick={() => router.push(`/profile/${profileData.username}/following`)}
              className="hover:underline cursor-pointer"
            >
              <span className="font-bold">{profileData.stats?.following || 0}</span>{" "}
              <span className="text-gray-500">Following</span>
            </div>
            <div
              onClick={() => router.push(`/profile/${profileData.username}/followers`)}
              className="hover:underline cursor-pointer"
            >
              <span className="font-bold">{profileData.stats?.followers || 0}</span>{" "}
              <span className="text-gray-500">Followers</span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-gray-800 p-3">
          <Button variant="ghost" className="w-full justify-center rounded-md">
            Profile Summary
          </Button>
        </div>
      </HoverCardContent>
    </HoverCard>
  )
}
