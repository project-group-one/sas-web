import React from 'react';
import { Comment, Icon, Tooltip, Avatar } from 'antd';
import moment from 'moment';

class Comments extends React.Component {
    state = {
        likes: 0,
        dislikes: 0,
        action: null,
    };

    like = () => {
        this.setState({
            likes: 1,
            dislikes: 0,
            action: 'liked',
        });
    };

    dislike = () => {
        this.setState({
            likes: 0,
            dislikes: 1,
            action: 'disliked',
        });
    };

    render() {
        const {data} = this.props
        const { likes, dislikes, action } = this.state;
        console.log(data)

        const actions = [
            <span>
                <Tooltip title='Like'>
                    <Icon type='like' theme={action === 'liked' ? 'filled' : 'outlined'} onClick={this.like} />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{likes}</span>
            </span>,
            <span>
                <Tooltip title='Dislike'>
                    <Icon type='dislike' theme={action === 'disliked' ? 'filled' : 'outlined'} onClick={this.dislike} />
                </Tooltip>
                <span style={{ paddingLeft: 8, cursor: 'auto' }}>{dislikes}</span>
            </span>,
            <span>Reply to</span>,
        ];

        return (
            <Comment
                style={{
                    width: 500,
                    margin: '0 auto',
                }}
                // actions={actions}
                author={<a>{data.userName}</a>}
                // avatar={<Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' alt='Han Solo' />}
                content={
                    <p>{data.content}</p>
                }
                datetime={
                    <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                        <span>{data.createDate}</span>
                    </Tooltip>
                }
            />
        );
    }
}

export default Comments;
