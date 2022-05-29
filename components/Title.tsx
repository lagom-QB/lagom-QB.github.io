import React from "react";
import Head from "next/Head";

// Custom title bar
function Title() {
  return (
    <Head>
      <title>Quinsy Brenda</title>
      <meta property="og:title" content="" key="title" />
      <link
        rel="icon"
        type="image/png"
        href="https://cdn-icons-png.flaticon.com/256/6486/6486322.png"
      ></link>
    </Head>
  );
}

export default Title;