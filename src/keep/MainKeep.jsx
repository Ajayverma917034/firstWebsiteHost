
import React, { useState } from "react";
import "./cssKeep.css";
import HeaderKeep from "./HeaderKeep"
import FooterKeep from "./FooterKeep"
import NoteKeep from "./NoteKeep";
import Note from "./Note";
import { valueToPercent } from "@mui/base";

const MainKeep = () => {
    const [addItem, setAdditem] = useState([])
    const addNote = (note) => {
        // alert("hello")
        // console.log("hello")
        setAdditem((prevData) => {
            return [...prevData, note];
        });
        console.log(note);
    };
    const deletedItem = (id) => {
        setAdditem((prevData) => {
            return prevData.filter((arrElem, index) => {
                return index != id;
            })
        })
    }
    return (<>
        <HeaderKeep />
        <NoteKeep passNote={addNote} />
        <div className="align_div">
            {addItem.map((val, index) => {
                return <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    onSelect={deletedItem}
                />
            })}
        </div>
        <FooterKeep />
    </>)
}

export default MainKeep;