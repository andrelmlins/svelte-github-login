<script>
  import { createEventDispatcher } from "svelte";

  export let clientId;
  export let scope;
  export let redirectUri;

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

    dispatch("request");

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
        dispatch("error", error);
        close();
      }
    }, 500);
  };

  const onLogin = () => {
    const urlParams = `client_id=${clientId}&scope=${scope}&redirectUri=${redirectUri}`;
    popupWindow = window.open(`${urlGithub}?${urlParams}`, "github-oauth", "");

    poll();
  };
</script>

<slot {onLogin} />
