import React from "react";
import { NavLink, BrowserRouter as Router, Route, Switch  } from "react-router-dom";
import img1 from "./1.jpg";
import img2 from "./2.jpg";
import img3 from "./3.jpg";
import main from "./mik.jpg";

export function page1(props) {
  return (
    <div className="card" style={{width: "18rem"}} >
      <img src={main} className="card-img-top" alt="mik" style={{width:"100%"}}></img>
      <div className="card-body">
        <h5 className="card-title">Микеланджело Буонарроти</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
            <div className="d-flex flex-column">
                <b>Имя при рождении:</b>
                <p>{props.match.params.name} di Lodovico Buonarroti Simoni</p>
            </div>
        </li>

        <li className="list-group-item">
            <div className="d-flex flex-column">
                <b>Дата рождения	:</b>
                <p>6 марта 1475</p>
            </div>
        </li>

        <li className="list-group-item">
            <div className="d-flex flex-column">
                <b>Место рождения:</b>
                <p>Капрезе-Микеланджело, близ Ареццо, Флорентийская республика</p>
            </div>
        </li>

        <li className="list-group-item">
            <div className="d-flex flex-column">
                <b>Дата смерти:</b>
                <p>18 февраля 1564 (88 лет)</p>
            </div>
        </li>
      </ul>
    </div>
  );
}

export function page2(props){
    return(
        <img src={img1} width="500" alt={props.match.params.title}></img>
    )
}

export function page3(props){
    return(
        <div>
            <img src={img1} width="300" alt={props.match.params.count}></img>
            <img src={img2} width="300" alt={props.match.params.count}></img>
            <img src={img3} width="300" alt={props.match.params.count}></img>
        </div>
    )
}

export function NavMenu(){
    return (
        <div>
            <NavLink to='/page1/Michelangelo' className="link m-2">Page1</NavLink>
            <NavLink to='/page2/Фреска-Страшный-суд' className="link m-2">Page2</NavLink>
            <NavLink to='/page3/3' className="link m-2">Page3</NavLink>
            <hr></hr>
        </div>
    )
}
export default function Example1(){
    return(
        <div>
            <Router>
            <NavMenu></NavMenu>
                <Switch>
                    <Route path='/page1/:name?' component={page1}></Route>
                    <Route path='/page2/:title?' component={page2}></Route>
                    <Route path='/page3/:count?' component={page3}></Route>
                </Switch>
            </Router>

        </div>
    )
}