import type { PostType, TrendType, SuggestionType, UserProfileType } from "@/types"

// Dummy authors
const authors = [
  {
    id: "1",
    name: "Superboleta",
    username: "Superboleta",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: false,
  },
  {
    id: "2",
    name: "Elon Musk",
    username: "elonmusk",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: true,
  },
  {
    id: "3",
    name: "TWulfZ",
    username: "TWulfZ_",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: false,
  },
  {
    id: "4",
    name: "Tacos",
    username: "tacdebarbacoa",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: false,
  },
  {
    id: "5",
    name: "THEO 📈 🔥",
    username: "music_news777",
    avatar: "/placeholder.svg?height=128&width=128",
    verified: true,
  },
]

// Dummy posts
export const dummyPosts: PostType[] = [
  {
    id: "1",
    author: authors[0],
    content: "Si mañana se anuncia Silksong sortearé 3000€ entre todos los que den like y respondan a este tweet",
    timestamp: "2025-03-25T12:00:00Z",
    comments: 2200,
    retweets: 601,
    likes: 9200,
    views: 232000,
  },
  {
    id: "2",
    author: authors[1],
    content: "Theme of the day",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2025-03-26T10:30:00Z",
    comments: 3900,
    retweets: 4700,
    likes: 49000,
    views: 2000000,
  },
  {
    id: "3",
    author: authors[2],
    content: "Just finished my latest project! Check it out and let me know what you think. #coding #webdev",
    timestamp: "2025-03-26T08:15:00Z",
    comments: 42,
    retweets: 12,
    likes: 189,
    views: 3400,
  },
  {
    id: "4",
    author: authors[3],
    content: "La mejor comida de la ciudad sin duda. ¡Vengan a probar nuestros tacos! 🌮 #FoodLovers",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2025-03-25T18:45:00Z",
    comments: 28,
    retweets: 15,
    likes: 203,
    views: 4200,
  },
  {
    id: "5",
    author: authors[1],
    content: "Working on something exciting. Stay tuned!",
    timestamp: "2025-03-25T22:10:00Z",
    comments: 5600,
    retweets: 3200,
    likes: 78000,
    views: 4500000,
  },
  {
    id: "6",
    author: authors[4],
    content: "This gotta be the best one yet 😭 🤣\n#ashtonhall #MorningRoutine",
    timestamp: "2025-03-25T09:30:00Z",
    comments: 1400,
    retweets: 23000,
    likes: 146000,
    views: 6900000,
  },
  {
    id: "7",
    author: authors[4],
    content: "Giveaway announcement TOMORROW ! Turn on notis and stay tuned !!!",
    timestamp: "2025-03-26T14:20:00Z",
    comments: 0,
    retweets: 0,
    likes: 1,
    views: 154,
  },
  {
    id: "8",
    author: authors[4],
    content: "New album from Travis Scott dropping this Friday! 🔥🔥🔥 #UTOPIA",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2025-03-24T16:45:00Z",
    comments: 3200,
    retweets: 8700,
    likes: 92000,
    views: 1200000,
  },
]

// Dummy replies
export const dummyReplies: PostType[] = [
  {
    id: "r1",
    author: authors[4],
    content: "This is absolutely fire! Can't wait for the full album 🔥",
    timestamp: "2025-03-26T15:30:00Z",
    comments: 12,
    retweets: 5,
    likes: 230,
    views: 4500,
  },
  {
    id: "r2",
    author: authors[4],
    content: "Definitely agree with this take. The production on this track is insane!",
    timestamp: "2025-03-25T18:20:00Z",
    comments: 8,
    retweets: 2,
    likes: 156,
    views: 3200,
  },
  {
    id: "r3",
    author: authors[4],
    content: "I was at this concert! The energy was unreal 🙌",
    image: "/placeholder.svg?height=400&width=600",
    timestamp: "2025-03-24T09:15:00Z",
    comments: 25,
    retweets: 18,
    likes: 342,
    views: 7800,
  },
]

// Dummy liked posts
export const dummyLikedPosts = [
  {
    likedBy: "music_news777",
    post: dummyPosts[1],
  },
  {
    likedBy: "music_news777",
    post: dummyPosts[2],
  },
  {
    likedBy: "music_news777",
    post: {
      id: "l1",
      author: authors[1],
      content: "Just announced a new AI model that can generate music based on your mood. Testing begins next week.",
      timestamp: "2025-03-23T14:20:00Z",
      comments: 4300,
      retweets: 6700,
      likes: 89000,
      views: 3400000,
    },
  },
]

// Dummy trends
export const dummyTrends: TrendType[] = [
  {
    id: "1",
    title: "#LaTrixECDF",
    location: "Ecuador",
    posts: 3256,
  },
  {
    id: "2",
    title: "Penitenciaría del Litoral",
    location: "Ecuador",
    posts: 2100,
  },
  {
    id: "3",
    title: "Carlos Vera",
    location: "Ecuador",
    posts: 1047,
  },
  {
    id: "4",
    title: "Clementina",
    location: "Ecuador",
    posts: 1579,
  },
  {
    id: "5",
    title: "Erika Vélez",
    location: "Ecuador",
    posts: 2345,
  },
  {
    id: "6",
    title: "Janner",
    location: "Ecuador",
    posts: 1264,
  },
]

// Dummy suggestions
export const dummySuggestions: SuggestionType[] = [
  {
    id: "1",
    name: "messed up cars",
    username: "messedupcars",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: true,
  },
  {
    id: "2",
    name: "MrBeast",
    username: "MrBeast",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: true,
  },
  {
    id: "3",
    name: "World of Statistics",
    username: "stats_feed",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: true,
  },
  {
    id: "4",
    name: "カセット (fuck internet)",
    username: "Kass8tto",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: false,
  },
  {
    id: "5",
    name: "Ani-Manny 🇲🇽",
    username: "ani_manny",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: false,
  },
  {
    id: "6",
    name: "az",
    username: "anthoyne",
    avatar: "/placeholder.svg?height=48&width=48",
    verified: false,
  },
]

// Perfil de usuario de ejemplo
export const user = {
  id: 1,
  name: "TWulfZ",
  nametag: "@TWulfZ",
  profile_pic: "https://pbs.twimg.com/profile_images/1852045122663518209/w8su8CiS_400x400.jpg",
  banner: "https://yt3.googleusercontent.com/nQcm2s-bbOHRw-06qOKzhStdwdQ_K-QNHtDPt5K9Of3DH7biqeCmn5OHq_5kUd-r2D_mSf_P=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  description: "Featuring videos by TWulfZ Creators",
  url: "https://twulfz.com"
}
export const dummyUserProfile: UserProfileType = {
  id: "5",
  name: "TWulfZ",
  username: "twulfz",
  avatar: "https://pbs.twimg.com/profile_images/1852045122663518209/w8su8CiS_400x400.jpg",
  bannerImage: "https://yt3.googleusercontent.com/nQcm2s-bbOHRw-06qOKzhStdwdQ_K-QNHtDPt5K9Of3DH7biqeCmn5OHq_5kUd-r2D_mSf_P=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
  verified: true,
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  location: "Ecuador",
  website: "https://twulfz.com",
  joinDate: "April 2018",
  stats: {
    posts: 69,
    following: 123,
    followers: 12456,
  },
  pinnedPost: "1",
}