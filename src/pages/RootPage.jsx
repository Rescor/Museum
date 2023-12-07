import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigation";
import Background from "../components/Backgroung/Background";

export default function RootPage() {
  return <>
    <Background />
    <Navigation />
    <Outlet />
  </>
}
