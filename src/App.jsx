import { useState } from "react"

function App() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    const calcImc = (peso /  ((altura /100 ) ** 2)).toFixed(1)

    return (
        <>
            <h1>Cacule seu IMC</h1>
            <form>
                <input type="number" placeholder="Insira sua altura em cm" onKeyUp={e => setAltura(e.target.value)}/>
                <input type="number" placeholder="Insira seu peso em kl" onKeyUp={e => setPeso(e.target.value)}/>
                {calcImc}
            </form>
        </>
    )
}

export default App
