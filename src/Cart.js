import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

function 총액계산(수량, 가격){
 return(
     수량 * 가격
 )
}


function Cart(props){

    return (
    <div>


       <Table responsive="sm">
           <thead>
             <tr>
               <th>#</th>
               <th>상품명</th>
               <th>수량</th>
               <th>가격</th>
               <th>총 금액</th>
               <th>변경</th>
             </tr>
           </thead>

           <tbody >
           {
            
            props.state.map ( (a,i)=> {          
               return(
                    <tr key={i}>
                      <td> { a.id } </td>
                      <td> { a.name } </td>
                      <td> { a.quan } </td>
                      <td> { a.price }</td>
                      <td> {      a.quan>=5
                      ?  a.quan * a.price * 0.5
                      :  a.quan * a.price }  </td>
                      <td>
                         <button onClick={ ()=>{ props.dispatch( { type : '수량감소', id : i } ) } } > - </button> 
                         <button onClick={ ()=>{ props.dispatch( { type : '수량증가', id : i } ) } } > + </button> 
                      </td>
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