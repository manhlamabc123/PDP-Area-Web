import React, {useState, useEffect} from 'react'

function App() {
    const [data, setData] = useState([{}])

    useEffect(() => {
        fetch("/index").then(
            response => response.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            }
        )
    }, [])

    return (
        <div>
            {(typeof data.name === 'undefined') ? (
                <p>Loading...</p>
            ) : (
                data.name.map((name, i) => (
                    <p key={i}>{name}</p>
                ))
            )}
        </div>
    )
}

export default App