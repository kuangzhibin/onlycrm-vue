import React from 'react';
import ReactDOM from 'react-dom';

var _data = [
    {id: 0, name:"关羽", country:"中国"},
    {id: 1, name:"宫本", country:"日本"},
    {id: 2, name:"金正日", country:"朝鲜"},
    {id: 3, name:"雨田", country:"日本"},
    {id: 4, name:"朱元璋", country:"中国"},
    {id: 5, name:"丘吉尔", country:"英国"},
    {id: 6, name:"戴高乐", country:"法国"}
];
/* 二级联动 */
var _options = [
    {id: 0, zhou: "全部"},
    {id: 1, zhou: "亚洲", country: ["中国", "日本", "朝鲜"]},
    {id: 2, zhou: "欧洲", country: ["英国", "法国"]}
];
/* select */
var Option1 = React.createClass({
    option: function(){
        return this.props.data.map(function(com){
            return (<option key={com.id} value={com.id}>{com.zhou}</option>);
        });
    },
    render: function(){
        return (<select className="ui-select" onChange={this.props.onChange}>{this.option()}</select>);
    }
});
var Option2 = React.createClass({
    option: function(){
        var id = this.props.option1Value;
        if(id === 0){
            return this.props.data.map(function(option){
                if(option.country){
                    return option.country.map(function(com){
                        return (<option>{com}</option>);
                    });
                }else{
                    return (<option>全部</option>);
                }
            });
        }else{
            return this.props.data[id].country.map(function(com){
                return (<option>{com}</option>);
            });
        }
    },
    render: function(){
        return (<select className="ui-select">{this.option()}</select>);
    }
});
/* div整体 */
var New = React.createClass({
    option1Value: function(){
        var s = ReactDOM.findDOMNode(this.refs.Option1);
        return s ? s.value : 0;
    },
    option2Value: function(){
        var s = ReactDOM.findDOMNode(this.refs.Option2);
        return s ? s.value : "全部";
    },
    option1ChangeValue: function(){
        this.setState({
            value1: this.option1Value()
        });
    },
    getInitialState: function(){
        return ({
            value1: this.option1Value(),
            value2: this.option2Value()
        });
    },
    render: function(){
        return (
            <div>
                <p>
                    <Option1 ref="Option1" data={_options} onChange={this.option1ChangeValue} />
                    <Option2 ref="Option2" data={_options} option1Value={this.state.value1} />
                </p>
            </div>
        );
    }
});

export default New;
