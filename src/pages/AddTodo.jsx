import React, { useState } from 'react'
import { message } from 'antd'
import { ThemeContext } from '../context/ThemeContext'

export default function AddTodo() {
    const { textColor, backgroundColor, componentColor } = ThemeContext()
    const [todo, setTodo] = useState({ title: "", location: "", discription: "" })

    const handleChange = e => setTodo(s => ({ ...s, [e.target.name]: e.target.value }))

    const handleSubmit = (e) => {
        e.preventDefault()
        let { title, location, discription } = todo;
        title = title.trim();
        location = location.trim();
        discription = discription.trim();
        if (!title) { return message.error("Enter the title Properly") }
        if (!location) { return message.error("Enter the the location") }
        if (!discription || discription.length < 3) { return message.error("Enter the discription Properly") }
        const id = Math.random().toString(36).slice(2)
        const newTodo = { title, location, discription, id }

        try {
            const todos = JSON.parse(localStorage.getItem("todos")) || [];
            todos.push(newTodo);
            localStorage.setItem("todos", JSON.stringify(todos));
            message.success("A new TODO is created successfully. Navigate to \"myTodos\" page to see your tasks.")
            setTimeout(() => {
                resetFields()
            }, [500])
        }
        catch {
            message.error("Something went wrong while adding task. Try again.")
        };
    }
    const resetFields = () => {
        document.getElementById("title").value = "";
        document.getElementById("location").value = "";
        document.getElementById("discription").value = "";
    }

    return (
        <>
            <div style={{ color: textColor, backgroundColor: backgroundColor }} className="min-h-screen pt-24 pb-24" >
                <div style={{ color: textColor, backgroundColor: componentColor, borderColor: textColor }}
                    className="shadow-lg p-6 rounded-lg mx-auto w-[90%] sm:w-[80%] md:w-[600px] lg:w-[800px]">
                    <h1 className='text-center text-4xl font-bold mb-6'>Add Todos</h1>
                    <form onSubmit={handleSubmit} className="">
                        <div className="">
                            <input type="text" id="title" onChange={handleChange} name="title"
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="w-full rounded border-2 text-base py-1 px-3 mb-4 leading-8"
                                placeholder="Enter Title" />

                        </div>

                        <div className="">
                            <input type="text" id="location" onChange={handleChange} name="location"
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="w-full rounded border-2 text-base py-1 px-3 mb-4 leading-8"
                                placeholder="Enter Location" />
                        </div>
                        <div className="">
                            <textarea onChange={handleChange} name="discription" id="discription" cols="30" rows="6"
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="w-full rounded border-2 text-base py-1 px-3 mb-4 leading-8"
                                placeholder="Enter Discription"></textarea>
                        </div>
                        <div className="text-right">
                            <input type="submit" value="Add Todo"
                                style={{ borderColor: textColor, backgroundColor: backgroundColor, color: textColor }}
                                className="font-semibold py-3 px-10 rounded border-2 focus:outline-none focus:shadow-outline text-white" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
