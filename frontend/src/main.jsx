import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Nosotros from "./componets/nosotros/Nosotros.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import { themeCustom } from "./assets/theme/themeCustom.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Consulta } from "./componets/consulta/Consulta.jsx";
import { Login } from "./componets/admin/Login.jsx";
import { Admin2 } from "./componets/admin/Admin2.jsx";
import { Admin1 } from "./componets/admin/Admin1.jsx";
import { Interes } from "./componets/sitioInteres/Interes.jsx";
import { Global, css } from "@emotion/react";
import { Bienvenida } from "./componets/admin/Bienvenida.jsx";

import { Service } from "./componets/service/Service.jsx";
import { Reservaciones } from "./componets/admin/Reservaciones.jsx";

import { UsuarioProvider } from "./context/UsuarioProvider.jsx";
import { ProtectedRoute } from "./componets/security/ProtectedRoute.jsx";
import { AdminLayout } from "./componets/admin/Layout/AdminLayout.jsx";
import { HabitacionProvider } from "./context/HabitacionProvider.jsx";
import { MenuReservas } from "./componets/admin/MenuReservas.jsx";
import { NuevaHabitacion } from "./componets/admin/NuevaHabitacion.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Error</h1>,
  },
  {
    path: "/consulta",
    element: <Consulta />,
  },

  {
    path: "/nosotros",
    element: <Nosotros />,
  },

  {
    path: "/interes",
    element: <Interes />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "home",
        element: <Bienvenida />,
      },
      {
        path: "habitacion",
        element: <Admin1 />,
      },
      {
        path: "habitacion/:id",
        element: <Admin2 />,
      },
      {
        path: "nueva",
        element: <NuevaHabitacion />,
      },
      {
        path: "reservaciones",
        element: <Reservaciones />,
      },
    ],
  },
  {
    path:'reservaciones',
   element:<Reservaciones/>,
   },
   
  {
    path:'/admin/home',
    element:<Bienvenida/>,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={themeCustom}>
    <Global
      styles={css`
      @font-face{
      font-family:'MiFuente';
      src:url('/fonts/poppins/Poppins-Regular.ttf);
      font-weight:normal;
      font-style:normal;
      
      }
      `}
    />
    <React.StrictMode>
      <UsuarioProvider>
        <HabitacionProvider>
          <RouterProvider router={router} />
        </HabitacionProvider>
      </UsuarioProvider>
    </React.StrictMode>
  </ChakraProvider>
);
