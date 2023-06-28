
import styles from './Button.module.css'
export const Button = ({ onClick }) => {
    return <div className={styles.btn}>
        <button className={styles.Button} onClick={onClick} type="button">Load more</button>
 
    </div>
}