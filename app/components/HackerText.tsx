"use client"

import { useTransform, MotionValue } from "framer-motion"
import { useEffect, useState } from "react"

const CHARS = "!<>-_\\/[]{}—=+*^?#"

export default function HackerText({
    text,
    progress,
    range
}: {
    text: string
    progress: MotionValue<number>
    range: [number, number]
}) {
    // Map progress to the number of characters that should be fully decoded
    const decodedLength = useTransform(progress, range, [0, text.length])
    const [displayText, setDisplayText] = useState(text)

    useEffect(() => {
        const unsubscribe = decodedLength.on("change", (latest) => {
            const length = Math.floor(latest)
            
            // Fully decoded
            if (length >= text.length) {
                setDisplayText(text)
                return
            }
            
            // Fully encrypted (or before animation starts)
            if (length <= 0) {
                const random = text.split("").map(c => c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
                setDisplayText(random)
                return
            }

            // Partially decoded
            const realPart = text.substring(0, length)
            const randomPart = text.substring(length).split("").map(c => c === " " ? " " : CHARS[Math.floor(Math.random() * CHARS.length)]).join("")
            
            setDisplayText(realPart + randomPart)
        })

        return () => unsubscribe()
    }, [decodedLength, text])

    return <span>{displayText}</span>
}
