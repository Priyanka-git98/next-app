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

// The next/script component in Next.js is used to include external scripts in our application. It provides a way to load scripts efficiently 


