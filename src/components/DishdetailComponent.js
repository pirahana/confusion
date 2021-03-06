import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish != null)
            return(
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        else
            return(
                <div></div>
            );
    }

    componentDidMount() {
        console.log("Dish Detail component : Did Mount called");

    }

    componentDidUpdate() {
        console.log("Dish Detail component : Did Update called")
    }
    renderComments(comments) {
     
     //Todo
     //   {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
        if(comments) {
            return(
                <div>
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {
                        comments.map((comment) => {
                            debugger;
                             return <li key={comment.id}>
                                 <p>--{comment.comment}</p>
                                 <p>{comment.author + ' , '+ comment.date}</p>
                             </li>
                        })
                    }
                    </ul>
                </div>
            );
        } else {
            return( <div></div>);
        }
    }

    render(props) {
        console.log('Dis detail: render called');
        let selectedDish = this.props.selectedDish;
        return (
            <div>
            { selectedDish ? (
                <div className="row">
                <div  className="col-12 col-md-5 m-1">
                  {this.renderDish(this.props.selectedDish)}
                </div>
                <div  className="col-12 col-md-5 m-1">
                  {this.renderComments(this.props.selectedDish.comments)}
                </div>
              </div>
            ) : (
                <div></div>
            )

            }
            </div>
           )
    }

}

export default DishDetail;