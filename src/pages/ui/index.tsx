import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import cheerio from 'cheerio';
import Link from 'next/link';
import { children } from 'cheerio/lib/api/traversing';

const MortalUI = ({children}) => {

  const links = ['input', 'modal']

  return (
    <div className="h-full flex flex-col md:flex-row flex-1">
      <aside className="w-full h-[100%] md:w-60 border-r border-gray-500 overflow-auto">
        <ul className="menu p-2 rounded-box">
          <li className="menu-title">
            <span>MortalUI</span>
          </li>
          {
            links.map(item => {
                return <li key={item}>
                <Link href={`/#${item}`}>
                  {item.charAt(0).toUpperCase()+ item.slice(1)}
                </Link>
              </li>
            })
          }
        </ul>
      </aside>
      <main className="daisyui-main p-4 h-full flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
};


export default MortalUI;
