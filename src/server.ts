import * as fs from 'fs'
import { openFile } from './openFile';

function writeFile(path: string) {
  using file = openFile(path);

  if (path.includes('temp')) {
    return
  }
  fs.writeFileSync(file.handle, "Permanent \n");
}

writeFile("a.txt");
writeFile("temp.txt");