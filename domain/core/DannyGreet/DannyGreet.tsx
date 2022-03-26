import { useRouter } from "next/router";
import { useCallback, useEffect, useRef, useState } from "react";
import { classNames } from "react-select/dist/declarations/src/utils";
import { Button } from "../Button/Button";
import styles from './DannyGreet.module.css'
import Image from 'next/image'

export function DannyGreet() {
    const [active, setActive] = useState<string[]>([])
    const {replace} = useRouter()
  


    const addActive = useCallback((timer: NodeJS.Timer) => {
        if(active.length >= 4) {
            clearInterval(timer)
            return
        }
        setActive([...active, active.length.toString()])
    }, [active])

    useEffect(() => {
        const timer = setInterval(() => {
            addActive(timer)
        }, 1200)

        return () => clearInterval(timer)
    }, [addActive])

    console.log(active)

    return <div className={styles.container}>
        <div style={{display: 'block', alignSelf: 'center'}}>
            <Image width={132} height={156} src={'/Danny.png'} alt={'Danny'} />
        </div>
        <p className={`${styles.part} ${!!active.find(i => i === '0') && styles.partActive} ${styles.greet}`}>👋 Hi there</p>
        <p className={`${styles.part} ${!!active.find(i => i === '1') &&styles.partActive} ${styles.text}`}>I'm Danny, <br /> 
your digital diagnosis assistant.</p>

        <p className={`${styles.part} ${!!active.find(i => i === '2') &&styles.partActive} ${styles.text}`}>Let's run through some questions and try figure out what's 
going on. </p>

        <div className={`${styles.part} ${!!active.find(i => i === '3') &&styles.partActive} ${styles.text}`}>
        <Button onClick={() => replace('/diagnose-wizard')}>Let’s get started</Button>
</div>

    </div>
}