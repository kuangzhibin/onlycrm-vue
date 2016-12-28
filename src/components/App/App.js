import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
var SubMenu = Menu.SubMenu;
import './App.css';

import MyTab from '../Tab/Tab'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <i className="iconfont icon-onlyicon"></i>昂立CRM
        </div>
        <div className="App-container">
          <div className="App-nav">
            <Menu mode="inline">
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
          </div>
          <div className="App-main">
            <div className="App-tabs">
              <MyTab></MyTab>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
