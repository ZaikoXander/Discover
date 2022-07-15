import { useEffect, useState } from "react"

import "./styles.css"

import Card from "../../components/Card"

export function Home() {
  const [studentName, setStudentName] = useState("")
  const [students, setStudents] = useState([])
  const [user, setUser] = useState({ name: "", avatar: "" })

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      })
    }

    // setStudents(prevState => [...prevState, newStudent])
    setStudents([...students, newStudent])
  }

  function handleRemove(index) {
    let data = [...students];
    data.splice(index, 1);
    setStudents(data);  
  }

  useEffect(() => {
    // corpo do useEffect
    async function fetchData() {
      try {
        const response = await fetch("https://api.github.com/users/zaikoxander")
        const data = await response.json()
        setUser({
          name: data.name,
          avatar: data.avatar_url
        })
      }
      catch (error) {
        console.error(error)
      }
    }

    fetchData()
  }, [])

  return (
    <div className="container">
      <header>
        <h1>Lista de Presença</h1>

        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input
        type="text"
        placeholder="Digite o nome..."
        onChange={event => setStudentName(event.target.value)}
      />
      <button
        className="addStudentButton"
        type="button"
        onClick={handleAddStudent}
      >
        Adicionar
      </button>

      {
        students.map((student, index) => (
          <Card
            key={index}
            name={student.name}
            time={student.time}
            handleRemove={handleRemove}
          />
        ))
      }
    </div>
  )
}
