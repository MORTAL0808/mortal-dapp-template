import axios from 'axios';
import cheerio from 'cheerio';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    console.log('req', req.query)
    const { data } = await axios.get(`https://daisyui.com/components/${req.query.type}/`);
    const $ = cheerio.load(data);
    const content = $('.prose').html();
    res.status(200).json({ content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
