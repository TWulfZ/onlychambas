import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { dummySuggestions } from "@/dummy-data"
import { UserHoverCard } from "@/components/app/user-hovercard"
import Link from "next/link"

export default function SuggestionsWidget() {
  // Limitamos a 3 sugerencias como se solicitó
  const limitedSuggestions = dummySuggestions.slice(0, 3)

  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4">
      <h2 className="font-bold text-xl mb-4">Who to follow</h2>

      {limitedSuggestions.map((user) => (
        <div
          key={user.id}
          className="flex items-center justify-between py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2"
        >
          <div className="flex items-center min-w-0 max-w-[calc(100%-80px)]">
            <Link href={`/profile/${user.username}`}>
              <UserHoverCard user={user}>
                <Avatar className="w-10 h-10 mr-3 flex-shrink-0">
                  <AvatarImage src={user.avatar} alt={user.name} />
                  <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </UserHoverCard>
            </Link>
            <div className="min-w-0">
              <div className="flex items-center">
                <Link href={`/profile/${user.username}`}>
                  <UserHoverCard user={user}>
                    <p className="font-bold truncate max-w-[120px]">{user.name}</p>
                  </UserHoverCard>
                </Link>
                {user.verified && (
                  <span className="text-primary ml-1 flex-shrink-0">
                    <svg viewBox="0 0 24 24" aria-label="Verified account" className="w-4 h-4 fill-current">
                      <g>
                        <path d="M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"></path>
                      </g>
                    </svg>
                  </span>
                )}
              </div>
              <Link href={`/profile/${user.username}`}>
                <UserHoverCard user={user}>
                  <p className="text-gray-500 text-sm truncate max-w-[150px]">@{user.username}</p>
                </UserHoverCard>
              </Link>
            </div>
          </div>
          <Button className="bg-black dark:bg-white text-white dark:text-black rounded-full font-bold text-sm flex-shrink-0 ml-3">
            Follow
          </Button>
        </div>
      ))}

      <button className="text-primary hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left p-3 rounded-lg mt-1">
        Show more
      </button>
    </div>
  )
}

