import React,{Component} from 'react';
import '../estilo/style.css';

class About extends Component{
    render(){
        return(
            <div className='about'>
                <h2>Why us</h2>
                <section >
                <p>Tutorials by industry experts</p>
                <p>Peer & expert code review</p>
                <p>Coding excersises</p>
                <p>Acces to our GitHub repos</p>
                <p>Communnity forum</p>
                <p>Flashcard decks</p>
                <p>New videos every week</p>
                </section>
            </div>
        )
    }
}

export default About;