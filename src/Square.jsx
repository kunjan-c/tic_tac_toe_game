import {  useState } from "react";



const Game = () => {

    const combos = {
        across: [[0, 1, 2], [3, 4, 5], [6, 7, 8]],
        down: [[0, 3, 6], [1, 4, 7], [2, 5, 8]],
        diagonal: [[0, 4, 8], [2, 4, 6]]
    };

    const [cells, setCells] = useState(Array(9).fill(''));
    const [turn, setTurn] = useState('X');
    const [winner, setWinner] = useState("");


    const onResetHandler = () => {
        setCells(Array(9).fill(''))
        setWinner("")
    }


    const onSquareclickHandler = (id) => {
        if (cells[id] !== "") return;

        let arr = [...cells];
        if (turn === "X") {
            arr[id] = "X"

            setTurn("O")
        } else {
            arr[id] = "O";
            setTurn("X")

        }


        checkWinner(arr);
        setCells(arr)
        // setCells(arr);


    }

    const checkWinner = (arr) => {

        for (let combo in combos) {

            combos[combo].forEach((pattern) => {
                if (arr[pattern[0]] === "" || arr[pattern[1]] === "" || arr[pattern[2]] === "") {
                    return "no winner"
                } else if ((arr[pattern[0]] === arr[pattern[1]]) && (arr[pattern[1]] === arr[pattern[2]])) {
                    console.log(arr[pattern[0]], arr[pattern[1]], arr[pattern[2]]);

                    setWinner(arr[pattern[0]])
                }




            });


        }


    };


    return <div style={{ width: "100vw", backgroundColor: "white", height: "100vh", color: "green", fontSize: "50px", textAlign: "center", alignItems: "center" }}>
        <div>{`winner is ${winner}`}</div>
        <div style={{ height: "100px", border: "1px solid red", width: "300px", display: "flex" }}>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(0)}>{cells[0]}</div>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(1)}>{cells[1]}</div>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(2)}>{cells[2]}</div>
        </div>
        <div style={{ height: "100px", border: "1px solid red", width: "300px", display: "flex" }}>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(3)}>{cells[3]}</div>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(4)}>{cells[4]}</div>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(5)}>{cells[5]}</div>
        </div>
        <div style={{ height: "100px", border: "1px solid red", width: "300px", display: "flex" }}>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(6)}>{cells[6]}</div>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(7)} >{cells[7]}</div>
            <div style={{ width: "100px", border: "1px solid red", height: "100px" }} onClick={() => onSquareclickHandler(8)}>{cells[8]}</div>
        </div>


        <button onClick={onResetHandler}>Reset</button>
    </div>

}
export default Game;
