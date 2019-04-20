import React, { Component, Fragment } from 'react';
import { observer, inject } from 'mobx-react';
import { List, Divider, Pagination, Button } from 'antd';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import UploadModal from './UploadModal';
import CheckModal from './CheckModal';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
`;
const Extra = styled.div``;

const Title = styled.h1`
    font-size: 1.5em;
    color: #105274;
`;

@inject('newsStore')
@observer
class ListPagination extends Component {
    state = {
        visible: false,
        resultModalVisible: false,
    };
    componentDidMount() {
        this.props.newsStore.getNewsList();
    }

    handleCancel = () => {
        this.setState({ visible: false });
    };
    handleCheckModalCancel = () => {
        this.setState({ resultModalVisible: false });
    };
    render() {
        const {
            newsStore: { data, queryParams },
        } = this.props;
        const { visible, resultModalVisible } = this.state;
        const { current, pageSize } = queryParams;
        const paginationProps = {
            current,
            pageSize,
        };

        return (
            <Fragment>
                <Divider style={{ height: 6, margin: '2px 0', background: '#49a4f8' }} />
                <List
                    header={
                        <Header>
                            <Title>抽检报告</Title>
                            <Extra>
                                <Button onClick={() => this.setState({ visible: true })}>上传抽检报告</Button>
                            </Extra>
                        </Header>
                    }
                    footer={<Pagination {...paginationProps} />}
                    dataSource={data.slice()}
                    renderItem={(item) => (
                        <List.Item actions={[<a onClick={() => this.setState({ resultModalVisible: true })}>查看检测结果</a>]}>
                            <List.Item.Meta title={<Link to={`/news/${item.id}`}>{item.title}</Link>} />
                        </List.Item>
                    )}
                />
                <UploadModal onCancel={this.handleCancel} key={visible.toString()} visible={visible} />
                <CheckModal onCancel={this.handleCheckModalCancel} key={resultModalVisible.toString()} visible={resultModalVisible} />
            </Fragment>
        );
    }
}

export default ListPagination;
