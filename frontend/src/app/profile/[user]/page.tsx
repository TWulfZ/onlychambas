import Sidebar from "@/components/app/sidebar"
import ProfileHeader from "@/components/profile/profile-header"
import ProfileTabs from "@/components/profile/profile-tabs"
import Widgets from "@/components/app/widgets"
import { dummyUserProfile } from "@/lib/dummy-LoginFormData"

export default function ProfilePage({ params }: { params: { username: string } }) {
  // En una aplicación real, aquí harías una llamada a la API para obtener el perfil
  // basado en el username de los parámetros
  const profile = dummyUserProfile

  return (
    <div className="bg-white dark:bg-black min-h-screen text-black dark:text-white">
      <main className="container mx-auto flex max-w-7xl">
        <Sidebar />
        <div className="flex-grow border-x border-gray-200 dark:border-gray-800 max-w-2xl">
          <ProfileHeader profile={profile} />
          <ProfileTabs profile={profile} />
        </div>
        <Widgets />
      </main>
    </div>
  )
}

