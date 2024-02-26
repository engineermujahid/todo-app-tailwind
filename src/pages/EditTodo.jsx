import React, { useEffect, useState } from 'react'
import { message } from 'antd'
import { ThemeContext } from '../context/ThemeContext'
import { useLocation, useNavigate } from 'react-router-dom';


export default function EditTodo() {

    const navigate = useNavigate()
    const { textColor, backgroundColor, componentColor } = ThemeContext()
    const [todo, setTodo] = useState({ title: "", location: "", discription: "" })
    const todoToEdit = useLocation().state;

    useEffect(() => {
        setTodo(todoToEdit)
    }, [])

    const handleChange = e => setTodo(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = e => {
        e.preventDefault()
        let { title, location, discription } = todo;
        title = title.trim();
        location = location.trim();
        discription = discription.trim();
        if (!title) { return message.error("Enter the title Properly") }
        if (!location) { return message.error("Enter the the location") }
        if (!discription) { return message.error("Enter the discription Properly") }
        const mytodos = JSON.parse(localStorage.getItem("todos"))
        let updatedTodos = []
        mytodos.forEach((myTodo) => {
            updatedTodos.push(myTodo.id !== todo.id ? myTodo : todo)
        })
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        message.success("Todo is updated successfully")
        setTimeout(() => {
            navigate("/mytodos")
        }, [500])

    }


    return (
        <>
            <div style={{ color: textColor, backgroundColor: backgroundColor }} className="min-h-screen pt-24 pb-24" >
                <div style={{ color: textColor, backgroundColor: componentColor, borderColor: textColor }}
                    className="shadow-lg p-6 rounded-lg mx-auto w-[90%] sm:w-[80%] md:w-[600px] lg:w-[800px]">
                    <h1 className='text-center text-4xl font-bold mb-6'>Edit Todos</h1>
                    <form onSubmit={handleSubmit} className="">
                        <div className="">
                            <input type="text" id="title" onChange={handleChange} name="title" value={todo.title}
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="w-full rounded border-2 text-base py-1 px-3 mb-4 leading-8"
                                placeholder="Update the title" />

                        </div>

                        <div className="">
                            <input type="text" id="location" onChange={handleChange} name="location" value={todo.location}
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="w-full rounded border-2 text-base py-1 px-3 mb-4 leading-8"
                                placeholder="Update the location" />
                        </div>
                        <div className="">
                            <textarea onChange={handleChange} name="discription" id="discription" cols="30" rows="6"
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="w-full rounded border-2 text-base py-1 px-3 mb-4 leading-8" value={todo.discription}
                                placeholder="update the discription"></textarea>
                        </div>
                        <div className="text-right">
                            <input type="submit" value="Edit Todo"
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="font-semibold py-3 px-10 rounded border-2 focus:outline-none focus:shadow-outline text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
