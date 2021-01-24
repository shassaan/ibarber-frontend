import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap'
export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon"  href="/favicon.ico" />
      </Head>
      <Button>hello workd</Button>
      </div>
  )
}
