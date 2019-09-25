import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//imported npm react-tabs for Tabview
import {
    Tabs,
    TabList,
    Tab,
    TabPanel
} from 'react-tabs';

import Box from './Components/Box.jsx';
require('./style.css');

class Header extends Component {
    constructor(props) {
        super(props);
            this.state = {
                boxes : [],
                selectedColor: "red", 
                selectedId: null,
                incrementedId: 0
        }
    }
//increment function to increase the amount of boxes by using prevState 
    addFunc = () => {
        this.setState((prevState) => {
            return {
                boxes: [...prevState.boxes, {color: prevState.selectedColor, id:prevState.incrementedId}],
                incrementedId: prevState.incrementedId + 1
            }
        });
    }
//decrement function to reduce the amount of boxes
    deleteFunc = () => {
        if(this.state.selectedId === null) {
            this.setState((prevState) => {
            let currentBoxes = prevState.boxes;
                currentBoxes.pop()
                return {
                    boxes: currentBoxes
                }
            })
        } else {
                this.setState((prevState) => {
                        return {
                            boxes: prevState.boxes.filter((currentBox) => currentBox.id !== prevState.selectedId)

                    }
               }
            )}
        }


    selectBox = (id) => {
        this.setState((prevState) => {
            return {
                selectedId: id 
            }
        });
    }

//function for changing the color of box to red
    colorRed = () => {
        this.setState(() => {
            return {
                selectedColor: 'red'
            }
        })
    }
//function for changing the color of box to blue
    colorBlue = () => {
        this.setState(() => {
            return {
                selectedColor: 'blue'
            }
        })
    }

    boxColor = () =>{
        this.setState.color();
    }
//here we pass the element to be rendered

render() {
    return (
        <div>
        {/*defined tabs, tablist and tab panel below with their elements and props*/}
            <Tabs>
                {/*Tablist for headers with titles*/}
                <TabList>
                    <Tab>Home</Tab>
                    <Tab>Screen 1</Tab>
                    <Tab>Screen 2</Tab>
                </TabList>

{/*TabPanel-1 for adding boxes*/}
                <TabPanel className="Home">
                    <div>
                        <p>
                            <button onClick={this.addFunc} id="btnAdd">Add</button>
                            <button onClick={this.deleteFunc} id="btnDelete">Delete</button>
                            <br />
                        </p>
                        <br />
                        <br />
                        <hr />

                        {/*Accesing Box component in index.js with state*/}
                        <Box
                            selectBox = {this.selectBox} 
                            count = {this.state.boxes}
                            selectedId = {this.state.selectedId}
                            />
                       
                        {/*Footer for tab1*/}
                        <div className="footer">
                            There are <span>{this.state.boxes.length}</span> boxes.
                        </div>
                    </div>
                </TabPanel>

{/*TabPanel-2 for changing the box colors*/}
                <TabPanel id="Screen1">
                    <div>
                        <p>
                            <button onClick={this.colorRed} id="btnRed">Red</button>
                            <button onClick={this.colorBlue} id="btnBlue">Blue</button>
                        </p>
                        <br />
                            <Box selectBox={()=>null} count= {[{color: this.state.selectedColor, id: 0 }]} />
                        

                        {/*Footer for tab2*/}
                        <div className="footer">Current color is <span>{this.state.selectedColor}</span>.</div>
                    </div>
                </TabPanel>

{/*TabPanel-3 for displaying the info of Home & Screen1 */}
                <TabPanel id="Screen2">
                    <h3>User Preferences</h3>
                    <hr />
                    <div className="info">
                        <p>There are <span>{this.state.boxes.length}</span> boxes.</p>
                        <p>Current color is <span>{this.state.selectedColor}</span>.</p>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
        )}
};

ReactDOM.render(<Header />, 
    document.getElementById('root'))
