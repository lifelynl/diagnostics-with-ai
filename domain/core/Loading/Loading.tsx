import styles from './Loading.module.css';

export function Loading() {

    return <div style={{display: 'flex', flex: 1,  alignItems: 'center', flexDirection: 'column'}}>
            <p className={styles.text}>Let me think for a second</p>
            <div className={styles.ripple}><div></div><div></div></div>
        </div>
}