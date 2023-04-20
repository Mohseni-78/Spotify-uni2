import Head from "next/head";
// Imported Components ==========>
import Dashboard from "@/components/Dashboard";
// Imported Types ==========>
import { getSession } from "next-auth/react";

export default function Home({ user }) {
  return (
    <>
      <Head>
        <title>Spotify - Dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Dashboard user={user} />
    </>
  );
}

export const getServerSideProps = async ({ req }) => {
  const session = await getSession({ req });

  return {
    props: {
      user: session?.user || "",
    },
  };
};
