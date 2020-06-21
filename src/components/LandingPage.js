import React, { Component } from 'react';
import '../styles/landingpage.css';
import image from '../Images/img.png';
//import QuestionPagePaper from './QuestionPagePaper';
//import ReactDOM from "react-dom";

export default class LandingPage extends Component {
 
   constructor(props){
       super(props);
       this.state={
           examlist:[],
           streamList:[],

       };
       /*this.handleSubmit = this.handleSubmit.bind(this);*/

   }
    /*handleSubmit(event)
    {
        <QuestionPagePaper/>

    }
    */
 
   componentDidMount(){
       fetch('https://www.exambazaar.com/api/coding-round/routes/exam-info/8294029370 ')
       .then((Response)=> Response.json())
       .then((Data)=>{
           console.log(Data.data.exams);
           this.setState({
               examlist:Data.data.exams,
               streamList:Data.data.streams
           });
       })
       .catch((err)=>console.log(err));
   }
 
   render() {
      
       if(this.state.examlist !== [] && this.state.streamList !== []){
           const exams = this.state.examlist.map((exam)=><option value={exam.name}>{exam.name}</option>);
           const streams = this.state.streamList.map((stream)=><option value={stream.name}>{stream.name}</option>);
           return (
               <div>
                   <nav>
                       <label className="logo">EXAMBAZAAR</label>
                           <ul>
                               <li><a className="active" href="#">Home</a></li>
                               <li>
                                   <select name="Exams">
                                       {exams}
                                        
                                   </select>
                               </li>
                               <li><select name="streams">
                                       {streams}
                                   </select></li>
                               <li><a className="active" href="#">Contact</a></li>


                           </ul>
                   </nav>
                   <section>
                       <img src={image} className="background" alt="background" />
                   </section>


               </div>
           );
           }


   }
}
 
 

