<script>
  import { createEventDispatcher } from "svelte";

  export let clientId;
  export let scope;
  export let redirectUri;

  const dispatch = createEventDispatcher();
  const urlGithub = "https://github.com/login/oauth/authorize";
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

  // ReactGithubLogin based
  const poll = () => {
    window.setInterval(() => {
      try {
        if (!popupWindow || popupWindow.closed !== false) {
          popupWindow.close();
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
        popupWindow.close();
      } catch (error) {
        dispatch("error", error);
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
