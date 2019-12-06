import React, { Component, Fragment } from 'react'
import { observer, inject } from 'mobx-react'
import { Form, Input, Upload, Select, Button, Card } from 'antd'
import styled from 'styled-components'
// import { getTimeDistance } from '@/utils/utils';

const FormItem = Form.Item
const { Option } = Select

const AvatarTitle = styled.div`
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    margin-bottom: 8px;
`

const Avatar = styled.div`
    width: 144px;
    height: 144px;
    margin-bottom: 12px;
    overflow: hidden;
`

const AvatarUploadButton = styled.div`
    width: 144px;
    text-align: center;
`

const Right = styled.div`
    padding: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 448px;
    margin-left: 150px;
`

const Left = styled.div`
    max-width: 448px;
    min-width: 280px;
`

// 头像组件 方便以后独立，增加裁剪之类的功能
const AvatarView = ({ avatar }) => (
    <Fragment>
        <AvatarTitle>头像</AvatarTitle>
        <Avatar>
            <img style={{ width: '100%' }} src={avatar} alt="avatar" />
        </Avatar>
        <Upload fileList={[]}>
            <AvatarUploadButton>
                <Button icon="upload">更换头像</Button>
            </AvatarUploadButton>
        </Upload>
    </Fragment>
)

const validatorPhone = (rule, value, callback) => {
    const values = value.split('-')
    if (!values[0]) {
        callback('Please input your area code!')
    }
    if (!values[1]) {
        callback('Please input your phone number!')
    }
    callback()
}

@inject('userStore')
@Form.create()
@observer
class Detail extends Component {
    componentDidMount() {
        this.setBaseInfo()
    }

    setBaseInfo = () => {
        const { currentUser, form } = this.props
        Object.keys(form.getFieldsValue()).forEach(key => {
            const obj = {}
            obj[key] = currentUser[key] || null
            form.setFieldsValue(obj)
        })
    }

    getAvatarURL() {
        const { currentUser } = this.props
        if (currentUser.avatar) {
            return currentUser.avatar
        }
        const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png'
        return url
    }

    getViewDom = ref => {
        this.view = ref
    }

    handleSubmit = e => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const { nPwd, oPwd } = values
                this.props.userStore.updatePwd({ nPwd, oPwd })
            }
        })
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form
        if (value && value !== form.getFieldValue('nPwd')) {
            callback('两次输入密码不一致!')
        } else {
            callback()
        }
    }

    render() {
        const {
            form: { getFieldDecorator }
        } = this.props
        return (
            <Card size="small" title="修改密码">
                <div style={{ display: 'flex', padding: '0 50px' }} ref={this.getViewDom}>
                    <Left>
                        <Form layout="vertical" onSubmit={this.handleSubmit} hideRequiredMark>
                            <FormItem label={'原密码'}>
                                {getFieldDecorator('oPwd', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入原密码'
                                        }
                                    ]
                                })(<Input type={'password'} />)}
                            </FormItem>
                            <FormItem label={'密码'}>
                                {getFieldDecorator('nPwd', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入新密码'
                                        }
                                    ]
                                })(<Input type={'password'} />)}
                            </FormItem>
                            <FormItem label={'重复密码'}>
                                {getFieldDecorator('re_nPwd', {
                                    rules: [
                                        {
                                            required: true,
                                            message: '请输入重复新密码'
                                        },
                                        {
                                            validator: this.compareToFirstPassword
                                        }
                                    ]
                                })(<Input type={'password'} />)}
                            </FormItem>
                            <Button htmlType="submit" type="primary">
                                保存
                            </Button>
                        </Form>
                    </Left>
                </div>
            </Card>
        )
    }
}

Detail.defaultProps = {
    currentUser: {}
}

export default Detail
