import React, { useState } from "react";
import "./cssKeep.css"
import AddIcon from '@mui/icons-material/Add';
// import Button from '@mui/material/Button';

const NoteKeep = (props) => {
    const [expand, setExpand] = useState(false);
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const ChangeOccure = (event) => {
        // const value = event.target.value;
        // const name = event.target.name;

        const { value, name } = event.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name]: value,

            };
        });
        // console.log(NoteKeep);
    }
    const Clicked = () => {
        props.passNote(note)
        setNote({
            title: "",
            content: "",
        });

    }
    const expnadit = () => {
        setExpand(true)
    }
    const backToNormal = () => {
        setExpand(false)
    }



    return (
        <>
            <div className="note_main">
                <form>
                    {expand ?
                        <input
                            value={note.title}
                            onChange={ChangeOccure}
                            placeholder="Tittle"
                            autoComplete="off"
                            type="text"
                            name="title"
                        /> : null}
                    <textarea
                        rows=""
                        column=""
                        name="content"
                        value={note.content}
                        onChange={ChangeOccure}
                        placeholder="Write a note"
                        onClick={expnadit}
                        onDoubleClick={backToNormal}
                    ></textarea>
                    {expand ?
                        <p className="new_button" onClick={Clicked}>
                            <AddIcon />
                        </p>
                        : null}

                </form>
            </div>
        </>
    )
}

export default NoteKeep;