import React from 'react'

function CommnentList(props){
    console.log(props.comments);
        return (
            <div className="comment-list-component">
            <label>评论列表</label>
            <ul className="list-group mb-3">
            {
                props.comments.map((comment,index)=>
                <div key={index} className="rows p-2">
                <li className="list-group-item mb-3">{comment}</li>
                <button className="btn btn-warning ml-3 mt-1"
                onClick={props.onDeleteComment.bind(this,index)}>删除</button>
                </div>
                )
            }
            </ul>
            </div>
        )
    }

// class CommnentList extends React.component{

//     render(){
//         const {comments}=this.props;
//         return (
//             <div className="comment-list-component">
//             <label>评论列表</label>
//             <ul className="list-group mb-3">
//             {
//                 comments.map((comment,index)=>
//                 <div key={index} className="rows p-2">
//                 <li className="list-group-item">{comment}</li>
//                 <button onClick={this.props.onDeleteComment(index)}>删除</button>
//                 </div>
//                 )
//             }
//             </ul>
//             </div>
//         )
//     }
// }

export default CommnentList;