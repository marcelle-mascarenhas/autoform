import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from 'react';
import { Button, Modal } from 'react-bootstrap';
import "../Form.css";


const EditFormPopup = ({ modal, toggle, updateQuestion, questionObj }) => {
    const [formName, setFormName] = useState('');
    const [description, setDescription] = useState('');

    const handleChange = (e) => {

        const { name, value } = e.target

        if (name === "formName") {
            setFormName(value)
        } else {
            setDescription(value)
        }
    }

    useEffect(() => {
        setFormName(questionObj.Name)
        setDescription(questionObj.Description)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = formName
        tempObj['Description'] = description
        updateQuestion(tempObj)
    }

    return (
        <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modal} 
        onHide={toggle}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header  toggle={toggle}>
        <Modal.Title>Edit Question</Modal.Title>

        </Modal.Header>

            <Modal.Body>

            TABELA
            
            </Modal.Body>

        <Modal.Footer>
        <Button variant="outline shadow-none" style={{ borderColor: "#FB8630", color: "#fa862f", width: "90px", height: "40px", fontSize: "14px"}} onClick={toggle}>
            Cancel
          </Button>
          <Button variant="primary shadow-none" style={{ borderColor: "#FB8630", background: "#FB8630", width: "90px", height: "40px", color: "#ffffff", fontSize: "14px"}} onClick={handleUpdate}>Save</Button>{' '}
         
        </Modal.Footer>
      </Modal>
    );
};

export default EditFormPopup;
