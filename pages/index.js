import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'
import UserLayout from '../components/UserLayout';
import UserHeader from '../components/Header/UserHeader';
import UserMainContent from '../components/Main/UserMainContent';
export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>iBarber - App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout>
        <UserMainContent/>
      </UserLayout>
    </div>
  )
}
