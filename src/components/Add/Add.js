import React from 'react';
import { Row, Col, Input, Form, Select, Radio, Button } from 'antd';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;

import './Add.css';

const Add = Form.create()(React.createClass({
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
	},
	handleNumberChange(e) {
    console.log(e.target.value)
  },
	render() {
		const { getFieldDecorator } = this.props.form;
		const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    };
		return (
			<div className="Add-market">
				<div className="basicInfo">
					<div className="basicInfo-header">
						<i className="iconfont icon-crm-jibenxinxi"></i>基本信息
					</div>
					<div className="basicInfo-body">
					  <Form horizontal onSubmit={this.handleSubmit}>
							<Row>
					      <Col span={8} offset={3}>
					        <FormItem
					          {...formItemLayout}
					          label="客户姓名"
					          hasFeedback
					        >
						       {getFieldDecorator('name', {
				            rules: [{
				              type: 'string', message: '请正确输入姓名',
				            }, {
				              required: true, message: '请输入客户姓名',
				            }],
					          })(
					            <Input />
					          )}
					        </FormItem>
					      </Col>
					      <Col span={8} offset={2}>
					      	<FormItem
					          {...formItemLayout}
					          label="性别"
					        >
					          {getFieldDecorator('sex',{
					          	rules: [{
					          		required: true, message: '请选择性别'
					          	}]
					          })(
					            <RadioGroup>
					              <Radio value="male">男</Radio>
					              <Radio value="female">女</Radio>
					            </RadioGroup>
					          )}
					        </FormItem>
					      </Col>
					    </Row>
					    <Row>
					      <Col span={8} offset={3}>
					        <FormItem
					          {...formItemLayout}
					          label="家长姓名1"
					          hasFeedback
					        >
						       {getFieldDecorator('parent1', {
				            rules: [{
				              type: 'string', message: '请正确输入家长姓名',
				            }, {
				              required: true, message: '请输入家长姓名',
				            }],
					          })(
					            <Input />
					          )}
					        </FormItem>
					      </Col>
					      <Col span={8} offset={2}>
						      <FormItem
					          {...formItemLayout}
					          label="手机"
					          hasFeedback
					        >
						       {getFieldDecorator('tel', {
				            rules: [{
				              required: true, message: '请输入手机号码',
				            }],
					          })(
					            <Input />
					          )}
					        </FormItem>
				        </Col>
					    </Row>
					    <Row>
					    	<Col span={8} offset={5}>
					    		<Button type="primary" htmlType="submit">Submit</Button>
					    	</Col>
					    </Row>
					  </Form>
				  </div>
		    </div>
			</div>
		)
	}
})
);

export default Add;