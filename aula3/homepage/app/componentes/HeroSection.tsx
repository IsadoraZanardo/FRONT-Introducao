"use client"

import Card from '@/app/componentes/ui/Crad'
import Button from '@/app/componentes/ui/Button'

export default function HeroSection() {
    return(
            <div className="gap-6 w-screen bg-none flex flex-wrap items-center justify-center"> {/*flex-wrap para que essa div fiqu em cima*/}
            <Card
                titulo='Meus Carros'
                descricao='Toyota Corolla e Hilux'/> {/*quantidade de cards*/}


            <Card
                titulo='Informações financeiras'
                descricao='Clique para saber mais sobre seu banco'
                >
                
                <h1>Elemento children</h1>

                <Button
                nome="Saiba mais"
                estilo="ligth"
                clique={()=>{alert("Redirecionado para Meus Carros")}}
                />

            </Card> {/*abrindo e fechando o card para colocar childrwn*/}



            <div className="p-3 gap-2 flex justify-center items-start">
            <Card
                titulo='PRODUTO 1'
                descricao='Descrição Produto 1'
                >

                <Button
                nome="Saiba mais"
                estilo="success"
                clique={()=>{alert("Informações sobre o Produto 1")}}
                />
            </Card>

            <Card
                titulo='PRODUTO 2'
                descricao='Descrição Produto 2'
                >

                <Button
                nome="Saiba mais"
                estilo="dark"
                clique={()=>{alert("Informações sobre o Produto 2")}}
                />
            </Card>

            <Card
                titulo='PRODUTO 3'
                descricao='Descrição Produto 3'
                >

                <Button
                nome="Saiba mais"
                estilo="outline"
                clique={()=>{alert("Informações sobre o Produto 3")}}
                />
            </Card>

            <Card
                titulo='PRODUTO 4'
                descricao='Descrição Produto 4'
                >

                <Button
                nome="Saiba mais"
                estilo="error"
                clique={()=>{alert("Informações sobre o Produto 4")}}
                />
            </Card>
            </div>

        </div>
    )
}

//PROPS é herança, quando estou acessando algo do componete pai