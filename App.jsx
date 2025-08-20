import{Component} from "react";
import Clock from "./components/clock/index.jsx"
import "./App.css"
class App extends Component{
  state={
    isShow:true
  }


  togglebtn=()=>{
   this.setState({
    isShow:!this.state.isShow
   })
  }

  render(){
    const {isShow}=this.state
    console.log(this.state.isShow)
    return(
      
      <div className="background">
        <button className="btn" onClick={this.togglebtn}>
              {isShow? "Hide":"show"}
          </button>
          {isShow && <Clock />}
      </div>
    )
  }

}
export default App;