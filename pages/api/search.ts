import { search } from './cloudinary';

export default async function handler(req: any, res: any) {
  const params = JSON.parse(req.body);

  const results = await search(params);

  res.status(200).json({ ...results });
}