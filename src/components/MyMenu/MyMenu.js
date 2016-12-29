import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const MyMenu = React.createClass({
	createTab(memuItem) {
		console.log(memuItem.key);
		this.props.createTab(memuItem.key);
	},
	render() {
		return (
			<div>
			<Menu mode="inline" onClick={this.createTab}>
	      <SubMenu key="sub1" title={<span><Icon type="switcher" /><span>销售部日常工作</span></span>}>
	        <Menu.Item key="1">客户管理</Menu.Item>
	      </SubMenu>
	      <SubMenu key="sub2" title={<span><Icon type="team" /><span>市场客户管理</span></span>}>
	        <Menu.Item key="2">新增客户</Menu.Item>
	        <Menu.Item key="3">跟进中客户</Menu.Item>
	        <Menu.Item key="4">客户管理</Menu.Item>
	        <Menu.Item key="5">预约到访查询</Menu.Item>
	        <Menu.Item key="6">分配客户</Menu.Item>
	        <Menu.Item key="7">活动管理</Menu.Item>
	        <Menu.Item key="8">关怀管理</Menu.Item>
	      </SubMenu>
	      <SubMenu key="sub3" title={<span><Icon type="solution" /><span>校区客户管理</span></span>}>
	        <Menu.Item key="9">新增客户</Menu.Item>
	        <Menu.Item key="10">预约到访客户</Menu.Item>
	        <Menu.Item key="11">跟进中客户</Menu.Item>
	        <Menu.Item key="12">客户经理</Menu.Item>
	        <Menu.Item key="13">分配客户</Menu.Item>
	        <Menu.Item key="14">关怀管理</Menu.Item>
	      </SubMenu>
	      <SubMenu key="sub5" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
	        <Menu.Item key="15">权限设置</Menu.Item>
	        <Menu.Item key="16">规则设置</Menu.Item>
	      </SubMenu>
	    </Menu>
	    <button onClick={this.createTab}>Helklo</button>
	    </div>
	   )
	}
})

export default MyMenu;