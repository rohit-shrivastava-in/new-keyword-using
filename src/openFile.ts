import fs from 'fs';
// @ts-ignore
Symbol.dispose ??= Symbol("Symbol.dispose");
// @ts-ignore
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose")
export function openFile(path: string) {
  const file = fs.openSync(`files/${path}`, "w+");
  console.log("+ ", path)

  return {
    handle: file,
    [Symbol.dispose]() {
      console.log("- ", path);
      fs.closeSync(file);
    }
  }
}