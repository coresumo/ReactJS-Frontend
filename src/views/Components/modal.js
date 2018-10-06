import React from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';

const ModalPopUp = (props) => {
	
    return (
        <div>
            <Button color="danger" onClick={props.toggleDanger} className="mr-1">{props.buttonName}</Button>
                <Modal isOpen={props.danger} toggle={props.toggleDanger}
                       className={'modal-danger ' + props.className}>
                  <ModalHeader toggle={props.toggleDanger}>{props.modaltitle}</ModalHeader>
                  <ModalBody>
                    {props.children}
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" onClick={props.toggleDanger}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={props.toggleDanger}>Cancel</Button>
                  </ModalFooter>
                </Modal>

        </div>
    )
}
export default ModalPopUp;