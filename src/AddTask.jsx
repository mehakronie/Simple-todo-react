import React, { useState } from "react";

export function AddTask({ adding }) {
    const [text, settext] = useState()
    const handler = (e) => {
        e.preventDefault()
        adding(text)
        settext('')
    }
    return (

        <>
            <div className="addtaskdiv">
                <form onSubmit={handler}>
                    <center><input
                        type="text"
                        required
                        value={text ?? ''}
                        onChange={(e) => settext(e.target.value)}
                    />
                        <button type="submit">Add</button>
                    </center>
                </form>
            </div>
        </>
    )
}