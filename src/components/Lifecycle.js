import React, { Component } from 'react'

class Life extends Component {
    //1 get default this.props.

    //2 get default state
    state = {
        title : "Life cycle"
    }

    //3 before render
    componentWillMount(){
        console.log("3 before render");
        //document.querySelector('h3').style.color='red';
    }

    componentWillUpdate(){
        console.log("Before Update");
    }

    componentDidUpdate(){
        console.log("After Update");
    }

    shouldComponentUpdate(nextProps, nextState){
        if(nextState.title === 'something else')
            return false;

        return true;
    }

    componentWillReceiveProps(){
        console.log('Before recieve props');
    }

    componentWillUnmount(){
        console.log("Unmount");
    }

    //4 render jsx
  render() {
    return (
      <div>
          <h3>{this.state.title}</h3>
          <div onClick={() =>{
              this.setState({
                  title:"something else"
              })
          }}>Click to change</div>
      </div>
    )
  }

  //5 after render
  componentDidMount(){
      console.log("5 after render");
      document.querySelector('h3').style.color='red';
  }
}

export default Life;