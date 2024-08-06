import React, { useState } from 'react';
import "../Pizza/pizaacss.css";

export default function Pizzapro_01() {
    const [name, setName] = useState("");
    const [pizzan, setPizzan] = useState("");
    const [pastan, setPastan] = useState("");
    const [showDataShow, setShowDataShow] = useState(false);
    const [pizza, setPizza] = useState(false);
    const [Pasta, setPasta] = useState(false);
    const [showExitPage, setShowExitPage] = useState(false);

    const handleSubmit = () => {
        setPizza(true);
    }

    const handlePasta = () => {
        setPasta(true);
    }

    const handleExit = () => {
        setShowExitPage(true);
    }

    const handleClick = () => {
        localStorage.setItem("user", JSON.stringify({ name, pizzan, pastan }));

        setShowDataShow(true);
    }

    return (
        <div className='maincontainer'>
            <div className='backimg'>
                <div className='menubtn'>
                    <button className='mybtn' onClick={handleSubmit}>PIZZA</button>
                    <button className='mybtn' style={{ marginRight: "70%" }} onClick={handlePasta} >PASTA</button>
                    <button className='mybtn' style={{ marginRight: "30px" }} onClick={handleExit}>EXIT  →</button>
                </div>
                {pizza && <div className='cards1'>
                    <div className='cardsA'>
                        <img className='cardimg' src="src/img/pizza2.jpg" alt="" />
                        <h3 className='pizzaname'style={{paddingLeft:"60px"}}>Italian pizza</h3>
                        <p className='pizzaname'>Lorem, ipsum dolor <br></br>
                            sit amet consectetur <br></br>
                            adipisicing elit.<br></br>
                        </p>
                    </div>
                    <div className='cardsA'>
                        <img className='cardimg' src="src/img/pizza4.avif" alt="" />
                        <h3 className='pizzaname' style={{paddingLeft:"60px"}}>Margherita</h3>
                        <p className='pizzaname'>Lorem, ipsum dolor <br></br>
                            sit amet consectetur <br></br>
                            adipisicing elit.<br></br>
                        </p>
                    </div>
                    <div className='cardsA'>
                        <img className='cardimg' src="src/img/italian.jpg" alt="" />
                        <h3 className='pizzaname' style={{paddingLeft:"60px"}}>italian pizza</h3>
                        <p className='pizzaname'>Lorem, ipsum dolor <br></br>
                            sit amet consectetur <br></br>
                            adipisicing elit.<br></br>
                        </p>
                    </div>
                </div>}
                {Pasta &&
                    <div className='pcards'>
                        <div className='pastacards'>
                            <img className='cardimg' src="src/img/pasta1.jpg" alt="" />
                            <h3 className='pizzaname' style={{paddingLeft:"60px"}}>pasta</h3>
                            <p className='pizzaname'>Lorem, ipsum dolor <br></br>
                                sit amet consectetur <br></br>
                                adipisicing elit.<br></br>
                            </p>
                        </div>
                        <div className='pastacards'>
                            <img className='cardimg' src="src/img/pasta3.jpg" alt="" />
                            <h3 className='pizzaname' style={{paddingLeft:"60px"}}>pasta</h3>
                            <p className='pizzaname' >Lorem, ipsum dolor <br></br>
                                sit amet consectetur <br></br>
                                adipisicing elit.<br></br>
                            </p>
                        </div>
                        <div className='pastacards'>
                            <img className='cardimg' src="src/img/pasta2.jpg" alt="" />
                            <h3 className='pizzaname' style={{paddingLeft:"60px"}}>pasta</h3>
                            <p className='pizzaname'>Lorem, ipsum dolor <br></br>
                                sit amet consectetur <br></br>
                                adipisicing elit.<br></br>
                            </p>
                        </div>
                    </div>}
            </div>
            <div className='validation'>
                <div className='form'>
                    <label>Enter Name:</label>
                    <input className='input1' type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} /><br></br><br></br>
                    <label>Pizza order Number:</label>
                    <input className='input1' type="number" onChange={(e) => setPizzan(e.target.value)} /><br></br><br></br>
                    <label>Pasta order Number:</label>
                    <input className='input1' type="number" onChange={(e) => setPastan(e.target.value)} /><br></br><br></br>
                    <button onClick={()=>{{pizzan>=5||pastan > 5 ? "" : handleClick()}}} className='mybtn' style={{ marginLeft: "160px", marginTop: "3%" }}>submit</button>
                </div>
                <span style={{color:"black", marginTop: "15%", fontSize:"30px" ,fontfamily: "Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
}}>{pizzan>=5||pastan > 5 ? " You can't order more than 5 items" : " "}</span>{}
                <div className={`datashow ${showDataShow ? 'show' : ''}`}>
                    <h3 style={{ paddingLeft: "10px", border:"none" }}>Wel-Come 👋{name}</h3>
                    <h4>your pizza's total amount:       {Number(pizzan) * 10.99}</h4><br></br>
                    <span style={{color:"orange"}}>{pizzan>=2? "*Congratulations !! 1.5lt softdrink free * ": ""}</span>
                    
                    <hr style={{ width: "90%", marginLeft: "5px" }}></hr>
                    <h4>your pizza's total amount:       {Number(pastan) * 9.5}</h4><br></br>
                    <span style={{color:"orange"}}>{pastan>=2? "		 * Congratulations !! get 2 bruschetta free *": ""}</span>
                    <hr style={{ width: "90%", marginLeft: "5px" }}></hr>
                    <h4>your total amount is            { Math.round(Number(pizzan) * 10.99+  Number(pastan) * 9.5) }</h4>
                    <hr style={{ width: "90%", marginLeft: "5px" }}></hr>
                    <h2>THANK YOU! ! ! !</h2>
                </div>
            </div>
            {showExitPage && (
                <div className='exitpage'>
                    {/* Content of your exit page */}
                </div>
            )}
        </div>
    );
}
