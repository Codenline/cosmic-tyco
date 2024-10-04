import "./Home.css"
import HomeBanner from './HomeBanner'
import HomeContent from "./HomeContent"

export default function Home() {
  return(
    <main className="main-content">
      <HomeBanner />
      <HomeContent/>
    </main>
  )
}