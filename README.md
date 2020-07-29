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

## Strapi (Backend)

Admin -> http://localhost:1337/admin

`yarn develop`

## NextJS/Tina (Frontend)

Client -> http://localhost:3000

`yarn dev`

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
