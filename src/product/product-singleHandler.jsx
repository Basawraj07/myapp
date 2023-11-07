import React,{Component} from 'react'

class Product1 extends Component{
    state={
        product:{
            name:'lenevo',
            price:20000,
            qty:1,
            image:'https://rukminim2.flixcart.com/image/224/224/xif0q/computer/n/i/e/15amn7-thin-and-light-laptop-lenovo-original-imagsvykgkecffgr.jpeg?q=90'

        }
    }

    updatesingleHandler(value){
        this.setState({
            product:{

                ...this.state.product,qty:this.state.product.qty + value
            }
        })
    }

render(){
    return <div className='container'>
    <pre>{JSON.stringify(this.state.product)}</pre>

    <div className='row'>
    <div className='col-8'>
    <table className='table'>
    <thead>
    <th>Name</th>
    <th>price</th>
    <th>image</th>
    <th>qty</th>
    <th>Total price</th>

    </thead>
    
    <tbody> 
    <tr>
    <td>{this.state.product.name}</td>
    <td>{this.state.product.price}</td>
    <td><img width="100px" src={this.state.product.image} alt=""/></td>
    <td><i onClick={this.updatesingleHandler.bind(this,-1)} className='fa fa-minus-circle'></i>{this.state.product.qty}<i onClick={this.updatesingleHandler.bind(this,+1)} className='fa fa-plus-circle'></i></td>
   <td>{this.state.product.price * this.state.product.qty}</td>

    </tr>
    </tbody>
    </table>
    </div>
    
    </div>
    
    </div>
}

}
export default Product1 