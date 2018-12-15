import React,{Component} from 'react'
import Button from 'antd/lib/button'
import './App.css';

class App extends Component{
  constructor(props) {
      super(props);
      this.state={isLoggedIn:false};
      this.handleLoginClick=this.handleLoginClick.bind(this);
      this.handleLogoutClick=this.handleLogoutClick.bind(this);
      
  }
  handleLoginClick(){
      this.setState({isLoggedIn:true});
  }
  handleLogoutClick(){
      this.setState({isLoggedIn:false});
  }
  render(){
      const isLoggedIn=this.state.isLoggedIn;
      let button;
      if(isLoggedIn){
          button=<LogoutButton onClick={this.handleLogoutClick}/>
      }else{
          button=<LoginButton onClick={this.handleLoginClick}/>;
      }
      return (
          <div>
              <Greeting isLoggedIn={isLoggedIn}/>
              {button}
          </div>
      );
  }
}
function LoginButton(props){
  return <Button type="primary" onClick={props.onClick}>登录</Button>;
}
function LogoutButton(props){
  return <Button type="primary" onClick={props.onClick}>退出</Button>;
}
function UserGreeting(props){
  return <h1>欢迎回来</h1>;
}
function GuestGreeting(props){
  return <h1>请先注册</h1>;
}
function Greeting(props){
  const isLoggedIn=props.isLoggedIn;
  if(isLoggedIn){
      return <UserGreeting/>
  }else{
      return <GuestGreeting/>
  }
}

export default App