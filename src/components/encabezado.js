import React,{Component} from 'react';
import "../estilo/style.css";
class Encabezado extends Component{
    render(){
        return(
            <div className="encabezado">
                <h2>Join our community</h2>
                <p className="subtitle">30-days, hassle-free money back guarantee</p>
                <p className="text">Gain acces to our full library of tutorials along with expert 
                    code reviews. Perfect for any developers who are serious about
                     honing their skills.
                </p>
            </div>
        )
    }
}

export default Encabezado