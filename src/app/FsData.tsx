import { promises as fs } from 'fs';

export async function FsData() {
  const file = await fs.readFile(process.cwd() + '/data/data2.json', 'utf8');
  const files = await fs.readdir(process.cwd() + '/data/packageVersionReports');
  const data = JSON.parse(file);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
      <pre>{files}</pre>
    </div>
  );
}