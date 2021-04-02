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

  const attribution = "?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
  const photoUrlRegular = data.urls.regular
  const photoUrlFull = data.urls.full
  const photoHtmlUrl = data.links.html + attribution
  const authorUrl = data.user.links.html + attribution
  const authorName = data.user.username
  const unsplashUrl = "https://unsplash.com" + attribution
  const alt = data.description

  return (
    <div className={styles.container}>
      <div className={styles.bgWrap}>
      <Image
          alt={alt}
          src={photoUrlRegular}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      <Image
          alt={alt}
          src={photoUrlFull}
          layout="fill"
          objectFit="cover"
          quality={100}
        />
      </div>
      <footer className={styles.footer}>
        <p>
          <a href={photoHtmlUrl}>photo</a> by <a href={authorUrl} target="_blank" rel="noopener noreferrer">{authorName}</a> on <a href={unsplashUrl}>unsplash.com</a>
        </p>
      </footer>
    </div>
  )
}
