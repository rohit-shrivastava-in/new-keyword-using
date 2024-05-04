import fs from 'fs';
// @ts-ignore
Symbol.dispose ??= Symbol("Symbol.dispose");
// @ts-ignore
Symbol.asyncDispose ??= Symbol("Symbol.asyncDispose")
export function openFile(path: string) {
  const file = fs.openSync(`files/${path}`, "w+");

  return {
    handle: file,
    [Symbol.dispose]() {
      console.log("Dispose");
      fs.closeSync(file);
    }
  }
}