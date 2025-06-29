import {createBrowserRouter} from "react-router";
import Root from "../Root/Root";

import Home from "../Component/Home/Home";
import ProjectDetails from "../Component/ProjectDetails/ProjectDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            path:'/',
            Component:Home
        },
        {
            path:"/projects/:slug",
            Component:ProjectDetails
        }
      
    ]
  },
]);
