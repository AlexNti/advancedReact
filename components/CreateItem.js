import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import Form from "./styles/Form";
import formatMoney from "../lib/formatMoney";
import Error from './ErrorMessage';
import Router from 'next/router';

const CREATE_ITEM_MUTATION = gql`
 mutation CREATE_ITEM_MUTATION( 
      $title:String!
      $description:String!
      $price:Int!
      $image:String
      $largeImage:String){
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ){
      id
    }

 }
`;

class CreateItem extends Component {
    state = {
        title:'Cool shoes',
        description: '',
        image: '',
        largeImage: '',
        price:0
    };

    handleChange = (e) =>{
      const {name,type,value} = e.target;
      const val = type === 'number' ? parseFloat(value) :value;
      this.setState({[name]:e.target.value})
    }

  render() {
    return (
      <Mutation mutation={CREATE_ITEM_MUTATION} variables={this.state}>
      {(createItem,{loading,error,called,data})=>(
        <Form onSubmit={
          async (e)=>{e.preventDefault(); 
        const res= await createItem();
         Router.push({
           pathname:'/item',
           query:{id:res.data.createItem.id}
         }) }}>
        <Error error={error}></Error>
        <fieldset disabled={loading} aria-busy={loading}>
          <label htmlFor="title">
            Title
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Title"
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
          </label>
        
          <label htmlFor="price">
           price
            <input
              type="number"
              id="price"
              name="price"
              placeholder="price"
              required
              value={this.state.price}
              onChange={this.handleChange}
            />
          </label>
        
          <label htmlFor="description">
          description
            <textarea
              id="description"
              name="description"
              placeholder="Description"
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit</button>
        </fieldset>
        </Form>
      )}
    </Mutation>


   
    );
  }
}

export default CreateItem;
