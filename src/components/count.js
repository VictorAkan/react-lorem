import { useState } from "react"
import data from "./data"

export default function Count() {
    const [text, setText] = useState([])
    const [count, setCount] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        let amount = parseInt(count)
        if (count <= 0) {
            amount = 1
        }
        if (count > 8) {
            amount = 8
        }
        setText(data.slice(0, amount))
    }
    return(
        <div className="section">
            <div className="section-center">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="count">Paragraph:</label>
                    <div className="d-flex justify-content-center">
                    <input 
                        type="number"
                        id="amount"
                        className="form-control me-3"
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                    />
                    <button className="btn btn-info" type="submit">GENERATE</button>
                    </div>
                </form>
                <article className="container lorem-text d-flex justify-content-center">
                    <div>
                        {text.map((item, index) => (
                            <p key={index}>{item}</p>           
                        ))}
                    </div>
                </article>
            </div>
        </div>
    )
}