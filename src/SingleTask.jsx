import React, { useState } from "react";

export function SingleTask({ task, singleupdate, singledeleting }) {
    const [editable, seteditable] = useState(false)
    let wholetasktext;
    if (editable) {

        wholetasktext = (
            <>
                <input
                    type="text"
                    value={task.text}
                    onChange={(e) => {
                        singleupdate({
                            ...task,
                            text: e.target.value,
                        })
                    }}
                />
                <button className="save" onClick={() => seteditable(false)}>save</button>
            </>)

    }
    else (

        wholetasktext = (
            <>
                <div className={task.done ? 'strike' : ""}>
                    {task.text}
                </div>
                <button className="edit" onClick={() => seteditable(true)}>edit</button>
            </>)

    )
    return (
        <>
            <div className="item-3">

                <input
                    className="checkbox"
                    type="checkbox"
                    checked={task.done}
                    onChange={(e) => (
                        singleupdate(
                            {
                                ...task,
                                done: e.target.checked,
                            })
                    )
                    }
                />
                <div className="text">

                    {wholetasktext}
                    <button className="delete" onClick={() => singledeleting(task.id)}>Delete</button>
                </div>

            </div>
        </>
    )
}