import { Hearts } from "react-loader-spinner";
import styles from './Loader.module.css'
export const Loader = () => {
    return <div className={styles.loader}>
        <Hearts    
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="hearts-loading"
  wrapperStyle={{}}
  wrapperClass=""
 visible={true} 
/>
    </div>
}