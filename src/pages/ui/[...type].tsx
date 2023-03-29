import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

const Ui = () => {
  const router = useRouter();
  const [content, setContent] = useState('');

  const links = [
    { name: 'Button', key: 'button' },
    { name: 'Button', key: 'button' },
    { name: 'Button', key: 'button' },
    { name: 'Button', key: 'button' },
  ];

  console.log(router.query.type);

  useEffect(() => {
    if (router.query.type) {
      const fetchData = async () => {
        const result = await axios(`/api/default?type=${router.query.type?.[0]}`);
        setContent(result.data.content);
      };
      fetchData();
    }
  }, [router.query.type]);

  return (
    <div className="flex flex-col md:flex-row flex-1">
      <aside className="w-full md:w-60">
        <ul className="menu p-2 rounded-box">
          <li className="menu-title">
            <span>Default</span>
          </li>
          {
            links.map(item => {
                return <li key={item.key}>
                <a href={`/ui/${item.key}`}>{item.name}</a>
              </li>
            })
          }
        </ul>
      </aside>
      <main className="flex-1">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </main>
    </div>
  );
};

export default Ui;
