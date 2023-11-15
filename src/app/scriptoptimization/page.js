"use client"
import Script from "next/script"

export default function Home() {
    return (
        <div>
            <h1>script optimization</h1>
            <Script src='./location.js '
                onLoad={() => { console.log('file loaded') }}
            />
        </div>
    )
}