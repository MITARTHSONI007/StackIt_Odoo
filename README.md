 
  <h1>StackIt with REACT.JS</h1>
  
  <p>
StackIt with REACTJS (Next.js, Firebase v9, Chakra UI, TypeScript, Recoil, (Image Uploading, Google Authentication, Create Community, Join Community, Leave Community, Upvote and Downvote Posts), Dark Mode & Light Mode, Data Encryption and Decryption)
  </p>
  

<!-- Table of Contents -->

## :notebook_with_decorative_cover: Table of Contents

- [About the Project](#star2-about-the-project)
  - [Screenshots](#camera-screenshots)
  - [Tech Stack](#space_invader-tech-stack)
  - [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  - [Prerequisites](#bangbang-prerequisites)
  - [Installation](#gear-installation)
  - [Run Locally](#running-run-locally)
  - [Deployment](#triangular_flag_on_post-deployment)
- [Contact](#handshake-contact)

<!-- About the Project -->

## :star2: About the Project

<!-- Screenshots -->
<img width="682" height="755" alt="image" src="https://github.com/user-attachments/assets/19bdcdc5-b147-40b9-bafd-d77b4b7663e9" />

<img width="1886" height="873" alt="image" src="https://github.com/user-attachments/assets/532e5da7-30f4-4950-bd88-9e8dc63040e9" />
  
<br />

## :toolbox: Getting Started

### :bangbang: Prerequisites

- Sign up for a Firebase account <a href='https://firebase.google.com'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>

<!-- Env Variables -->

### :key: Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_FIREBASE_API_KEY`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SET`

`NEXT_PUBLIC_FIREBASE_APP_ID`

`NEXT_PUBLIC_BASE_URL`

`NEXT_PUBLIC_CRYPTO_SECRET_PASS`

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### :gear: Installation

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![](https://img.shields.io/badge/next.js-20232A?style=for-the-badge&logo=next.js&logoColor=61DAFB)

Install my-project with npm

```
npx create-next-app@latest --ts my-project
```

```
cd my-project
```

Install dependencies

### In your Next.js project, install Chakra UI

![](https://img.shields.io/badge/UI-Chakra%20UI-green)

#### Installation

In your Next.js project, install Chakra UI by running either of the following:

```
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
or
yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6
```

Provider Setup
After installing Chakra UI, you need to set up the `ChakraProvider` at the root of your application.

Go to `pages/_app.js` or `pages/_app.tsx` (create it if it doesn't exist) and wrap the `Component` with the `ChakraProvider`:

```tsx
// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
```

<a href="https://chakra-ui.com/getting-started/nextjs-guide" target="_blank">🔷 Customizing theme & More</a>

Install dependencies

<a href="https://github.com/SashenJayathilaka/Reddit-Clone/blob/master/package.json" target="_blank">🔶 Dependency Info</a>

<!-- Run Locally -->

### :running: Run Locally

![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)

Clone the project

```bash
  git clone https://github.com/MITARTHSONI007/StackIt.git
```

change directory

```bash
  cd Reddit-Clone
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

<hr />

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

<hr />

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

