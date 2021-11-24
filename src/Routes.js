import About from "./components/About";
import Build from "./components/Build";
import Community from "./components/Community";
import Roadmap from "./components/Roadmap";

const Routes = [
  {
    path: "/",
    sidebarName: "About",
    component: About,
  },
  {
    path: "/build",
    sidebarName: "Build",
    component: Build,
  },
  {
    path: "/roadmap",
    sidebarName: "Roadmap",
    component: Roadmap,
  },
  {
    path: "/community",
    sidebarName: "Community",
    component: Community,
  },
];

export default Routes;
