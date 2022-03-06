import Link from 'next/link'
import Head from 'next/head'
import Container from '../../components/container'

const FirstPost = () => {
  return (
        <Container>
            <Head>
                <title>My First Post</title>
            </Head>
            <h1>My First Post</h1>
            <img src="/batman.jpg" width="200" alt="Batman 2022" />
            <h2>
                <Link href="/">Home</Link>
            </h2>
        </Container>
  )
}

export default FirstPost