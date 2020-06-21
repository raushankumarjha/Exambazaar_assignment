import React from 'react';
import '../styles/question.css';


export default class QuestionPagePaper extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Questionlist:[],
            };
    }
    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: {
                "api_key": "8294029370",
                "api_secret": "5ee9d294ba0cf834c6bc4abe",
                "examId":"58ac2cbe7e852a2c401a8c45"
                
                }
        };
        fetch('https://www.exambazaar.com/api/coding-round/routes/random-question ', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ postId: data._id }));
    }


    render(){
        if(this.state.Questonlistlist !== [] ){
            const ques = this.state.Questionlist.map((question)=><option value={question.name}>{question.name}</option>);
        return(

<div> 
                <header>
  <h1>Exams</h1>
</header>

<section>
  <nav>
    <ul>
      <li><a href="#">Jee Mains</a></li>
      <li><a href="#">Jee Advance</a></li>
      <li><a href="#">Cat</a></li>
    </ul>
  </nav>
  
  <article>
        <h1>Questions</h1>
        <p>{ques}</p>
        
  </article>
  <form>
        <button type="button">PREV</button>
        <button type="button">NEXT</button> 
    </form>
</section>

<footer>
  <p>Footer</p>
</footer>
</div>
    );
        }
    }
    
}
