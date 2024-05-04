import { openFile } from './openFile';

function main() {
  using a = openFile("a.txt");
  using b = openFile("b.txt");
  {
    using c = openFile("c.txt");
    using d = openFile("d.txt");
  }
  using e = openFile("e.txt");
}

main()