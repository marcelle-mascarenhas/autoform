import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';


const CreateFormPopup = ({ modal, toggle, save }) => {
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

  const handleSave = (e) => {
    e.preventDefault()
    let questionObj = {}
    questionObj["Name"] = formName
    questionObj["Description"] = description
    save(questionObj)

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
      <Modal.Header toggle={toggle}>
        <Modal.Title>Add Question</Modal.Title>

      </Modal.Header>
      <Modal.Body>
        TABELA
      </Modal.Body>

      <Modal.Footer>   
        <Button variant="outline shadow-none" style={{ borderColor: "#FB8630", color: "#FB8630", width: "90px", height: "40px", fontSize: "14px",  padding: "6px 8px"}} onClick={toggle}>
          Cancel
        </Button>
        <Button variant="primary shadow-none" style={{ borderColor: "#FB8630", background: "#FB8630",width: "90px", height: "40px", fontSize: "14px", color: "#ffffff", padding: "6px 8px" }} onClick={handleSave}>
          Add
        </Button>

      </Modal.Footer>
    </Modal>
  );
};

export default CreateFormPopup;


