import "./styles.css"

import { UserMinus } from "phosphor-react"

export default function Card({ key, name, time, handleRemove }) {
  return (
    <div className="cardContainer">
      <div className="card">
        <strong>{name}</strong>
        <small>{time}</small>
      </div>
      <button className="delete" onClick={() => handleRemove(key)}>
        <UserMinus size={36} color="#FFFFFF" weight="bold" />
      </button>
    </div>
  )
}
