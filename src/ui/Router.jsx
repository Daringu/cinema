import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ProtectedComponent from "../components/functionalComponents/ProtectedComponent";
import UnknownPathError from "../components/functionalComponents/Errors/UnknownPathError.jsx";
import WelcomeChoosePage from "../pages/WelcomeChoosePage/WelcomeChoosePage.jsx";
import WelcomePage from "../layouts/WelcomePage/WelcomePage.jsx";
import FormLogin from "../components/FormLogin/FormLogin.jsx";
import RightSideContent from "../pages/RightSide/RightSideContent.jsx";

const routes = [
  {
    path: '*',
    element: <UnknownPathError/>
  },
  {
    path: "/",
    element: (
      <ProtectedComponent>
        <App />
      </ProtectedComponent>
    ),
    children: [
      {
        path: "/:type?",
        element: <RightSideContent />
      },
    ]
  },
  {
    path:'welcome',
    element:<WelcomePage/>,
    children: [
      {
        element: <WelcomeChoosePage/>,
        index:true
      },
      {
        element:<FormLogin isLoginForm={false}/>,
        path:'ver/:type?'
      }
    ]
  }
];
export const routing = createBrowserRouter(routes);
