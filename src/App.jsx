import { useState } from "react"

function App() {
    const [altura, setAltura] = useState(0)
    const [peso, setPeso] = useState(0)

    return (
        <>
            <h1>Cacule seu IMC</h1>
            <form>
                <input type="number" placeholder="Insira sua altura em cm"/>
                <input type="number" placeholder="Insira seu peso em kl"/>
            </form>
        </>
    )
}

export default App
