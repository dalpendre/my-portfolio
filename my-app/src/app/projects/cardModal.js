import CustomImage from "CustomImage";
import { Button, Modal } from "react-bootstrap";

export default function CardModal(props) {
  const { show, setShow, title, fullDescription, spreadStack, repoUrl, imgSrc, imgAlt, year, projectType } = props;

  return (
    <>
      <Modal 
        className="custom-project-modal" 
        centered 
        size="xl" 
        show={show} 
        onHide={() => setShow(false)}
        backdrop="static"
        onClick={(e) => e.stopPropagation()}
      >
        <Modal.Header closeButton className="modal-header-redesign">
          <div className="w-100">
            <Modal.Title className="modal-title-redesign">
              <b>{title}</b>
            </Modal.Title>
            {projectType && (
              <div className="modal-subtitle">{projectType}</div>
            )}
            <div className="modal-tags-container">
              {spreadStack.map((element, index) => (
                <span 
                  key={index} 
                  className={`modal-tag ${index < 3 ? 'modal-tag-primary' : ''}`}
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
        </Modal.Header>

        <Modal.Body className="modal-body-redesign">
          <div className="content-grid-redesign">
            {/* Left Column - Description */}
            <div className="content-section-redesign">
              <div className="section-header-redesign">
                <div className="section-title-redesign">Overview</div>
              </div>
              <div 
                className="description-text-redesign"
                dangerouslySetInnerHTML={{ __html: fullDescription }} 
              />
            </div>

            {/* Right Column - Image Preview */}
            <div className="content-section-redesign">
              <div className="section-header-redesign">
                <div className="section-title-redesign">Preview</div>
              </div>
              <div className="image-preview-container">
                <a href={imgSrc} target="_blank" rel="noopener noreferrer">
                  <CustomImage 
                    src={imgSrc} 
                    width={2000} 
                    height={1000} 
                    alt={imgAlt}
                    className="preview-image-redesign"
                  />
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>

        <Modal.Footer className="modal-footer-redesign">
          <div className="footer-info-redesign">
            {year && (
              <div className="footer-badge-redesign">
                <span className="badge-icon">📅</span>
                <span className="badge-label">Year:</span>
                <span className="badge-value">{year}</span>
              </div>
            )}
            {projectType && (
              <div className="footer-badge-redesign">
                <span className="badge-icon">🎓</span>
                <span className="badge-label">Type:</span>
                <span className="badge-value">{projectType}</span>
              </div>
            )}
          </div>
          <div className="action-buttons-redesign">
            <Button 
              variant="secondary" 
              onClick={() => setShow(false)}
              className="btn-secondary-redesign"
            >
              Close
            </Button>
            <a
              href={repoUrl}
              className="btn btn-primary-redesign"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on GitHub →
            </a>
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}