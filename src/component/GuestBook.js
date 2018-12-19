import React from 'react'
import CommnentList from './CommentList'
import ComponentBoxUncontriled from './ComponentBoxUncontriled'

class GuestBook extends React.Component{
    constructor(props){
        super(props);
        this.state={
            comments:['this is very good!']
        }
        this.addComment=this.addComment.bind(this);
        this.deleteComment=this.deleteComment.bind(this);
    }

    addComment(comment){
        this.setState({
            comments:[...this.state.comments,comment]
        });
    }

    deleteComment(deleteIndex){
        this.state.comments.splice(deleteIndex,1);
        this.setState({
            comments:this.state.comments
        });
    }
    render(){
        const {comments}=this.state;
        return (
            <div>
                <CommnentList comments={comments} onDeleteComment={this.deleteComment}/>
                <ComponentBoxUncontriled commentsLength={comments.length}
                onAddComment={this.addComment}/>
            </div>
        )
    }
}
export default GuestBook;