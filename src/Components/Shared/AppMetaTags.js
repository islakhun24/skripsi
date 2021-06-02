import React from "react";
import { Helmet } from "react-helmet";

const AppMetaTags = () => {
  return (
    <Helmet>
      <title>Vico UMP | Video Conference UMP!</title>
      <meta name="title" content="Vico UMP | Video Conference UMP!" />
      <meta name="description" content="" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.ump.ac.id/" />
      <meta property="og:title" content="VVico UMP | Video Conference UMP!" />
      <meta property="og:description" content="" />
      <meta property="og:image" content="/DefaultEventBanner.svg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.ump.ac.id/" />
      <meta
        property="twitter:title"
        content="Vico UMP | Video Conference UMP!"
      />
      <meta property="twitter:description" content="" />
      <meta property="twitter:image" content="/DefaultEventBanner.svg" />
    </Helmet>
  );
};

export default AppMetaTags;
