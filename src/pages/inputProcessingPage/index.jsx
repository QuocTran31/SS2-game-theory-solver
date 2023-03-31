// Phuc
import React from 'react'
import "./style.scss"
import { useNavigate } from 'react-router'
export default function InputProcessingPage() {
    const navigate = useNavigate();
    const handleSolveNow = () => {
        navigate('/result')
    }
    const data = {
        problem: {
            name: "Oil Price Problem",
            players: [
                {
                    name: "Player 1",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        },
                        {
                            name: "Strategy 3"
                        },
                        {
                            name: "Strategy 4"
                        }
                    ]
                },
                {
                    name: "Player 2",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        },
                        {
                            name: "Strategy 3"
                        },
                        {
                            name: "Strategy 4"
                        }
                    ]
                },
                {
                    name: "Player 3",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        },
                        {
                            name: "Strategy 3"
                        },
                        {
                            name: "Strategy 4"
                        }
                    ]
                },
                {
                    name: "Player 4",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        }
                    ]
                },
                {
                    name: "Player 5",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        }
                    ]
                },
                {
                    name: "Player 6",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        },
                        {
                            name: "Strategy 3"
                        },
                        {
                            name: "Strategy 4"
                        },
                        {
                            name: "Strategy 5"
                        }
                    ]
                },
                {
                    name: "Player 7",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        },
                        {
                            name: "Strategy 3"
                        }
                    ]
                },
                {
                    name: "Player 8",
                    strategies: [
                        {
                            name: "Strategy 1"
                        }
                    ]
                },
                {
                    name: "Player 9",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        },
                        {
                            name: "Strategy 3"
                        }
                    ]
                },
                {
                    name: "Player 10",
                    strategies: [
                        {
                            name: "Strategy 1"
                        },
                        {
                            name: "Strategy 2"
                        },
                        {
                            name: "Strategy 3"
                        }
                    ]
                }
            ]

        }
    }
    return (
        <div className='input-processing-page'>
            <h1 className ="Problem">Oil Price Problem</h1>
            <button className= "click" onClick={handleSolveNow}>Solve now</button>
            <p className ="playerNum">20 players</p>
            <div className ="scrollBar">
                <div className ="contend">
                    <p className="name1">Oil Producing country A</p>
                    <p className= "name1">3 Strategy</p>
                    <label for="btn">
                        <span className="fas fa-caret-down name1"></span>
                    </label>
                    <input type="checkbox" name="btn" id="btn" className='input' />
                    <div className = "menubar">
                    <ul>    
                            <li>
                                <p>Stratey 1: Lower the price</p>
                            </li>
                            <li>
                                <p>Stratey 2: higher the price</p>
                            </li>
                            <li>
                                <p>Stratey 3: remain the price</p>
                            </li>
                    </ul>
                    </div>
                </div>
                        
                <div className ="contend">
                    <p className="name1">Oil Producing country B</p>
                    <p className= "name1">5 Strategy</p>
                    <label for="btn1">
                        <span className="fas fa-caret-down name1"></span>
                    </label>
                    <input type="checkbox" name="btn" id="btn1" className='input' />
                    <div className = "menubar">
                    <ul>    
                            <li class = "divcon">
                                <p>Stratey 1: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 2: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 3: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 4: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 5: bla bla the price</p>
                            </li>
                    </ul>
                    </div>        
                </div>
                <div className ="contend">
                    <p className="name1">Oil Producing country C</p>
                    <p className= "name1">5 Strategy</p>
                    <label for="btn2">
                        <span className="fas fa-caret-down name1"></span>
                    </label>
                    <input type="checkbox" name="btn" id="btn2" className='input' />
                    <div className = "menubar">
                    <ul>    
                            <li className = "divcon">
                                <p>Stratey 1: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 2: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 3: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 4: bla bla</p>
                            </li>
                            <li>
                                <p>Stratey 5: bla bla the price</p>
                            </li>
                    </ul>
                    </div>        
                </div>
            </div>
        </div>
    )
}