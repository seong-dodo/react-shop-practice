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

           <tbody >
           {
            
            props.state.map (function(상품) {          
               return(

                    <tr>
                      <td> { 상품.id } </td>
                      <td> { 상품.name } </td>
                      <td> { 상품.quan } </td>
                      <td> { 상품.price }</td>
                      <td>Table cell</td>
                    </tr>
               )
                 
            }) 
          }
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