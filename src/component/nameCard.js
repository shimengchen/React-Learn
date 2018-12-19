import React from 'react'

class NameCard extends React.Component{
    render(){
        const {name,number,isHuman,tags}=this.props;

        return (
            <div className="alert alert-success">
                <h4>{name}</h4>
                <ul>
                    <li>电话：{number}</li>
                    <li>{isHuman?'人类':'外形生物'}</li>
                    <hr/>
                    <p>
                        {tags.map((tag,index)=>(
                            <span class="badge badge-pill badge-primary" key={index}>{tag}</span>
                        ))}
                    </p>                    
                </ul>
            </div>
        );
    }
}

export default NameCard