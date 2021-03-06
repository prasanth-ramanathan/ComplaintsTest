
import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
  FormGroup,
  ControlLabel,
  FormControl
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import { FormInputs } from "components/FormInputs/FormInputs.jsx";
import { UserCard } from "components/UserCard/UserCard.jsx";
import Button from "components/CustomButton/CustomButton.jsx";

import avatar from "assets/img/faces/face-3.jpg";

class Complaint extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="New Complaint"
                content={
                  <form>
                    <FormInputs
                      ncols={["col-md-3", "col-md-5", "col-md-4"]}
                      properties={[
                        {
                          label: "Complaint ID",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "ComplaintID",
                          defaultValue: "12345",
                          disabled: true
                        },
                        {
                          label: "Patient Name",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Patient Name"
                        },
                        {
                          label: "Patient Email",
                          type: "email",
                          bsClass: "form-control",
                          placeholder: "Patient Email"
                        }
                      ]}
                    />
                     <FormInputs
                      ncols={["col-md-6", "col-md-6"]}
                      properties={[
                        {
                          label: "Contact Number",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "(xxx)xxx-xxx"
                        },
                        {
                          label: "Date of Patient Visit",
                          type: "date",
                          bsClass: "form-control"
                        }
                      ]}
                    />
                    {/*<FormInputs
                      ncols={["col-md-12"]}
                      properties={[
                        {
                          label: "Adress",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Home Adress",
                          defaultValue:
                            "Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                        }
                      ]}
                    />
                    <FormInputs
                      ncols={["col-md-4", "col-md-4", "col-md-4"]}
                      properties={[
                        {
                          label: "City",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "City",
                          defaultValue: "Mike"
                        },
                        {
                          label: "Country",
                          type: "text",
                          bsClass: "form-control",
                          placeholder: "Country",
                          defaultValue: "Andrew"
                        },
                        {
                          label: "Postal Code",
                          type: "number",
                          bsClass: "form-control",
                          placeholder: "ZIP Code"
                        }
                      ]}
                    />

                    <Row>
                      <Col md={12}>
                        <FormGroup controlId="formControlsTextarea">
                          <ControlLabel>About Me</ControlLabel>
                          <FormControl
                            rows="5"
                            componentClass="textarea"
                            bsClass="form-control"
                            placeholder="Here can be your description"
                            defaultValue=""
                          />
                        </FormGroup>
                      </Col>
                    </Row> */}
                    <Button bsStyle="info" pullRight fill type="submit">
                      SUBMIT COMPLAINT
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Complaint;
