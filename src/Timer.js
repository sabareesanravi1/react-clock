import React, { Component } from 'react';
import Switch from '@material-ui/core/Switch';


class TimeComponent extends Component {
 
    
  constructor(props){
    super(props);
    this.state = { time: (new Date()).toLocaleTimeString(),checkedTime:false,toggleChecked :() => {
            if(this.checkedTime===true) this.checkedTime=false;
            else this.checkedTime = true;
          }};

  }
  render(){
    return(
        <div>
      <p style={{fontSize:'100px',backgroundColor:'#fe4365',fontFamily:'Brush Script MT'}}> 
          { this.state.time } </p>   
        </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => this.setState({ time: (new Date()).toLocaleTimeString() }), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default TimeComponent;