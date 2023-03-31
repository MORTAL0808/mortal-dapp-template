import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Daisyui = ({data}) => {

  const links = ['button'];

  return (
    <div className="flex flex-col md:flex-row flex-1">
      <aside className="w-full h-[100%] md:w-60 border-r">
        <ul className="menu p-2 rounded-box">
          <li className="menu-title">
            <span>Daisyui</span>
          </li>
          {
            links.map(item => {
                return <li key={item}>
                <a href={`/ui/${item}`}>{item.toUpperCase()}</a>
              </li>
            })
          }
        </ul>
      </aside>
      <main className="flex-1">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { req, query } = context
  const res = await fetch(`http://${req.headers.host}/api/default?type=${query.type?.[0]}`);
  const data = await res.json()

  return { props: { data } }
}

export default Daisyui;
