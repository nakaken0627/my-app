import Link from "next/link";
import { navLists } from "./data/nav";

export default function Home() {
  return (
    <ul>
      {navLists.map((item) => {
        return (
          <li key={item}>
            <Link href={`/${item}`}>{item}</Link>
          </li>
        );
      })}
    </ul>
  );
}
