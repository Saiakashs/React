import { createBrowserRouter } from "react-router-dom";
import VirtualDOMComp from "../components/VirtualDOMComp";
import MyImagesComp from "../components/MyImagesComp";
import EventComp from "../components/EventComp";
import CssComp from "../components/CssComp";
import MyStateComp from "../components/MyStateComp";
import MyPureComp from "../components/MyPureComp";
import PageNotFoundComp from "../layout/PageNotFoundComp";
import ReactHooksComp from "../Hooks/ReactHooksComp";
import UseStateHooksComp from "../Hooks/UseStatehooksComp";
import UseEffectHooksComp from "../Hooks/UseEffectHooksComp";
import MainDashboardComp from "../layout/MainDashboardComp";
import LoginComp from "../layout/LoginComp";
import MyFavColorComp from "../components/MyFavColorComp";
import FormValComp from "../components/FormValComp";
import ProductDashComp from "../CRUD/ProductDashComp";
import ProductAddComp from "../CRUD/ProductAddComp";
import ProductEditComp from "../CRUD/ProductEditComp";
import ProtectedRouting from "./ProtectedRouting";
import MyCarouselComp from "../components/MyCarouselComp";
import DataListComp from "../reduxCode/DataListComp";
import DataAddComp from "../reduxCode/DataAddComp";
import DataDeleteComp from "../reduxCode/DataDeleteComp";


const routing = createBrowserRouter([

    {path:"",element:<LoginComp/>},
    {path:"login",element:<LoginComp/>},

    {path:"mainDashboard",element:<ProtectedRouting Component={MainDashboardComp}/>, children:[

            {path:"productdash",element:<ProductDashComp/>},
            {path:"productadd",element:<ProductAddComp/>},
            {path:"datalist",element:<DataListComp/>},
            {path:"datadelete",element:<DataDeleteComp/>},
       
        {path:"productedit/:id",element:<ProductEditComp/>},
        {path:"formval",element:<FormValComp/>},
        {path:"mycarouselcomp",element:<MyCarouselComp></MyCarouselComp>},

        {path:"myfavcolor",element:<MyFavColorComp newColor="Green"/>},
        //default routing

        {path:"",element:<MyStateComp></MyStateComp>},
        {path:"state",element:<MyStateComp></MyStateComp>},

        //naming routing

        {path:"virtualdom",element:<VirtualDOMComp></VirtualDOMComp>},

        //parameterized routing

        {path:"images/id",element:<MyImagesComp></MyImagesComp>},
        {path:"event",element:<EventComp />},
        {path:"mycss",element:<CssComp />},

        //child routing

        {path:"hooks",element:<ReactHooksComp/>,children:[
            {path:"statehooks",element:<UseStateHooksComp/>},
            {path:"effecthooks",element:<UseEffectHooksComp/>},
        ]},
   

    ]},

    
    //wild-card routing

    {path:"*",element:<PageNotFoundComp />}
]);

export default routing;