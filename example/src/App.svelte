<script>
  import SvelteGithubLogin from "svelte-github-login";
</script>

<style>
  main {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  h1 {
    color: white;
    text-shadow: 1px 1px 2px black;
    margin: 0;
  }

  h4 {
    color: white;
    margin: 10px 0px;
  }
</style>

<main>
  <h1>Svelte Github Login</h1>
  <h4>Github Login Component to Svelte</h4>
  <ul>
    <SvelteGithubLogin
      clientId="XXX"
      redirectUri="http://localhost:5000/"
      on:success={params => console.log(params)}
      on:error={error => console.log(error)}
      let:onLogin>
      <button on:click={onLogin}>Github Login</button>
    </SvelteGithubLogin>
  </ul>
</main>
