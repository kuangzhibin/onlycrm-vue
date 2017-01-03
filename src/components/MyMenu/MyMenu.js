import React from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

const MyMenu = React.createClass({
  getInitialState() {
    return {
      selectKey: [],
      openKeys:[]
    };
  },
	createTab(menuItem) {
		this.props.createTab(menuItem.key);
    var menukey = [menuItem.key.toString()];
    console.log(menuItem);
    this.setState({selectKey: menukey});
	},
  onOpenChange(openKeys){
    this.setState({openKeys});
  },
  showActiveInMenu(key) {
    var skey = key;
    var newOpen=null;
    if(skey == 1){
      newOpen = "sub1";
    }else if(skey >=2 && skey <= 8){
      newOpen = "sub2";
    }else if(skey >= 9 && skey <= 14){
      newOpen = "sub3";
    }else if(skey >= 15 && skey <= 16){
      newOpen = "sub4";
    }
    console.log(newOpen);
    skey = [key.toString()];
    this.setState({selectKey: skey});
    var stateOpenKeys = this.state.openKeys;
    stateOpenKeys.push(newOpen);
    var n=[];
    for(var i = 0; i < stateOpenKeys.length; i++){
  		if(n.indexOf(stateOpenKeys[i]) == -1) {
        n.push(stateOpenKeys[i]);
      }
  	}
    console.log(n);
    this.onOpenChange(n);
  },
  // openKeys={this.state.openKeys}
	render() {
		return (
			<Menu mode="inline" onClick={this.createTab} onOpenChange={this.onOpenChange} onSelect={this.onSelect} openKeys={this.state.openKeys} selectedKeys={this.state.selectKey}>
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
	      <SubMenu key="sub4" title={<span><Icon type="setting" /><span>系统管理</span></span>}>
	        <Menu.Item key="15">权限设置</Menu.Item>
	        <Menu.Item key="16">规则设置</Menu.Item>
	      </SubMenu>
	    </Menu>
	   )
	}
})

export default MyMenu;
