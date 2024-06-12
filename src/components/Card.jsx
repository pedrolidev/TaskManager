import { Checkbox, IconButton } from "@mui/material";
import styles from "./Card.module.css";
import {CheckCircle, CircleOutlined, DeleteOutline} from "@mui/icons-material";



export function Card({ task }) {
    return (
        <div className={styles.card}>
            {/* <input type="checkbox" /> */}
            <Checkbox
                sx={{'& .MuiSvgIcon-root': { fontSize: 30 }}}
                icon={<CircleOutlined />}
                checkedIcon={<CheckCircle />}
            />
            <label> {task.task} </label>

            <IconButton>
                <DeleteOutline />
            </IconButton>
        </div>
    );
}
