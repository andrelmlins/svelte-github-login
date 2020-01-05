# Svelte Github Login

[![npm version](https://badge.fury.io/js/svelte-github-login.svg)](https://www.npmjs.com/package/svelte-github-login) &bull; [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/andrelmlins/svelte-github-login/blob/master/LICENSE) &bull; [![Build Status](https://travis-ci.com/andrelmlins/svelte-github-login.svg?branch=master)](https://travis-ci.com/andrelmlins/svelte-github-login) &bull; [![Dependencies](https://david-dm.org/andrelmlins/svelte-github-login.svg)](https://david-dm.org/andrelmlins/svelte-github-login) &bull; [![Netlify Status](https://api.netlify.com/api/v1/badges/bba67805-d9ab-4609-9027-a86842c5b6bb/deploy-status)](https://app.netlify.com/sites/xenodochial-saha-aa83fd/deploys) &bull; [![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/andrelmlins/svelte-github-login.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/andrelmlins/svelte-github-login/context:javascript)

Github Login Component to Svelte

## Installation

```
npm i svelte-github-login
// OR
yarn add svelte-github-login
```

## Demo [Link](https://svelte-github-login.netlify.com/)

Local demo:

```
git clone https://github.com/andrelmlins/svelte-github-login.git
cd svelte-github-login/example
yarn install && yarn start
```

## Examples

```js
<script>
  import SvelteGithubLogin from "svelte-github-login";
</script>

<SvelteGithubLogin
  clientId="XXX"
  scope="user:email"
  redirectUri="http://localhost:5000/"
  on:success={params => console.log(params)}
  on:error={error => console.log(error)}
  let:onLogin
>
  <button on:click={onLogin}>Github Login</button>
</SvelteGithubLogin>
```

## Properties

Raw component props (before transform):

| Prop        | Type   | Description                                          |
| ----------- | ------ | ---------------------------------------------------- |
| clientId    | string | Client ID for GitHub OAuth application               |
| scope       | string | Scope for GitHub OAuth application                   |
| redirectUri | string | Registered redirect URI for GitHub OAuth application |
| success     | string | Call with success                                    |
| error       | string | Call with error                                      |
| request     | string | Call with offset                                     |

## Slot Properties

| Prop    | Type | Description    |
| ------- | ---- | -------------- |
| onLogin | func | Call for login |

## NPM Statistics

Download stats for this NPM package

[![NPM](https://nodei.co/npm/svelte-github-login.png)](https://nodei.co/npm/svelte-github-login/)

## License

Svelte Github Login is open source software [licensed as MIT](https://github.com/andrelmlins/svelte-github-login/blob/master/LICENSE).
