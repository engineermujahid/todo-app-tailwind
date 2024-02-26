import React, { useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

export default function TodosList() {
    const { textColor, backgroundColor, componentColor } = ThemeContext()
    const [myTodos, setMyTodos] = useState([])
    const navigate = useNavigate();

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos")) || [];
        setMyTodos(todos)
    }, [])

    const handleDelete = (e) => {
        const id = e.target.getAttribute("id")
        const todos = JSON.parse(localStorage.getItem("todos"))
        const remTodos = todos.filter((todo) => todo.id !== id)
        localStorage.setItem("todos", JSON.stringify(remTodos))
        setMyTodos(remTodos)
    }
    const handleEdit = (e) => {
        const id = e.target.getAttribute("id")
        const todos = JSON.parse(localStorage.getItem("todos"))
        const editTodo = todos.find(todo => todo.id === id)
        navigate("/edittodos", { state: editTodo })


    }

    return (
        <>
            <div style={{ color: textColor, backgroundColor: backgroundColor }} className="pt-24 min-h-screen">
                <div style={{ color: textColor, backgroundColor: componentColor }} className="shadow-lg p-4 rounded-lg mx-auto w-[90%] sm:w-[80%] ">
                    <table style={{ borderColor: textColor }} class="table-auto w-full border-collapse border-b-2">
                        <thead>
                            <tr style={{ borderColor: textColor }} className='border-b-2'>
                                <th className='py-3 text-lg'>Sr.no</th>
                                <th className='py-3 text-lg'>Title</th>
                                <th className='py-3 text-lg'>Location</th>
                                <th className='py-3 text-lg'>Discription</th>
                                <th className='py-3 text-lg'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myTodos.map((todo, index) => {
                                return (
                                    <tr key={index} style={{ borderColor: textColor }} className='border-b-2'>
                                        <td className='py-2'>{index + 1}</td>
                                        <td className='py-2'>{todo.title}</td>
                                        <td className='py-2'>{todo.location}</td>
                                        <td className='py-2'>{todo.discription}</td>
                                        <td className='py-2 text-center'>
                                            <button className='bg-sky-500 text-white rounded px-4 py-1 me-2 font-medium hover:bg-sky-600'
                                                id={todo.id} onClick={(e) => { handleEdit(e) }} >Edit</button>
                                            <button className='bg-rose-500 text-white rounded px-4 py-1 me-2 font-medium hover:bg-rose-600'
                                                id={todo.id} onClick={(e) => { handleDelete(e) }}>Delete</button>
                                        </td>
                                    </tr>
                                )
                            })}



                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
