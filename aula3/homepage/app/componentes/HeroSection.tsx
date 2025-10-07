import Card from '@/app/componentes/ui/Crad'
import Button from '@/app/componentes/ui/Button'

export default function HeroSection() {
    return(
            <div className="p-4 gap-6 w-screen bg-none flex items-center justify-center">
            <Card
                titulo='Meus Carros'
                descricao='Toyota Corolla e Hilux'/> {/*quantidade de cards*/}

            <Card
                titulo='Informações financeiras'
                descricao='Clique para saber mais sobre seu banco'
                >
                
                <h1>Elemento children</h1>
                <Button/>
            </Card> {/*abrindo e fechando o card para colocar childrwn*/}

        </div>
    )
}

//PROPS é herança, quando estou acessando algo do componete pai