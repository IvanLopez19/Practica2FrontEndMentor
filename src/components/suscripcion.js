import React,{Component} from 'react';
import '../estilo/style.css';

class Suscripcion extends Component{
    render(){
        return(
            <div className="suscripcion">
                <h2>Montly Suscription</h2>
                <div className="precio">$29</div><p> per month</p>
                <p>Full acces for less than $1 a day</p>
                <div className="button">Sign-Up</div>
            </div>
        )
    }
}

export default Suscripcion;