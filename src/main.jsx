import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ChipperCard from './Components/Pages/ChipperCard/ChipperCard.jsx'
import Home from './Components/Pages/Home/Home.jsx'
import InvestCrypto from './Components/Pages/InvestCrypto/InvestCrypto.jsx'
import InvestStock from './Components/Pages/InvestStock/InvestStock.jsx'
import NetworkApi from './Components/Pages/NetworkApi/NetworkApi.jsx'
import SendReciveMoney from './Components/Pages/SendReceived/SendReciveMoney.jsx'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './index.css'

const route =createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Home />,
      },
      {
        path:"/chipperCard",
        element:<ChipperCard />,
      },
      {
        path:"/investCrypto",
        element:<InvestCrypto />,
      },
      {
        path:"/investStock",
        element:<InvestStock />,
      },
      {
        path:"/sendReceiveMoney",
        element:<SendReciveMoney />,
      },
      {
        path:"/networkApi",
        element:<NetworkApi />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
