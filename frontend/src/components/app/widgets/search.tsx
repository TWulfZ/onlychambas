import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function SearchWidget() {
  return (
    <div className="sticky top-0 z-10 pt-2 pb-3 bg-white dark:bg-black">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" size={18} />
        <Input placeholder="Search" className="pl-10 bg-gray-100 dark:bg-gray-800 border-none rounded-full h-10" />
      </div>
    </div>
  )
}

