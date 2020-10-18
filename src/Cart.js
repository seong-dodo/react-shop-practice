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
                         <button onClick={ ()=>{ props.dispatch( { type : '수량감소', 데이터 : a.id } ) } } > - </button> 
                         <button onClick={ ()=>{ props.dispatch( { type : '수량증가', 데이터 : a.id } ) } } > + </button> 
                      </td>
                    </tr>
               )               
            }) 
          }
        </tbody>
           
             
         </Table>
        {  props.alert열렸니 === true
           ? <div className="my-alert-yellow">
                <p>
                  지금구매하시면 신규할인 20%
                </p>
                <button onClick={ ()=>{ props.dispatch( { type : 'alert닫기' }) } }> X </button>
            </div>
          : null
        }

    </div>
    )

}

function state를props화(state) {
    console.log(state);
    return {
     state : state.reducer,
     alert열렸니 : state.reducer2
 }
}

export default connect (state를props화)(Cart)





// export default Cart;