import Header from '@/app/componentes/Header'
import HeroSection from './componentes/HeroSection'

export default function Home(){
  return(
    //chamar um componente react
   <div>
    <Header/>  {/*navbar*/}
    <HeroSection/>
    </div>
  )
}