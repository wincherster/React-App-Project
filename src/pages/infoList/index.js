import React from 'react';
import './index.css'; // 引入自定义css样式

class InfoList  extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            infoList: [{
                id: 1,
            },{
                id: 2,
            },{
                id: 3,
            },{
                id: 4,
            },{
                id: 5,
            },{
                id: 6,
            },{
                id: 7,
            },{
                id: 8,
            },{
                id: 9,
            }]
        }
    }

    componentDidMount() {
        console.log('资讯列表')
    }

    toDetail(id) {
        const {history} = this.props;
        history.push(`/infoDetail/${id}`)
    }
    render () {
        const {infoList} = this.state;
        return (
            <div className="info-list-warpper">
                { infoList.map( (item, index) => {
                    
                    return <div className="list-item" key={item.id} onClick={ e => {this.toDetail(item.id)}}>
                       id: {item.id} index: {index}
                    </div>
                })}
            </div>
        )
    }
}

export default InfoList;