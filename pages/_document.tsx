import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Basic Metadata */}
        <title>Joshua Adegbite - Full Stack Software Engineer</title>
        <meta
          name="description"
          content="Passionate Full Stack Software Engineer with over 2 years of experience building scalable web applications using React, Angular, Laravel, Node.js, and more. Currently pursuing a B.Tech. in Computer Science with a 4.59/5 CGPA."
        />
        <meta name="author" content="Joshua Adegbite" />

        {/* Open Graph Metadata */}
        <meta property="og:title" content="Joshua Adegbite - Full Stack Software Engineer" />
        <meta
          property="og:description"
          content="Explore the portfolio and professional journey of Joshua Adegbite, a skilled Full Stack Software Engineer with expertise in modern web and mobile development."
        />
        <meta property="og:url" content="https://adegbitejoshua.com.ng" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://adegbitejoshua.com.ng/image.png" />

        {/* Twitter Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Joshua Adegbite - Full Stack Software Engineer" />
        <meta
          name="twitter:description"
          content="Passionate Full Stack Software Engineer with expertise in React, Angular, Laravel, and more."
        />
        <meta name="twitter:image" content="https://adegbitejoshua.com.ng/image.png" />

        {/* Contact and Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://adegbitejoshua.com.ng" />
        <link rel="profile" href="https://github.com/Adegbite-Joshua" />
        <link rel="profile" href="https://www.linkedin.com/in/adegbite-joshua-8a45a6257" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
