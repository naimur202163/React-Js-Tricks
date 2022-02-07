import React from 'react';

function Home() {
    const [show, setShow] = useState(true)
    const [value, setValue] = useState("");


    const [number1, setNumber1] = useState();
    const [number2, setNumber2] = useState();
    const [total, setTotal] = useState(0);

    function calculateTotal() {
        setTotal(number1 + number2);
    }
    return <div>

        {/* Disablead button */}

        <h2>This is Home</h2>

        <button onClick={() => setShow(!show)}>

            {
                show ? "Show the Button" : 'Hide the button'
            }

        </button>
        {
            show && <div>
                <h2>Naimur rahmab</h2>
            </div>
        }

        {/*  */}

        {/* Bunding Data */}
        <input
            type="text"
            placeholder="Enter Text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
        <p>{value}</p>
        <h2>Adding Two Numbers</h2>
        <input
            placeholder="First Number"
            type="number"
            value={number1}
            onChange={(e) => setNumber1(+e.target.value)}
        />
        <input
            placeholder="Second Number"
            type="number"
            value={number2}
            onChange={(e) => setNumber2(+e.target.value)}
        />

        <button onClick={calculateTotal}>Add Two Numbers</button>
        <p>Total: {total || ""}</p>



    </div>;
}

export default Home;
