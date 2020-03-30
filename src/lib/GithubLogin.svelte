<script>
  import { createEventDispatcher } from "svelte";

  export let clientId;
  export let scope;
  export let redirectUri;
  export let state;
  export let allowSignup;
  export let login;

  const dispatch = createEventDispatcher();
  const urlGithub = "https://github.com/login/oauth/authorize";
  let interval = 0;
  let popupWindow;

  const convertQueryParams = url => {
    const query = url.substr(1);
    const result = {};

    query.split("&").forEach(param => {
      const item = param.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });

    return result;
  };

  const close = () => {
    if (interval) {
      window.clearInterval(interval);
      interval = null;
    }

    popupWindow.close();
  };

  // ReactGithubLogin based
  const poll = () => {
    interval = window.setInterval(() => {
      try {
        if (!popupWindow || popupWindow.closed !== false) {
          close();
          dispatch("error", new Error("The popup was closed"));
          return;
        }

        if (
          popupWindow.location.href === urlGithub ||
          popupWindow.location.pathname === "blank"
        ) {
          return;
        }

        dispatch("success", convertQueryParams(popupWindow.location.search));
        close();
      } catch (error) {
        // error
      }
    }, 500);
  };

  const useParam = (name, variable) => {
    if (variable) {
      return `&${name}=${variable}`;
    }

    return "";
  };

  const onLogin = () => {
    let urlParams = `client_id=${clientId}`;

    urlParams += useParam("scope", scope);
    urlParams += useParam("redirect_uri", redirectUri);
    urlParams += useParam("allow_signup", allowSignup);
    urlParams += useParam("state", state);
    urlParams += useParam("login", login);

    popupWindow = window.open(`${urlGithub}?${urlParams}`, "github-oauth", "");

    dispatch("request");

    poll();
  };
</script>

<slot {onLogin} />
