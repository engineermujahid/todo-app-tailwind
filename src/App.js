import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home"
import TodosList from "./pages/TodosList"
import AddTodo from "./pages/AddTodo"
import EditTodo from "./pages/EditTodo"

function App() {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mytodos" element={<TodosList />} />
            <Route path="/addtodos" element={<AddTodo />} />
            <Route path="/edittodos" element={<EditTodo />} />
          </Routes>


        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
