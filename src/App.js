import React, {Component} from "react";
import Cardlist from "./Components/Cardlist/Cardlist";
import { robots } from "./Assets/Robot_users/Robots";
import Navbar from "./Components/Navbar/Navbar";

class App extends Component{
    constructor(){
        super()
        this.state = {
            robots:robots, 
            searchField:'',
            
        }
    }
    // function to set searchfield state
    onSearchChange=(event)=>{
        this.setState({searchField:event.target.value});
    }

    render(){
        const filteredRobots = robots.filter((robot, i)=>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        })

        return(
            <div>
                
                <Navbar search_change={this.onSearchChange}/>
                
                <Cardlist robots={filteredRobots}/>
                
            </div>
        )
    }
}

export default App
