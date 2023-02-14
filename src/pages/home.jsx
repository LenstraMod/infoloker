import styles from "../style";
import { Navbar,Footer,Hero } from "../components";

export default function home() {
  return (
    <div className="w-full bg-white overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      
      <div className={`${styles.flexStart} bg-white`}>
        <div className={`${styles.boxWidth}`}>
        <Hero />
        </div>
      </div>
    </div>
  )
}