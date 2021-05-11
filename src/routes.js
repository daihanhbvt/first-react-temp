import React from "react";
import Blacklist from "./page/Blacklist";
import Company from "./page/Company";
import Moto from "./page/Moto";
import Terminal from "./page/Terminal";
import Transaction from "./page/Transaction";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <Company />,
  },
  {
    path: "/company",
    exact: false,
    main: () => <Company />,
  },
  {
    path: "/terminal",
    exact: false,
    main: () => <Terminal />,
  },
  {
    path: "/blacklist",
    exact: false,
    main: () => <Blacklist />,
  },
  {
    path: "/moto",
    exact: false,
    main: () => <Moto />,
  },
  {
    path: "/transaction",
    exact: false,
    main: () => <Transaction />,
  },

  //   {
  //     path: "/transaction",
  //     exact: false,
  //     main: ({ match, location }) => (
  //       <Products match={match} location={location} />
  //     ),
  //   },
  //   {
  //     path: "/login",
  //     exact: false,
  //     main: ({ location }) => <Login location={location} />,
  //   },
];

export default routes;
