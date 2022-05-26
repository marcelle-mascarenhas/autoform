import "bootstrap/dist/css/bootstrap.min.css";
import {useState} from 'react';
import { MdDeleteOutline, MdEdit} from "react-icons/md";
import { Button,Modal} from 'react-bootstrap';
import "./DimensionTable.css";

function DimensionTable() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (

       <div style={{display:'block', width: 900}}class="container">
          <div className="crud shadow-lg p-3 mb-5 mt-5 bg-body rounded"> 
          <div class="row ">
          
           <div class="col-sm-3 mt-5 mb-4 text-gred">
              <div className="search">
                <form class="form-inline">
                 <input class="form-control mr-sm-2" type="search" placeholder="Search Dimension" aria-label="Search"/>
               
                </form>
              </div>    
              </div>  
              <div class="col-sm-3 offset-sm-2 mt-5 mb-4 text-gred">
              <Button style={{background:"#FB8630"}} onClick={handleShow}>
              Create
              </Button>
             </div>
           </div>  
            <div class="row">
                <div class="table-responsive" >
                 <table class="table table-striped table-hover" style={{color:"#0D0E76"}}>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Dimension</th>
                            <th>Creation Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                       
                        <tr>
                            <td>1</td>
                            <td>Dimension 1</td>
                            <td>Jun 13, 2022</td>
                            <td>
                            <MdEdit color="#0D0E76"/>
                            <MdDeleteOutline color="#0D0E76"/>   
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Dimension 2</td>
                            <td>Jun 13, 2022</td>
                            <td>
                            <MdEdit color="#0D0E76"/>
                            <MdDeleteOutline color="#0D0E76"/>
                            </td>
                        </tr>
                        

                        <tr>
                            <td>3</td>
                            <td>Dimension 3</td>
                            <td>Jun 13, 2022</td>
                            <td>
                            <MdEdit color="#0D0E76"/>
                            <MdDeleteOutline color="#0D0E76"/>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td>Dimension 4</td>
                            <td>Jun 13, 2022</td>
                            <td>
                            <MdEdit color="#0D0E76"/>
                            <MdDeleteOutline color="#0D0E76"/>
                            </td>
                        </tr>


                        <tr>
                            <td>5</td>
                            <td>Dimension 5</td>
                            <td>Jun 13, 2022</td>
                            <td>
                            <MdEdit color="#0D0E76"/>
                            <MdDeleteOutline color="#0D0E76"/>
                            </td>
                        </tr>

                        <tr>
                            <td>6</td>
                            <td>Dimension 6</td>
                            <td>Jun 13, 2022</td>
                            <td>
                            <MdEdit color="#0D0E76"/>
                            <MdDeleteOutline color="#0D0E76"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>   
        </div>  

        {/* <!--- Model Box ---> */}
        <div className="model_box">
        

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Dimension</Modal.Title>
        </Modal.Header>
            <Modal.Body>
            <form>
                <div class="form-group">
                    <input type="text" class="form-control" id="inputText" aria-describedby="dimension" placeholder="Dimension"/>
                </div>
                  <button  style={{background:"#FB8630"}} type="submit" class="btn btn-success mt-4">Save</button>
                </form>
            </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
         
        </Modal.Footer>
      </Modal>
 
       {/* Model Box Finsihs */}
       </div>  
      </div>    
      </div>  
  );
}

export default DimensionTable;
