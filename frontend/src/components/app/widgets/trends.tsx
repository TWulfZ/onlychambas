import { dummyTrends } from "@/dummy-data"
import { EllipsisIcon } from "lucide-react"

export default function TrendsWidget() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-4 mb-4">
      <h2 className="font-bold text-xl mb-4">{"What's happening"}</h2>

      {dummyTrends.map((trend) => (
        <div key={trend.id} className="py-3 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg px-2 cursor-pointer">
          <div className="flex justify-between">
            <div>
              <p className="text-gray-500 text-xs">Trending in {trend.location}</p>
              <p className="font-bold">{trend.title}</p>
              <p className="text-gray-500 text-xs">{trend.posts} posts</p>
            </div>
            <button className="text-gray-500 hover:text-primary hover:bg-primary/10 h-8 w-8 rounded-full flex items-center justify-center">
              <span className="sr-only">More</span>
              <EllipsisIcon/>
            </button>
          </div>
        </div>
      ))}

      <button className="text-primary hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left p-3 rounded-lg mt-1">
        Show more
      </button>
    </div>
  )
}

