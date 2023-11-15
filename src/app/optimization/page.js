import Image from "next/image"
import Profile from '../../../public/vercel.svg'
import { Roboto } from "next/font/google";

const roboto = Roboto({
    weight: '100',
    subsets: ['latin'],
    display: 'swap'
})

export default function Home() {
    return (
        <main>
            <h1>Image optimization in Next.js</h1>
            {/* 1.Replace standard HTML <img> tags with the next/image component. This component automatically optimizes images by providing features like lazy loading, automatic resizing, and serving images in modern formats. */}
            {/* 2.Next.js automatically optimizes images during the build process. It generates multiple sizes of each image and serves the most appropriate size based on the user's device and screen size. This helps in reducing unnecessary data transfer. */}

            <Image src={Profile} alt="Profile Image" />
            <img src={Profile.src} />

            <Image src="https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                height={500}
                width={500}
            />
            {/* Fonts optimization */}
            {/* next/font will automatically optimize your fonts and remove external network requests for improved privacy and performance. */}


            {/* <h1 style={{ fontFamily: 'Roboto', fontWeight: 100 }}>Font with link tag</h1> */}
            <h1 className={roboto.className}>Font with Next.js font feature</h1>


        </main>
    );
}

