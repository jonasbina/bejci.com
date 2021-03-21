import Head from 'next/head'
import styles from '../styles/Home.module.css'
import useSWR from 'swr';
import fetcher from '../lib/fetcher';
import Image from 'next/image'
import { getCuratedPhotos } from "./api/unsplash2"

export default function Home() {
  const { data, error } = useSWR('/api/unsplash2', fetcher)
  
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  console.log("BLA BLA BLA")
  console.log("data")

  return (
    <div>
      <div className={styles.bgWrap}>
        {/* <img src={data?.url} className={styles.bgImage} alt=""></img> */}
        <Image
          alt="Mountains"
          src={data.xoxo}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <p className={styles.bgText}>
        Image Component
      <br />
      as a Background
    </p>
    </div>
  )
}

// export async function getStaticProps() {
//   // const auth = "Client-ID " + process.env.UNSPLASH_ACCESS_KEY
//   // const result = await fetch(
//   //   `https://api.unsplash.com/photos/random?query=bull&count=1&orientation=landscape`,
//   //   {
//   //     headers: {
//   //       Authorization: auth,
//   //       'Cache-Control': 'public, max-age=3600',
//   //     },
//   //   }
//   // );
//   // const responseJson = await result.json();
//   // const photo = responseJson[0]
//   // const data = photo;
//   // console.log(responseJson);

//   const request = await fetch('http://localhost:3000/api/unsplash')
//   const data = await request.json()

//   return {
//     props: {
//       data,
//     },
//   };
// }
