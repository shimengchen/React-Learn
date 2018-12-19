import React from 'react'
class ComponentBox extends React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
        console.log("长度"+this.props.commentsLength);
    }
    handleSubmit(event){
        //调用父元素的onAddComment方法，穿入留言框的内容
        this.props.onAddComment(this.textInput.value);
        //提交后清空评论
        this.textInput.value='';
        //阻止默认跳转
        event.preventDefault();
    }
    render(){
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
            <div className="form-group">
            <label>留言内容</label>
            <input type='text'
            className="form-control" 
            placeholder="请输入内容"
            ref={(textInput)=>{this.textInput=textInput}}>
            </input>
            </div>
            <button type="submit" className="btn btn-primary">留言</button>
            {console.log(this.props.commentsLength)}
            <p>已有{this.props.commentsLength}条评论</p>
            </form>
        );
    }
}

export default ComponentBox;