import CustomImage from "CustomImage";
import { Button, Modal } from "react-bootstrap";

export default function CardModal(props){
    const {show, setShow, title, fullDescription, spreadStack, colors, repoUrl, imgSrc, imgAlt} = props;
    
    return (<>
        <Modal className="custom-teal-modal" centered size="xl" show={show} onHide={() => setShow(false)}>
          <Modal.Header closeButton>
            <Modal.Title className="w-100 text-center"><b>{title}</b></Modal.Title>
          </Modal.Header>
          <Modal.Body className="w-100 text-center">
            <p>
                {spreadStack.map((element, index) => (
                    <span style={{ marginRight: "10px"}} key={index} className={`badge ${colors[index % colors.length]}`}>
                        {element}
                    </span>
                ))}
            </p>
            <div className="container">
              <div className="row">
                <div dangerouslySetInnerHTML={{ __html: fullDescription}} className="col text-justify">
                </div>
                <div className="col">
                  <a href={imgSrc} target="_blank">
                    <CustomImage src={imgSrc} width={2000} height={1000} alt={imgAlt} />
                  </a>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <a 
              href={repoUrl} 
              className="btn" 
              style={{ 
                color: "#1E3A8A", // slightly darker blue text
                border: "1px solid #1E3A8A",
                backgroundColor: "#F3F4F6" // light gray background
              }}
              target="_blank"
            >
              View on GitHub
            </a>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
    </>)
}