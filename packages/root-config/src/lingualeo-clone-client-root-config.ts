import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

import microFrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microFrontendLayout);
const applications = constructApplications({
  routes,
  async loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

const someThing = async (promise: Promise<any>) => {
  return promise;

  const a = 1;
  const f = 1;
};

applications.forEach(registerApplication);
layoutEngine.activate();
start();
