import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), '/JSON/featuredGigs.json');

  const file_data = await fs.readFile(jsonDirectory)
  const json_data = JSON.parse(file_data)
  res.status(200).json(json_data)
}