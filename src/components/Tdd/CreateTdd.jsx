
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Slider from '@mui/material/Slider';
import "./CreateTdd.css"
import Box from '@mui/material/Box';
import { MdAddCircleOutline } from "react-icons/md";


const CreateTdd = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    function valuetext(value: number) {
        return `${value}°C`;
    }

    return (

        <div className="container-calculation">

            <div className="box-calculation">

                <div className="content-calculation">

                    <div><h1>Calculation</h1></div>


                    <div>
                        <Dropdown >
                            <Dropdown.Toggle style={{ background: "#fa862f", borderColor: "#fa862f", fontSize: "15px" }} >
                                Choose calculation type
                            </Dropdown.Toggle>
                            <Dropdown.Menu >
                                <Dropdown.Item href="#/action-1">Average</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Median</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">weighted average</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>


                    <div className="header text-center"><Button variant="primary shadow-none" style={{ borderColor: "#FB8630", background: "#FB8630", width: "90px", height: "40px", color: "#ffffff", fontSize: "14px", marginTop: "60px", marginRight: "10px" }}>Save</Button></div>

                </div>
            </div>


            <div className="box-information">

                <div className="content-calculation">

                    <div><h1>Information</h1></div>


                    <div>
                        <Form style={{ width: "90%", height: "90%", color: "#0D0E76", }}>
                            <Form.Group style={{ marginBottom: "2%" }} controlId="form.Name" >
                                <Form.Label style={{ fontSize: "18px" }}><b>Responsible</b></Form.Label>
                                <Form.Control style={{ borderColor: "#FB8630", fontSize: "20px" }} size="lg" type="text" />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: "2%" }} controlId="form.Name">
                                <Form.Label style={{ fontSize: "18px" }}><b>Type</b></Form.Label>
                                <Form.Control style={{ borderColor: "#FB8630", fontSize: "18px" }} size="lg" type="text" />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: "2%" }} controlId="form.Name">
                                <Form.Label style={{ fontSize: "18px" }}><b>Client</b></Form.Label>
                                <Form.Control style={{ borderColor: "#FB8630", fontSize: "18px" }} size="lg" type="text" />
                            </Form.Group>
                            <Form.Group style={{ marginBottom: "2%" }} controlId="form.Name">
                                <Form.Label style={{ fontSize: "18px" }}><b>Startup</b></Form.Label>
                                <Form.Control style={{ borderColor: "#FB8630", fontSize: "18px" }} size="lg" type="text" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label style={{ fontSize: "18px" }}><b>TRL</b></Form.Label>
                                <div>
                                    <Box sx={{ width: 100 }}>
                                        <Slider style={{ color: "#FB8630" }}

                                            defaultValue={1}
                                            getAriaValueText={valuetext}
                                            valueLabelDisplay="auto"
                                            marks
                                            min={1}
                                            max={10}
                                        />
                                    </Box>
                                    <Form.Group style={{ marginBottom: "2%", width: "50px" }} controlId="form.Name">
                                        <Form.Label style={{ fontSize: "18px" }}><b>Score</b></Form.Label>
                                        <Form.Control type="text" style={{ borderColor: "#FB8630", fontSize: "18px" }} readOnly />
                                    </Form.Group>
                                </div>

                            </Form.Group>


                            <div className="header text-center"><Button variant="primary shadow-none" style={{ borderColor: "#FB8630", background: "#FB8630", width: "90px", height: "40px", color: "#ffffff", fontSize: "14px", marginTop: "60px", marginRight: "10px" }}>Save</Button></div>

                        </Form>


                    </div>



                </div>

            </div>


            <div className="box-information">

                <div className="content-calculation">

                    <div><h1>Form</h1></div>

                    <div>
                        <div className="header text-center">
                            <Button onClick={handleShow} variant="primary" style={{ borderColor: "#fa862f", background: "#fa862f", color: "#ffffff", fontSize: "20px", width: "60px", height: "60px", borderRadius: "100px", marginTop: "30%" }}  > <MdAddCircleOutline size="1.6em" color="#ffffff" /></Button>
                        </div>

                    </div>


                </div>
   

            </div>

            <div className="header text-center"><Button variant="primary shadow-none" style={{ borderColor: "#FB8630", background: "#FB8630", width: "90px", height: "40px", color: "#ffffff", fontSize: "14px", marginTop: "20px", marginRight: "10px" }}>Publish</Button></div>

            <div className="model_box">

                <Modal
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header >
                        <Modal.Title>Add Form</Modal.Title>

                    </Modal.Header>
                    <Modal.Body>
                        TABELA
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="outline shadow-none" style={{ borderColor: "#FB8630", color: "#FB8630", width: "90px", height: "40px", fontSize: "14px", padding: "6px 8px" }} onClick={show}>
                            Cancel
                        </Button>
                        <Button variant="primary shadow-none" style={{ borderColor: "#FB8630", background: "#FB8630", width: "90px", height: "40px", fontSize: "14px", color: "#ffffff", padding: "6px 8px" }} onClick={handleClose}>
                            Add Form
                        </Button>

                    </Modal.Footer>
                </Modal>

            </div>





        </div>



















    );
};

export default CreateTdd;

