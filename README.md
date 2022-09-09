# Video-Go: frontend

## 👋 Description

Hi there! This is the frontend-application of [my](https://github.com/RomanLA-tech)
pet-fullstack [project:](https://video-go-front.vercel.app/) (<em>if throw 504 error, just reload the page, it's a
Vercel deploying-server problem</em> )

* Based on [Next.js](https://nextjs.org/).
* State manager: [Redux Toolkit](https://redux-toolkit.js.org/),
* Deployed on: [Vercel](https://vercel.com/romanla-tech/video-go-front)
* Styles: [Tailwind CSS](https://tailwindcss.com/docs/using-with-preprocessors)

### ✌ Design source:

* [Dribbble](https://dribbble.com/shots/14958858--Exploration-Skateboard-Video-Platform)

### 😼 App link

* [Vercel-app](https://video-go-front.vercel.app/)
  (<em>if throw 504 error, just reload the page, it's a Vercel deploying-server problem</em> )
* ❕ <em>No mobile adaptive version yet</em> 😣

## Screenshots

<p align="center">
  <a href="https://video-go-front.vercel.app/" target="blank"><img src="https://aws-video-go-public-01.s3.eu-west-2.amazonaws.com/uploads/preview2.webp"  alt="Nest Logo" /></a>
</p>
<i>Main page</i>
<p align="center">
  <a href="https://video-go-front.vercel.app/" target="blank"><img src="https://aws-video-go-public-01.s3.eu-west-2.amazonaws.com/uploads/preview1.webp"  alt="Nest Logo" /></a>
</p>
<i>Video player page</i>

## Additional Packages Used:

@headlessui/react, @reduxjs/toolkit, axios, classnames, dayjs, lodash, nextjs-progressbar,
react-hook-form,</br> react-icons,react-loading-skeleton, react-query, react-redux, react-redux-toastr,
reduxjs-toolkit-persist, sass.

### 💻 Required .env variables

-------------------------------
<ul>
<li>APP_URL = <i>string</i></li>
<li>API_APP_URL = <i>string</i> (server-app URL for rewrites in next.config.js)</li>
<li>AWS_S3_BUCKET_URL = <i>string</i> (for rewrites in next.config.js)</li>
<li>AWS_S3_BUCKET_DOMAIN = <i>string</i> (for images domains in next.config.js)</li>
</ul>

-------------------------------

## Run local instance of app

First install all project dependencies:

```bash
yarn install
```

after that, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<p align="right">Created by <a href='https://github.com/RomanLA-tech'>RomanLA</a></p>

