'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name)
  }
  return (
    <main>
      <h1>Basic Routing</h1>
      <Link href="./login">Go to login page</Link>
      <br />
      <Link href="./about">Go to about page</Link>
      <br />
      <Link href='./productlist'>Go to Product List</Link>
      <br />
      <Link href='./itemlist'>Go to Item list</Link>
      <br />
      <Link href='./optimization'>Go to image optimization</Link>
      <br />
      <Link href='./metadata'>Go to metadata page</Link>
      <br />
      <br />

      {/* <button onClick={() => router.push('./login')}>Go to login page</button> */}
      <button onClick={() => navigate('./login')}>Go to login page</button>

      <br />
      {/* <button onClick={() => router.push('./about')}>Go to About page</button> */}
      <button onClick={() => navigate('./about')}>Go to About page</button>
      <br />

      <img src='/teddy.png.jpg'
        height={100}
        width={100} />

    </main>
  )
}
