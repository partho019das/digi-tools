import Navber from './assets/my files/navber'
import Body from './assets/my files/body'
import Stars from './assets/my files/stars'
import Tools from './assets/my files/tools'
import Card from './assets/my files/card'
import Startet from './assets/my files/startet'
import Pricing from './assets/my files/pricing'
import Footer from './assets/my files/footer'
import './App.css'
import { Suspense } from 'react'

const featchcard=async() =>{
const fes =await fetch("/public/data.json")
return fes.json();

}



function App() {

  const cardpromiss=featchcard();


  return (
    <>
    
    <header>
    
        <Navber></Navber>
        <Body></Body>
    </header>
   
       <Stars></Stars>
       <Tools></Tools>
      <Suspense fallback=<span className="loading loading-spinner loading-xl"></span>>
        <Card cardpromiss={cardpromiss}></Card>
      </Suspense>
   <Startet></Startet>
   <Pricing></Pricing>
   <Footer></Footer>
    </>
  )
}

export default App
