import React, { useEffect, useState } from 'react';
import CreateForm from "./modals/CreateForm"
import Card from './Card';
import { Button } from 'react-bootstrap';
import { MdAddCircleOutline} from "react-icons/md";
import Form from 'react-bootstrap/Form';
import "./Form.css"

const Forms = () => {
    const [modal, setModal] = useState(false);
    const [questionList, setQuestionList] = useState([])

    useEffect(() => {
        let arr = localStorage.getItem("questionList")

        if (arr) {
            let obj = JSON.parse(arr)
            setQuestionList(obj)
        }
    }, [])


    const deleteQuestion = (index) => {
        let tempList = questionList
        tempList.splice(index, 1)
        localStorage.setItem("questionList", JSON.stringify(tempList))
        setQuestionList(tempList)
        window.location.reload()
    }

    const updateListArray = (obj, index) => {
        let tempList = questionList
        tempList[index] = obj
        localStorage.setItem("questionList", JSON.stringify(tempList))
        setQuestionList(tempList)
        window.location.reload()
    }

    const toggle = () => {
        setModal(!modal);
    }

    const saveQuestion = (questionObj) => {
        let tempList = questionList
        tempList.push(questionObj)
        localStorage.setItem("questionList", JSON.stringify(tempList))
        setQuestionList(questionList)
        setModal(false)
    }


    return (
        <>
            <div className="container">

        <div className="container-title">
                <Form style={{width:"90%", height: "90%", color:"#0D0E76", }}>
               <Form.Group style={{marginBottom:"2%"}} controlId="form.Name" >
               <Form.Label style={{fontSize:"25px"}}><b>Title</b></Form.Label>
             <Form.Control style={{borderColor:"#FB8630", fontSize:"20px"}} size="lg"  type="text" />
            </Form.Group>
           <Form.Group controlId="form.Name">
            <Form.Label style={{fontSize:"25px"}}><b>Description</b></Form.Label>
            <Form.Control style={{borderColor:"#FB8630", fontSize:"20px" }} size="lg" type="text"  />
        </Form.Group>
       
      </Form>
              
             </div>
             
            </div>

            <div className="header text-center">
                <Button  variant="primary" style={{ borderColor: "#fa862f", background: "#fa862f", color: "#ffffff", fontSize: "20px", width: "60px", height: "60px", borderRadius: "100px", marginBottom:"20px"}} onClick={() => setModal(true)} > <MdAddCircleOutline size="1.6em" color="#ffffff" /></Button>
            </div>
            
            <div className="question-container">
                {questionList && questionList.map((obj, index) => <Card questionObj={obj} index={index} deleteQuestion={deleteQuestion} updateListArray={updateListArray} />)}
            </div>
            <CreateForm toggle={toggle} modal={modal} save={saveQuestion} />

            
            <div className="header text-center">
                <Button  variant="primary" style={{ borderColor: "#fa862f", background: "#fa862f", color: "#ffffff", fontSize: "14px", borderRadius: "6px", width: "90px", height: "40px", marginBottom:"20px"}} onClick={updateListArray}>Save</Button>
            </div>
        </>
    );
};

export default Forms;