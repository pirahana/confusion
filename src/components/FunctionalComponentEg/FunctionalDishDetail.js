import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap';



function RenderDish(dish) {
    if (dish != null)
        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    else
        return (
            <div></div>
        );
}

// componentDidMount() {
//     console.log("Dish Detail component : Did Mount called");

// }

// componentDidUpdate() {
//     console.log("Dish Detail component : Did Update called")
// }
function RenderComments(comments) {
    //Todo
    //   {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
    if (comments) {
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {
                        comments.map((comment) => {
                            debugger;
                            return <li key={comment.id}>
                                <p>--{comment.comment}</p>
                                <p>{comment.author + ' , ' + comment.date}</p>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    } else {
        return (<div></div>);
    }
}

const DishDetail = (props) => {
    let selectedDish = props.selectedDish;
    return (
        <div>
            {selectedDish ? (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.selectedDish}></RenderDish>
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.selectedDish.comments}></RenderComments>~
                    </div>
                </div>
            ) : (
                    <div></div>
                )

            }
        </div>
    )
}



export default DishDetail;