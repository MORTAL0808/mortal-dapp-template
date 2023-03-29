import { ConnectButton } from '@rainbow-me/rainbowkit';
import type { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/react';
import { getToken } from 'next-auth/jwt';

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const token = await getToken({ req: context.req });

  const address = token?.sub ?? null;

  return {
    props: {
      address,
      session
    }
  };
};

const Home: NextPage = () => {
  return (
    <div className="flex justify-center mt-[30vh]">
      <label className="swap swap-flip text-9xl">
        <input type="checkbox" />
        <div className="swap-on">😈</div>
        <div className="swap-off">😇</div>
      </label>
    </div>
  );
};

export default Home;
