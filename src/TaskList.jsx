import React, { useState } from "react";
import { SingleTask } from "./SingleTask";
export function TaskList({ alltask, update, deleting }) {
    return (
        <>
            <div className="listitem">
                {alltask.map((task) => (
                    <li key={task.id}>
                        <SingleTask task={task} singleupdate={update} singledeleting={deleting} />
                    </li>
                ))}
            </div>
        </>
    )
}
