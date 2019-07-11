import React from "react";
import { Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from "axios";


class ModalComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { modal: false, name: '', email: '', phone: '', zip: '', message: '' };

        this.toggle = this.toggle.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.formRef = null;

    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })

    }

    async handleSubmit(e) {
        e.preventDefault()

        const { name, email, phone, zip, message } = this.state

        const form = await axios.post("api/form", {
            name,
            email,
            phone,
            zip,
            message
        })
    }

    render() {
        return (

            <div>
                <Button color="success" onClick={this.toggle} size="lg">Contact Us</Button>

                <Modal isOpen={this.state.modal}>
                    <ModalHeader >
                        Contact Us
              </ModalHeader>

                    <ModalBody >
                        <Form onSubmit={this.handleSubmit}
                            style={{ width: '450px' }}>

                            <FormGroup>
                                <Label for="Name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    onChange={this.handleChange}
                                    placeholder="John Doe"
                                    value={this.state.name} required />
                            </FormGroup>

                            <FormGroup>
                                <Label for="email">Email:</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    onChange={this.handleChange}
                                    placeholder="example@example.com"
                                    value={this.state.email} required />
                            </FormGroup>

                            <FormGroup>
                                <Label for="phone">Phone:</Label>
                                <Input
                                    type="phone"
                                    name="phone"
                                    onChange={this.handleChange}
                                    placeholder="000.000.0000"
                                    value={this.state.phone} required />
                            </FormGroup>

                            <FormGroup>
                                <Label for="zip">Zip Code:</Label>
                                <Input
                                    type="zip"
                                    name="zip"
                                    placeholder="60616"
                                    value={this.state.zip} required
                                    onChange={this.handleChange} />
                            </FormGroup>

                            <FormGroup>
                                <Label for="message">Message:</Label>
                                <Input
                                    type="textarea"
                                    name="message"
                                    onChange={this.handleChange} />
                            </FormGroup>

                            <p className="footer-phone">Phone: <a href="tel:(815)715-8244">(815)715-8244</a> </p>
                            <p>Email: <a className="footer-email" href="mailto:briansimon73@gmail.com"> briansimon73@gmail.com </a> </p>

                            <Button>Submit</Button>
                            <Button color="outline-danger" onClick={this.toggle}>Cancel</Button>

                        </Form>

                    </ModalBody>

                </Modal>
            </div>

        );
    }
}

export default ModalComponent
