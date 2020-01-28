import Link from "next/link";
const navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/info">
            <a>Info</a>
          </Link>
        </li>
      </ul>

      <style jsx>
        {`
          ul {
            background: #333;
            color: #fff;
            list-style: none;
            display: flex;
          }

          ul li {
            font-size: 18px;
            margin-right: 20px;
          }
          a {
            text-decoration: none;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default navbar;
