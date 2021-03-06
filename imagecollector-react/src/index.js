import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import './index.css'

class ContentFeed extends Component {
  constructor() {
    super();
    this.state = {
      'items' : []
    }
    this.getItems = this.getItems.bind(this)
  }
  componentDidMount() {
    this.getItems();
  }

  getItems() {
    fetch('http://127.0.0.1:4200/api/')
    .then(res => res.json())
    .then(res => this.setState({'items': res}) );
  }
  render() {
    return (
         <div className="wrapper">
           <div className="container">
              <div className="row">

              </div>
              <div className="row">
                <h4 className="text-center heading alert col-sm-6 offset-sm-3">Our Image Gallery</h4>
                <hr />
                  {this.state.items.map(function(item, index){
                    return (
                          <ContentItem item={item} key={index} />
                    );
                   }
                  )}
              </div>
           </div>
         </div>
    );
  }
}

class ContentItem extends Component {
  constructor() {
    super();
    this.state = {
      'url' : []
    }
    this.getlink = this.getlink.bind(this)
  }
  componentDidMount() {
    this.getlink();
  }
  getlink(){
    var link = 'http://127.0.0.1:4200' + this.props.item.photo;
    this.setState({'url':link});
  }

  render() {
    return (
          <div className="col-md-6 col-lg-4 mt-3">
            <Card className="cardmar">
              <CardImg top width="100%" src={this.state.url} height="250px" alt={this.props.item.title} />
              <CardBody>
                <CardTitle>
                  <h5>{this.props.item.title}</h5>
                </CardTitle>
                <CardText>
                    {this.props.item.description}<br />
                    <b>Uploaded by : {this.props.item.name}</b><br />
                    {this.props.item.date}
                </CardText>
              </CardBody>
            </Card>
          </div>
    );
  }
}


ReactDOM.render(
  <ContentFeed />,
  document.getElementById('root')
);
