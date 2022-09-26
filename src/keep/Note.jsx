import React from "react";
import "./cssKeep.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Note = (props) => {
    return (<>
        <div className="tittle_div">
            <h1>{props.title}</h1>
            <br></br>
            <p >{props.content}</p>
            <DeleteOutlineIcon
                className="delete_btn"
                onClick={() => {
                    props.onSelect(props.id)
                }} />
        </div>
    </>)
}

export default Note;