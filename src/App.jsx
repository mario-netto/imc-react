import { useState } from "react"

function App() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const calcImc = altura > 0 ? parseFloat((peso / ((altura / 100) ** 2)).toFixed(1)) : null;
    
    function verificaImc(imc) {
        if (isNaN(imc) || imc === Infinity || imc === null) {
            return `Digite um valor válido`
        } else if (imc <= 18.5) {
            return `Seu Imc é: ${imc} -> Abaixo do peso`
        } else if (imc >= 18.6 && imc <= 24.9) {
            return `Seu Imc é: ${imc} -> Peso ideal`
        } else if (imc >= 25 && imc <=29.9) {
            return `Seu Imc é: ${imc} -> Levemente acima do peso`
        } else if (imc >= 30 && imc <= 34.9) {
            return `Seu Imc é: ${imc} -> Obesidade grau I`
        } else if (imc >= 35 && imc <= 39.9) {
            return `Seu Imc é: ${imc} -> Obesidade grau II (severa)`
        } else if (imc >= 40){
            return `Seu Imc é: ${imc} -> Obesidade grau III (mórbida)`
        }
    }


    return (
        <body>
            <h1>Cacule seu IMC</h1>
            <form>
                <input type="number" placeholder="Insira sua altura em cm" onKeyUp={e => setAltura(e.target.value)}/>
                <input type="number" placeholder="Insira seu peso em kl" onKeyUp={e => setPeso(e.target.value)}/>
            </form>
                <span>{verificaImc(calcImc)}</span>
        </body>
    )
}

export default App
