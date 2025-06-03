import React, { useState, useRef } from 'react';
import { Offcanvas, Button, ListGroup } from 'react-bootstrap';
import ProcessData from '../PlaningAuditPage/ProcessData';

const OffcanvasSubSectionsData = ({ data }) => {
    const [show, setShow] = useState(false);
    const processedData = ProcessData(data);
    const offcanvasRef = useRef(null);

    const handleClose = () => {
        const backdrop = document.querySelector('.offcanvas-backdrop');
        if (backdrop) {
            backdrop.style.transition = 'none';
            backdrop.remove();
        }
        setShow(false);
    };

    const handleShow = () => setShow(true);

    const createAnchorId = (text) => {
        return text.toLowerCase().replace(/[^a-zа-яё0-9]+/g, '-').replace(/^-|-$/g, '');
    };

    const handleLinkClick = (e, href) => {
        e.preventDefault();
        const scrollPosition = window.pageYOffset;
        handleClose();
        window.scrollTo(0, scrollPosition);
        
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                const yOffset = -80;
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
                
                window.scrollTo({
                    top: y,
                    behavior: 'smooth'
                });
                
                // Исправлено: используем window.history вместо глобальной history
                if (window.history.pushState) {
                    window.history.pushState(null, null, href);
                } else {
                    window.location.hash = href;
                }
            }
        }, 50);
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="mb-4">
                Меню ДК ТОС
            </Button>

            <Offcanvas 
                show={show} 
                onHide={handleClose} 
                placement="start" 
                ref={offcanvasRef}
                backdrop={false}
                scroll={false}
                style={{ transition: 'transform 0.15s ease-in-out' }}
            >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Навигация по аудиту</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item 
                            action 
                            as="a"
                            href="#audit-information"
                            onClick={(e) => handleLinkClick(e, '#audit-information')}
                        >
                            Audit Information
                        </ListGroup.Item>

                        {Object.entries(processedData).map(([section, categories]) => (
                            <React.Fragment key={section}>
                                <ListGroup.Item className="fw-bold">
                                    {section}
                                </ListGroup.Item>
                                {categories.map(category => {
                                    const anchorId = `#${createAnchorId(`${section}-${category}`)}`;
                                    return (
                                        <ListGroup.Item 
                                            key={category}
                                            action
                                            as="a"
                                            href={anchorId}
                                            onClick={(e) => handleLinkClick(e, anchorId)}
                                        >
                                            {category}
                                        </ListGroup.Item>
                                    );
                                })}
                            </React.Fragment>
                        ))}
                    </ListGroup>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default OffcanvasSubSectionsData;