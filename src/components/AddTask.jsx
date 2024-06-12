import styles from "./AddTask.module.css"
import {  AddCircleOutline } from "@mui/icons-material"
import { useState } from "react";
import {  ModalTask } from "./ModalTask";

export function AddTask() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div className={styles.addTask} onClick={handleOpen}>
                <AddCircleOutline />
                <h5>Add Task</h5>
            </div>

            <ModalTask
            open={open}
            onHandleClose={handleClose}
            />
        </>
    );
}                                   