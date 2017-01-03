import React from 'react';
import { Tabs, Button ,Icon, Menu, Dropdown} from 'antd';
import './Tab.css';

// import RegistrationForm from '../Test/Test';
import Add from '../Add/Add';
import MyCard from '../Card/Card';

const TabPane = Tabs.TabPane;
const MyTab = React.createClass({
  getInitialState() {
    this.newTabIndex = 0;
    const panes = [
    ];
    return {
      activeKey: "a",
      panes,
    };
  },
  onCloseAll() {
    this.setState({panes: [], activeKey: 'a'});
  },
  onCloseRight() {
    const panes = this.state.panes;
    const activeKey = this.state.activeKey;
    var cur = null;
    for(var i =0, j=panes.length; i<j; i++){
      if(panes[i].key === activeKey){
        cur = i;
      }
    }
    var newPanes = panes.splice(0,cur+1);
    this.setState({panes: newPanes});
  },
  onCloseLeft() {
    const panes = this.state.panes;
    const activeKey = this.state.activeKey;
    var cur = null;
    for(var i =0, j=panes.length; i<j; i++){
      if(panes[i].key === activeKey){
        cur = i;
      }
    }
    var newPanes=panes.splice(cur);
    this.setState({panes: newPanes});
  },
  onCloseOther() {
    const panes = this.state.panes;
    const activeKey = this.state.activeKey;
    const newPane = [];
    for(var i =0, j=panes.length; i<j; i++){
      if(panes[i].key === activeKey){
        newPane.push(panes[i])
      }
    }
    this.setState({panes: newPane});
  },
  onTabClick(activeKey) {
    this.setState({ activeKey });
    this.props.showActiveInMenu(activeKey);
  },
  onEdit(targetKey, action) {
    this[action](targetKey);
  },
  add(key) {
      const panes = this.state.panes;
      for(var i = 0, j = panes.length; i < j; i++){
        if(panes[i].key === key){
          this.setState({panes, activeKey: key});
          return;
        }
      }
      let TITLES = ['客户管理-销售',
                      '新增客户-市场', '跟进中客户-市场', '客户管理-市场', '预约到访查询', '分配客户-市场', '活动管理', '关怀管理-市场',
                      '新增客户-校区', '预约到访客户', '跟进中客户-校区', '客户经理', '分配客户-校区', '关怀管理-校区',
                      '权限设置', '规则设置'
                    ];
      let COMPONENTS = null;
      switch (key) {
        case '1':
          COMPONENTS = <MyCard/>;
          break;
        case '2':
          COMPONENTS = <Add/>;
          break;
        default:
          COMPONENTS = <h2>newPane{key}</h2>;
          break;
      }
      panes.push({ title: TITLES[key-1], content: COMPONENTS, key: key });
      if(panes.length>9){
        panes.shift(0)
      }
      this.setState({panes, activeKey: key})
  },
  remove(targetKey) {
    let activeKey = this.state.activeKey;
    let lastIndex;
    this.state.panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const panes = this.state.panes.filter(pane => pane.key !== targetKey);
    if (lastIndex >= 0 && activeKey === targetKey) {
      activeKey = panes[lastIndex].key;
    }
    this.setState({ panes, activeKey });
  },
  getPane() {
    var panes = this.state.panes;
    var paneArr = [];
    if(panes.length>0){
      for(var i=0, j=panes.length; i<j; i++){
        paneArr.push(<TabPane tab={panes[i].title} key={panes[i].key}>{panes[i].content}</TabPane>);
      }
    }
    return paneArr;
  },
  dropDownHeadle(e) {
    switch (e.key) {
      case '1':
        this.onCloseAll();
        break;
      case '2':
        this.onCloseOther();
        break;
      case '3':
        this.onCloseLeft();
        break;
      case '4':
        this.onCloseRight();
        break;
      default :
        break;
    }
  },
  render() {
    return (
      <div className="Tab-container">
        <div style={{ position: 'absolute',right: '16px', zIndex: '2'}}>
        {
          /*
          <Button type="ghost" onClick={this.onCloseAll}>删除全部</Button>
          <Button type="ghost" onClick={this.onCloseOther}>删除其他</Button>
          <Button type="ghost" onClick={this.onCloseLeft}>删除左侧</Button>
          <Button type="ghost" onClick={this.onCloseRight}>删除右侧</Button>
          */
        }
          <Dropdown overlay={<Menu onClick={this.dropDownHeadle}>
            <Menu.Item key="1">删除全部</Menu.Item>
            <Menu.Item key="2">删除其他</Menu.Item>
            <Menu.Item key="3">删除左侧</Menu.Item>
            <Menu.Item key="4">删除右侧</Menu.Item>
          </Menu>}>
            <Button type="ghost">
              <Icon type="bars" />
            </Button>
          </Dropdown>
        </div>
        <Tabs
          hideAdd
          onTabClick={this.onTabClick}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          className="TabPane-frist"
        >
          <TabPane tab={<Icon type="home" />} key='a'>
            <h2>Hello world!</h2>
          </TabPane>
          {this.getPane()}
        </Tabs>
      </div>
    );
  },
})

export default MyTab;
