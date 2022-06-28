import axios from 'axios';
import fs from 'fs';
import path from 'path';

export default async (href) => {
    const currentDir = path.resolve('.');
    const link = href.replace(/^https?\:\/\//i, "").replace(/[^a-zA-Z0-9]/gi, '-');
    const page = await axios.get(href).then((res) => res.data);
    const documentPath = `${currentDir}\\${link}.html`
    console.log(documentPath);
    fs.writeFileSync(documentPath, page, 'utf-8');
}