import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "local",
  specs: ["./test/e2e/**/*.e2e.ts"],
  maxInstances: 1,
  capabilities: [{ browserName: "chrome", "goog:chromeOptions": { args: ["--headless=new", "--no-sandbox", "--disable-dev-shm-usage"] } }],
  logLevel: "warn",
  framework: "mocha",
  reporters: ["spec"],
  mochaOpts: { ui: "bdd", timeout: 60_000 },
  baseUrl: "http://127.0.0.1:4173",
  services: ["chromedriver"],
};
