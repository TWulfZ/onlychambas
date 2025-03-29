import SearchWidget from "@/components/app/widgets/search"
import TrendsWidget from "@/components/app/widgets/trends"
import SuggestionsWidget from "@/components/app/widgets/suggestions"

export default function Widgets() {
  return (
    <div className="hidden lg:flex flex-col ml-8 w-[350px] space-y-4 pt-2">
      <SearchWidget />
      <TrendsWidget />
      <SuggestionsWidget />

      <div className="text-xs text-gray-500 px-4 flex flex-wrap gap-x-2">
        <span>Terms of Service</span>
        <span>Privacy Policy</span>
        <span>Cookie Policy</span>
        <span>Accessibility</span>
        <span>Ads Info</span>
        <span>More ···</span>
        <span>© 2025 X Corp.</span>
      </div>
    </div>
  )
}

