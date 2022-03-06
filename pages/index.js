import Link from 'next/link'
import Head from 'next/head'

const Homepage = () => {
  return (
      <>
        <Head>
            <title>Welcome to Next.js!</title>
        </Head>
        <div>Welcome to Next.js!</div>
        <Link href="/posts/first"><a>First Post</a></Link>
      </>
  )
}

export default Homepage