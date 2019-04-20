import React from 'react';
import { Modal, Form } from 'antd';
import DataContext from './common/DataContext';
import ModalContent from './ModalContent';

class ExampleModal extends React.PureComponent {
    handleCancel = () => {
        const { onCancel } = this.props;
        if (onCancel) onCancel();
    };
    render() {
        const { visible, form, loading, isView, current } = this.props;
        return (
            <Modal title={null} footer={null} visible={visible} width={800} onCancel={this.handleCancel} bodyStyle={{ padding: 0, minHeight: 200 }}>
                <DataContext.Provider value={{ form, isView, current }}>
                    <ModalContent loading={loading} />
                </DataContext.Provider>
            </Modal>
        );
    }
}

export default Form.create()(ExampleModal);
