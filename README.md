# Svelte Github Login

[![npm version](https://badge.fury.io/js/svelte-github-login.svg)](https://www.npmjs.com/package/svelte-github-login) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-github-login/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-github-login.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-github-login) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/bba67805-d9ab-4609-9027-a86842c5b6bb/deploy-status)](https://app.netlify.com/sites/xenodochial-saha-aa83fd/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-github-login.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-github-login/context:javascript)

Github Login Component to Svelte

## Installation

```
npm i svelte-github-login
// OR
yarn add svelte-github-login
```

<em>Note: to use this library in sapper, install as devDependency. See the [link](https://github.com/sveltejs/sapper-template#using-external-components).</em>

## Demo [Link](https://svelte-github-login.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-github-login.git
cd svelte-github-login
npm install && npm run dev
```

## Examples

An example of how to use the library:

```js
<script>
  import GithubLogin from "svelte-github-login";
</script>

<GithubLogin
  clientId="XXX"
  scope="user:email"
  redirectUri="http://localhost:5000/"
  on:success={params => console.log(params)}
  on:error={error => console.log(error)}
  let:onLogin
>
  <button on:click={onLogin}>Github Login</button>
</GithubLogin>
```

## Properties

Raw component props (before transform):

| Prop        | Type   | Description                                                                 |
| ----------- | ------ | --------------------------------------------------------------------------- |
| clientId    | string | Client ID for GitHub OAuth application                                      |
| scope       | string | A space-delimited list of permissions that the application requires         |
| redirectUri | string | Registered redirect URI for GitHub OAuth application                        |
| state       | string | Value created by the maintenance state between the request and the callback |
| allowSignup | string | Option of unauthenticated users to register                                 |
| login       | string | Suggests a specific account to use for signing in and authorizing the app.  |

## Events

| Prop    | Type | Description       |
| ------- | ---- | ----------------- |
| success | func | Call with success |
| error   | func | Call with error   |
| request | func | Call with offset  |

## Slot Properties

| Prop    | Type | Description    |
| ------- | ---- | -------------- |
| onLogin | func | Call for login |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-github-login.png)](https://nodei.co/npm/svelte-github-login/)

## License

Svelte Github Login is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-github-login/blob/master/LICENSE).
