import Search from '@components/Search';
import Table from '@containers/Table';
import { useAuth } from '@hooks/useAuth';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  return (
    <>
      <Head>
        <title>Data Warehouse</title>
      </Head>
      <Search />
      <Table />
    </>
  );
}