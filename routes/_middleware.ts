import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 385,
  site: "marcoteste",
  domains: ["marcoteste.deco.site"],
});