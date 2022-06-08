import React, {useState} from 'react';
import EditForm from './modals/EditForm'
import { MdDeleteOutline, MdEdit } from "react-icons/md";
import "./Form.css"

const Card = ({questionObj, index, deleteQuestion, updateListArray}) => {
    const [modal, setModal] = useState(false);

    
    const toggle = () => {
        setModal(!modal);
    }

    const updateQuestion= (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteQuestion(index)
    }

    return (
        <div className="container">

        <div class = "card-container" >
            
            <div class = "task-holder">
                <div className="action-question">
                <MdEdit size="1.8em" style={{"color": "#ff7300" , "cursor" : "pointer"}} onClick = {() => setModal(true)} />

            <MdDeleteOutline size="1.8em" style={{"color": "#ff7300" , "cursor" : "pointer", margin: "20px" }} onClick = {handleDelete} />
                </div>
        </div>
        <EditForm modal = {modal} toggle = {toggle} updateQuestion = {updateQuestion} questionObj = {questionObj}/>
        </div>
        </div>
    );
};

export default Card;