import Head from "next/head";
import Menu from "./Menu";

export default function Header(props) {
  return (
    <div {...props}>
      <Head>
        <link rel="shortcut icon" href="/smile.png" />
        <title>Bárbara Carvalho Araújo</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="sm:mx-10 md:mx-10 lg:mx-52 py-4">
        <Menu />
      </div>
    </div>
  );
}
