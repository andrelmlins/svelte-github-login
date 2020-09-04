import { render } from "@testing-library/svelte";

import GithubLogin from "./GithubLogin.svelte";

describe("GithubLogin Component", () => {
  test("shows proper heading when rendered", () => {
    const { container } = render(GithubLogin);

    expect(container.firstChild).not.toBe(null);
  });
});
