import React from 'react';
import styled from 'styled-components';

const Container = styled.h1`
    padding: 40px;
`;

const Title = styled.h1`
    color: #62a4f1;
    font-size: 20px;
`;

const Content = styled.h1`
    color: #000;
    font-size: 14px;
`;

class ModalContent extends React.PureComponent {
    render() {
        const { content } = this.props;
        return (
            <Container>
                <Title>检测结果:</Title>
                <Content>{content}</Content>
            </Container>
        );
    }
}

export default ModalContent;
