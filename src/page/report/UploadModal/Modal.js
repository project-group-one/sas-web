import React from "react";
import { inject, observer } from "mobx-react";
import { Modal, Form, Spin, message } from "antd";
import DataContext from "./common/DataContext";
import ModalContent from "./ModalContent";

@inject("reportStore", "userStore")
@observer
class ExampleModal extends React.PureComponent {
  handleCancel = () => {
    if (this.props.onCancel) this.props.onCancel();
  };

  handleSubmit = () => {
    const {
      form,
      isEdit,
      userStore: { organization }
    } = this.props;
    form.validateFieldsAndScroll(async (errors, value) => {
      if (errors) return;
      if (isEdit) {
      } else {
        let path = "";
        if (Array.isArray(value.path) && value.path.length > 0) {
          if (value.path[0].response) {
            path = value.path[0].response.data;
          }
        }
        if (!path) return message.warn("请先等待上传完成！", 2);
        value.path = path;
        value.orgId = organization.id;
        this.props.reportStore.createReport(value);
      }
      this.handleCancel();
    });
  };

  render() {
    const {
      visible,
      form,
      loading,
      addLoading,
      updateLoading,
      isEdit,
      current
    } = this.props;
    return (
      <Modal
        visible={visible}
        onCancel={this.handleCancel}
        title={isEdit ? "编辑检测报告" : "上传检测报告"}
        confirmLoading={isEdit ? updateLoading : addLoading}
        width={800}
        bodyStyle={{ padding: 0, minHeight: 200 }}
        onOk={this.handleSubmit}
      >
        <Spin spinning={loading}>
          <DataContext.Provider value={{ form, isEdit, current }}>
            <ModalContent />
          </DataContext.Provider>
        </Spin>
      </Modal>
    );
  }
}

ExampleModal.defaultProps = {
  loading: false,
  current: {}
};

export default Form.create()(ExampleModal);
