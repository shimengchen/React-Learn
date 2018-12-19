import React,{Component} from 'react'
import './App.css';
import NameCard from './component/nameCard'
import LikesButton from './component/LikesButton'
import DigitalClock from './component/DigitalClock'
import ComponentBox from './component/ComponentBoxControled'
import GuestBook from './component/GuestBook'

 const tags=['天才少女','躺鸡专业户'];
class App extends Component{
    render(){
        return (<div className="App">
            <NameCard name="viking" number={18284548644} isHuman={true} tags={tags}/>
            <LikesButton/>
            <DigitalClock/>
            <ComponentBox/>
            <GuestBook/>
        </div>);
    }
}
export default App;