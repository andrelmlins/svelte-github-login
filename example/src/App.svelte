<script>
  import SvelteGithubLogin from "svelte-github-login";

  let clientId = "";
  let status = "";
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

  p {
    color: white;
    margin: 10px 0px;
  }

  input {
    width: auto;
    flex: 1;
    margin-right: 15px;
  }

  .input-form {
    width: 450px;
    max-width: 100%;
    padding: 20px;
    display: inline-flex;
    box-sizing: border-box;
    margin-top: 40px;
  }

  .success {
    color: #1b5e20;
  }

  .failure {
    color: #b71c1c;
  }

  .waiting {
    color: #ffd600;
  }
</style>

<main>
  <h1>Svelte Github Login</h1>
  <h4>Github Login Component to Svelte</h4>
  <div class="input-form">
    <input
      id="clientId"
      type="text"
      value={clientId}
      placeholder="Client ID for GitHub OAuth application "
      on:change={e => (clientId = e.target.value)} />
    <SvelteGithubLogin
      {clientId}
      redirectUri="http://localhost:5000/"
      on:success={params => (status = 'Success')}
      on:error={error => (status = 'Failure')}
      on:request={() => (status = 'Waiting')}
      let:onLogin>
      <button on:click={onLogin}>Github Login</button>
    </SvelteGithubLogin>
  </div>
  {#if status}
    <p>
      Status:
      <span class={status.toLowerCase()}>{status}</span>
    </p>
  {/if}
  {status}
</main>
