import React, { useState } from 'react'
import { useEffect } from 'react'

const TodoList = () => {
    const [list, setList] = useState("");
    const [toDo, setToDo] = useState([]);
    const funcionDeBorrado = (value) => {
        const copiaToDo = [...toDo]
        let arregloFiltrado = copiaToDo.filter((tarea) => tarea.value !== value)
        console.log("este es tu arreglo despues de borrado", arregloFiltrado)
        setToDo(arregloFiltrado)
    }
    return (
        <div>
            <ul>
                <input type="text"
                    onChange={(e) => {
                        setList(e.target.value)
                    }}

                    value={list}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {

                            setToDo([...toDo, { value: list }])
                            setList(" ")
                            console.log(toDo)
                        }
                    }
                    }
                    placeholder='things to do' />
                {toDo.map((item, index) =>

                    <li id={index} key={index}>
                        {item.value}
                        <i className="fa-solid fa-x"
                            onClick={(event) => {
                                { funcionDeBorrado(item.value) }
                                console.log("hiciste click en la tarea con valor", item.value)
                            }}>
                        </i>
                    </li>

                )}
            </ul>
            <div>23 task</div>
        </div>
    )
}

export default TodoList