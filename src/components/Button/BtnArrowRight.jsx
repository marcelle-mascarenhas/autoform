import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from 'react-bootstrap';
import { MdArrowForward} from "react-icons/md";


const BtnRight = () => {

    return (
    
            <div className="header text-center">
                  <Button  variant="outline-light" style={{ borderColor: "#fa862f", width: "90px", height: "40px", color: "#fa862f", padding: "6px 8px", fontSize: "14px", borderRadius: "6px"}}> <MdArrowForward size="1.4em" color="#fa862f"/>Next</Button>
            </div>


    );
};

export default BtnRight;