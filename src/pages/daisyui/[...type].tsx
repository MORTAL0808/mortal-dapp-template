import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import cheerio from 'cheerio';
import Link from 'next/link';

const Daisyui = ({data}) => {

  const links = ['button', 'dropdown', 'modal', 'swap', 'alert', 'avatar', 'badge', 'card', 'carousel', 'collapse', 'countdown', 'kbd', 'progress', 'radial progress', 'stat', 'table', 'tooltip', 'checkbox', 'file input', 'radio', 'range', 'rating', 'select', 'text input', 'textarea', 'toggle', 'artboard', 'button group', 'divider', 'drawer', 'footer', 'hero', 'indicator', 'input group', 'mask', 'stack', 'toast', 'breadcrumbs', 'bottom navigation', 'link', 'menu', 'navbar', 'pagination', 'steps', 'tab', 'code', 'phone', 'window']

  return (
    <div className="h-full flex flex-col md:flex-row flex-1">
      <aside className="w-full h-[100%] md:w-60 border-r border-gray-500 overflow-auto">
        <ul className="menu p-2 rounded-box">
          <li className="menu-title">
            <span>Daisyui</span>
          </li>
          {
            links.map(item => {
                return <li key={item}>
                <Link href={`/daisyui/${item}`}>
                  {item.charAt(0).toUpperCase()+ item.slice(1)}
                </Link>
              </li>
            })
          }
        </ul>
      </aside>
      <main className="daisyui-main p-4 h-full flex-1 overflow-auto">
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { req, query } = context
  const res = await fetch(`http://${req.headers.host}/api/daisyui?type=${query.type?.[0]}`);
  const data = await res.json()

  return { props: { data } }
}

export default Daisyui;
