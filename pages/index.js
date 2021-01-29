import Head from 'next/head'
import UserLayout from '../components/UserLayout';
import UserHeader from '../components/Header/UserHeader';
import UserMainContent from '../components/Main/UserMainContent';
import { Container } from '@material-ui/core';
export default function Home() {
  return (
    <div className="container-fluid">
      <Head>
        <title>iBarber - App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserLayout>
        <div style={{background:'#f0f2f5'}}><UserMainContent/></div>
      </UserLayout>
    </div>
  )
}
