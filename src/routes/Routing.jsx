import React ,{lazy,Suspense}from 'react'
import { Routes , Route } from 'react-router-dom'
import Layout from './../pages/Layout';
import Spinner from '../components/Spinner.jsx';
import CustomErrorboundary from '../components/CustoErrorboundary/CustomeErorboundary.jsx';
const Home=lazy(()=>import ("../pages/Home"))
const CoinDetails = lazy(()=> import ("../pages/CoinDetails.jsx"))

export default function Routing() {
  return (
    <CustomErrorboundary>
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element ={
          <Suspense fallback={<Spinner />}>
            <Home/>
          </Suspense>
          }/>
        <Route path='/details/:coinid' element={
          <Suspense fallback={<Spinner />}>
            <CoinDetails/>
          </Suspense>
          }/>
      </Route>
    </Routes>
    </CustomErrorboundary>
  )
}
