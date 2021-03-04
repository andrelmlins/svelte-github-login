<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let clientId: string;
  export let scope: string | undefined = undefined;
  export let redirectUri: string | undefined = undefined;
  export let state: string | undefined = undefined;
  export let allowSignup: string | undefined = undefined;
  export let login: string | undefined = undefined;

  const dispatch = createEventDispatcher<{
    success: Record<string, any>;
    error: Error;
    request: never;
  }>();

  const urlGithub = "https://github.com/login/oauth/authorize";
  let interval: number | null = 0;
  let popupWindow: Window | null;

  const convertQueryParams = (url: string): Record<string, any> => {
    const query = url.substr(1);
    const result: Record<string, any> = {};

    query.split("&").forEach((param) => {
      const item = param.split("=");
      result[item[0]] = decodeURIComponent(item[1]);
    });

    return result;
  };

  const close = (): void => {
    if (interval) {
      window.clearInterval(interval);
      interval = null;
    }

    if (popupWindow) {
      popupWindow.close();
    }
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

  const useParam = (name: string, variable?: string) => {
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
