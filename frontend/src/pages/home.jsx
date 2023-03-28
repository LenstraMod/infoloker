import styles from "../style";
import { Navbar,Footer,Hero } from "../components";
import { useEffect } from "react";

export default function home() {

  useEffect(() => {
    document.title = "Infoloker | Home"
  },[])

  return (
    <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <Navbar />
      </div>
      
      <div className={`${styles.flexStart} bg-white`}>
        <Hero />
      </div>
      <Footer />
    </div>
  )
}