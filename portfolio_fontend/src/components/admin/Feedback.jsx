import React from "react";
import { Card, Row, Stack, Col } from "react-bootstrap";
import useFetch from "../../hooks/useFetchs";
import Post from "./Post";
import { Link } from "react-router-dom";
export default function Feedback() {
  const { data, loading, error } = useFetch("/feedback/api");
  return (
    <>
      <Stack>
        <p
          className="d-flex justify-content-center"
          style={{ fontSize: "1.5rem" }}
        >
          Feedback
        </p>
        {error && <p>Do not load data</p>}
      </Stack>
      <Row>
        {loading
          ? "Loading please wait"
          : typeof data === "undefined"
          ? "data undefined"
          : data.map((item) => (
              <Col className="mb-4" key={item._id}>
                <Card style={{ width: "27rem" }} >
                  <Card.Body>
                    <Card.Title className="mb-2">{item.email}</Card.Title>
                    {item.desc.length > 40 ? (
                      <Card.Text>
                        {item.desc.slice(0, 40)}...
                        <Link to={"/admin/" + item._id} style={{textDecoration: "none"}} onClick={()=>
                          <Post key={item._id} id={item._id} desc={item.desc} email={item.email}/>
                        }> Read more</Link>
                      </Card.Text>
                    ) : (
                      <Card.Text>{item.desc}</Card.Text>
                    )}
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </>
  );
}
