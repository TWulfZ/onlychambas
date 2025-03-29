import { ComponentType, SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type NavLink = {
  name: string;
  url: string;
  icon: ComponentType;
};

export interface Author {
  id: string
  name: string
  username: string
  avatar: string
  verified: boolean
}

export interface PostType {
  id: string
  author: Author
  content: string
  image?: string
  timestamp: string
  comments: number
  retweets: number
  likes: number
  views: number
}

export interface TrendType {
  id: string
  title: string
  location: string
  posts: number
}

export interface SuggestionType {
  id: string
  name: string
  username: string
  avatar: string
  verified: boolean
}

export interface UserProfileType {
  id: string
  name: string
  username: string
  avatar: string
  bannerImage?: string
  verified: boolean
  bio: string
  location?: string
  website?: string
  joinDate: string
  stats: {
    posts: number
    following: number
    followers: number
  }
  pinnedPost?: string
}

export enum MediaType {
  Image = "image",
  Video = "video",
}
