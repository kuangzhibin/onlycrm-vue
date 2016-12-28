import React from 'react';
import { Tabs, Button ,Icon } from 'antd';
import './Tab.css';
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
    console.log(panes);
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
    console.log(newPane);
    this.setState({panes: newPane});
  },
  onChange(activeKey) {
    this.setState({ activeKey });
  },
  onEdit(targetKey, action) {
    this[action](targetKey);
  },
  add() {
    const panes = this.state.panes;
    const activeKey = (this.newTabIndex++).toString();
    console.log(activeKey);
    panes.push({ title: 'New Tab'+activeKey, content: 'New Tab Pane', key: activeKey });
    if(panes.length>9){
      panes.shift(panes[0]);
    }
    this.setState({ panes, activeKey });
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
  render() {
    return (
      <div>
        <div style={{ marginBottom: 16 }}>
          <Button type="ghost" onClick={this.add}>添加</Button>
          <Button type="ghost" onClick={this.onCloseAll}>删除全部</Button>
          <Button type="ghost" onClick={this.onCloseOther}>删除其他</Button>
          <Button type="ghost" onClick={this.onCloseLeft}>删除左侧</Button>
          <Button type="ghost" onClick={this.onCloseRight}>删除右侧</Button>
        </div>
        <Tabs
          hideAdd
          onChange={this.onChange}
          activeKey={this.state.activeKey}
          type="editable-card"
          onEdit={this.onEdit}
          className="TabPane-frist"
        >
          <TabPane tab={<Icon type="home" />} key='a'>
            <p>Hello world!</p>
          </TabPane>
          {this.getPane()}
        </Tabs>
      </div>
    );
  },
});

export default MyTab;
