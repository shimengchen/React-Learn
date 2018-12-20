import React,{Component} from 'react'
import './App.css';
import NameCard from './component/nameCard'
import LikesButton from './component/LikesButton'
import DigitalClock from './component/DigitalClock'
import ComponentBox from './component/ComponentBoxControled'
import GuestBook from './component/GuestBook'
import ThemeContext from './theme-context'
import ThemeBar from './component/ThemeBar'

const themes={
    light:{
        className:'btn btn-primary',
        bgColor:'#eeeeee',
        color:'#000'
    },
    dark:{
        className:'btn btn-light',
        bgColor:'#222222',
        color:'#fff'
    }
}

 const tags=['天才少女','躺鸡专业户'];
class App extends Component{
    constructor(props){
        super(props);
        this.state={
            theme:'light'
        }
        this.changeTheme=this.changeTheme.bind(this);
    }
    changeTheme(theme){
        this.setState({
            theme
        });
    }
    render(){
        return (
            <ThemeContext.Provider value={themes[this.state.theme]}>
        <div className="App">
            <NameCard name="viking" number={18284548644} isHuman={true} tags={tags}/>
            <LikesButton/>
            <DigitalClock/>
            <ComponentBox/>
            <GuestBook/>
            <a href="#theme-switcher" className="btn btn-light" onClick={()=>{this.changeTheme('light')}}>浅色主题</a>
            <a href="#theme-switcher" className="btn btn-secondary" onClick={()=>{this.changeTheme('dark')}}>深色主题</a>
            <ThemeBar/>
        </div>
        </ThemeContext.Provider>);
    }
}
export default App;