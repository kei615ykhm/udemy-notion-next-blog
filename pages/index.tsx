import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout'; // パスと大文字小文字を修正

const Home: NextPage = () => {
  return (
    <Layout>
      {/* ここにメインコンテンツを追加 */}
      <h1>Welcome to my sample site!</h1>
    </Layout>
  );
};

export default Home;
