import React from "react";
import axios from "axios";
import {Card, CardHeader, ListGroup, ListGroupItem} from "reactstrap";

const baseURL = "http://localhost:9192/getStudents";

const GetData = () => {

    const [post, setPost] = React.useState(null);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    {console.log(post)}
    if (!post) return null;

    return (
        <div className="">

            <ul>
                {post.map(post => (
                        <Card className="m-2"
                            style={{
                                width: '18rem',
                                display : 'inline-block'
                            }}
                        >
                        <CardHeader>
                            Id: {post.id}
                        </CardHeader>
                        <ListGroup flush>
                            <ListGroupItem>
                                Name: {post.name}
                            </ListGroupItem>
                            <ListGroupItem>
                                Gender: {post.gender}
                            </ListGroupItem>
                            <ListGroupItem>
                                Age: {post.age}
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                ))}
            </ul>
        </div>
    );
}

export default GetData;



