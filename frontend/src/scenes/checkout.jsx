import React from 'react';
import { Table} from 'reactstrap';

export class Checkout extends React.Component{
  render(){
    console.log(this.props.items);
    return(
      <div>
        <Table dark borderless responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Rate</th>
              <th>Quantity</th>
              <th>Total</th>
            </tr>
          </thead>
          {/*<tbody>
            { this.props.items.map((product, index) => {
              return (
                <tr>
                  <th scope='row'>{index+1}</th>
                  <td>{product.label}</td>
                  <td>{product.value}</td>
                  <td>{product.quantity}</td>
                  <td>{product.total}</td>
                </tr>
              )
            })}
          </tbody>*/}
        </Table>
      </div>
    );
  }
}
