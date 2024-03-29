Really cool little "not-a-cms" tool. In a nutshell it's an admin layer built in React that you can use with a JAM client to create a drag/drop user experience which saves to a backend, I've gone fully OS here and used Strapi. Bit fiddly to put together but an interesting concept and I'm watching the project closely. It's still pre version 1 and has lots of snags to be worked out, but this has huge potential to make a great small website or blogging platform for a user or client.


<p align="center">
  <a href="https://tinacms.org">
    <img style="padding-right: 16px;"  src="./static/tina.svg" width="50" height="36">
  </a>
  <a href="https://nextjs.org/">
    <img style="padding-right: 30px;" src="./static/nextjs.svg" width="60" height="32">
  </a>
    <a href="https://strapi.io/">
    <img src="./static/strapi.svg" width="90" height="32">
  </a>
</p>

# Tina & NextJS & Strapi CMS

-   🟩 Node 12.18.1

-   ✈️ Tailwind CSS (With PostCSS)

-   Based off of this (I think) [NextJS + Strapi CMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-strapi)

-   IS NOT USIN BABEL RN [Next Babel Docs](https://nextjs.org/docs/advanced-features/customizing-babel-config) but it's there just need to add .babelrc

> 🤚 Make sure you run `yarn upgrade` on the backend and frontend before you start work so that dependencies are up-to-date and we are working with the latest Strapi, Tina and Next (Tina is iterating quite fast)

## Strapi (Backend)

Admin -> http://localhost:1337/dashboard

`yarn develop`

## NextJS/Tina (Frontend)

Client -> http://localhost:3000

`yarn dev`

> If you want to run both from root directory you can do with `yarn start-client` and `yarn start-cms`, but they need their own terminal instances

## CMS Setup

-   Create a .env file with the `STRAPI_URL=someurl.com?=orLocalhost:port` and put this in the Frontend directory
-   You need public permissions set so that Strapi can be queried by the client. Head to Roles & Permissions and check `count`, `find` and `findone` for all the the content types.
-   To be able to access preview/edit mode you need to be logged in, so create a user from the CMS and use those credentials.
-   Create an authorised user in order to log in and edit, you'll need all permissions for content-types and all permissions for Uploads (or you won't be able to upload images to the media library)

Note: The DB is SQLlite and local so not in the repo, you'll need to add some dummy content to view.

## To Edit

Visit http://localhost:3000/api/preview to enable edit mode.

### Imports Organisation

```javascript
/*--------------------------------------------------------------
## React & Next
--------------------------------------------------------------*/
import React, { memo } from 'react'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'

/*--------------------------------------------------------------
## Strapi
--------------------------------------------------------------*/
import {
    StrapiMediaStore,
    StrapiProvider,
    StrapiClient
} from 'react-tinacms-strapi'

/*--------------------------------------------------------------
## Tina Specific, Forms, Field Plugins, Custom Hooks(useHook)
--------------------------------------------------------------*/
import { useCMS } from 'tinacms'
import { HtmlFieldPlugin, MarkdownFieldPlugin } from 'react-tinacms-editor'
import PostForm from '../forms/PostForm'

/*--------------------------------------------------------------
## Components / Other
--------------------------------------------------------------*/
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'

import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml'

/*--------------------------------------------------------------
## Styling (if not using Tailwind)
--------------------------------------------------------------*/
import { css } from '@emotion/core'
import { GlobalStyles } from './GlobalStyles'
```
