import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';


function Cart(props){

    return (
    <div>


       <Table responsive="sm">
           <thead>
             <tr>
               <th>#</th>
               <th>상품명</th>
               <th>수량</th>
               <th>금액</th>
               <th>변경</th>
             </tr>
           </thead>
           <tbody>
             <tr>
               <td> { props.state[0].id } </td>
               <td> { props.state[0].name } </td>
               <td> { props.state[0].quan } </td>
               <td> { props.state[0].price }</td>
               <td>Table cell</td>
             </tr>
             <tr>
             <td> { props.state[1].id } </td>
               <td> { props.state[1].name } </td>
               <td> { props.state[1].quan } </td>
               <td> { props.state[1].price }</td>
               <td>Table cell</td>
             </tr>
           </tbody>
         </Table>

    </div>
    )

}

function state를props화(state) {
 return {
     state : state
 }
}

export default connect (state를props화)(Cart)





// export default Cart;