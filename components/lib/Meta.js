import Head from "next/head";

/**
 * Meta Content for HTML Head
 * @param {*} props 
 */

export default function Meta(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>
        {props.siteTitle}
      </title>
      <meta name="Description" content={props.description} />
      {/* <link
        href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,500,700&display=swap"
        rel="stylesheet"
      /> */}
      {/* <link rel="stylesheet" href="/css/normalize.css" />
      <link rel="stylesheet" href="/css/skeleton.css" />
      <link rel="stylesheet" href="/css/style.css" />
      <link rel="stylesheet" href="/css/header.css" />
      <link rel="stylesheet" href="/css/content.css" /> */}
    </Head>
  );
}
