import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Input, Button } from "antd";

@inject("userStore")
@observer
class VerifyCode extends Component {
  static defaultProps = {
    placeholder: "请输入验证码",
    phone: undefined,
    value: undefined,
    onChange: () => {}
  };

  state = {
    fetching: false,
    countdown: 60
  };

  timer = null;

  handleCountDown() {
    this.timer = setTimeout(() => {
      const { countdown } = this.state;
      if (countdown === 0) {
        clearTimeout(this.timer);
        this.setState({ fetching: false });
        return;
      }
      this.setState({ countdown: countdown - 1 });
      this.handleCountDown();
    }, 1000);
  }

  handleClick() {
    const { phone, userStore } = this.props;
    this.setState({ fetching: true });
    this.handleCountDown();
    userStore.getVerifyCode(phone);
  }

  renderAfter() {
    const { fetching, countdown } = this.state;

    if (fetching) {
      return <span>{countdown}</span>;
    }

    return <Button onClick={() => this.handleClick()}>获取验证码</Button>;
  }

  render() {
    const { placeholder, value, onChange } = this.props;

    return (
      <Input
        placeholder={placeholder}
        addonAfter={this.renderAfter()}
        value={value}
        onChange={onChange}
      />
    );
  }
}

export default VerifyCode;