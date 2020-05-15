import * as React from "react";
import * as ReactDOM from "react-dom";

import TopNav from "topNav";
import LeftNav from "leftNav";
import IconView from "iconView";
import Data from "data";
import Share from "share";
import DataService from "dataService";

import "css!./styles/view.css"
import { HashRouter, Route, Redirect, Switch } from 'react-router-dom';
<<<<<<< HEAD
 
=======
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029

interface IProps {}

interface IState {
    isFullScreen: boolean,
    isShare: boolean
}

class Index extends React.Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.toggleShare = this.toggleShare.bind(this);

        Index.g_pIns = this;
    }

    public componentDidMount() { }

    public readonly state: Readonly<IState> = {
        isFullScreen: false,
        isShare: false
    }

    public static g_pIns: Index = null;

<<<<<<< HEAD
    // 分享
=======
    // 鍒嗕韩
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    toggleShare = (e) => {
        this.setState({ isShare: !this.state.isShare })
    }

<<<<<<< HEAD
    // 全屏
=======
    // 鍏ㄥ睆
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    fullScreen = (e) => {
        this.setState({ isFullScreen: !this.state.isFullScreen })
    }
 
    public render() {
        return (
            <div className={"web"} >
                {this.state.isFullScreen ? null :
                    <span>
                        <TopNav /> 
                        <LeftNav />
                    </span>
                }
                {
                this.state.isShare ?
                    <div className="share"><Share toggleShare={this.toggleShare} /></div>
                    : null
                }
                <div className={"iconView"}>
                    <IconView toggleShare={this.toggleShare} fullScreen={this.fullScreen}  />
                </div>
                <div id="webgl-output"></div>
            </div>
        )
    }


    public iconChild = null;
    public iconSon = ref => { this.iconChild = ref };

  
<<<<<<< HEAD
    //do 传参决定显示区域 ， 1 - 园区介绍; 2 - 区域优势; 3 - 招商列表; 4 - 入驻企业; 10 - 顶部树形列表;
=======
    //do 浼犲弬鍐冲畾鏄剧ず鍖哄煙 锛� 1 - 鍥尯浠嬬粛; 2 - 鍖哄煙浼樺娍; 3 - 鎷涘晢鍒楄〃; 4 - 鍏ラ┗浼佷笟; 10 - 椤堕儴鏍戝舰鍒楄〃;
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public showLeftview(a) {
        // LeftNav.showList-- ListArea.showList
        LeftNav.showList(a);
    }
<<<<<<< HEAD
    // 隐藏组件
=======
    // 闅愯棌缁勪欢
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public hideLeftview(a) {
        LeftNav.indexCh(a);
        LeftNav.showList(a);
    }

<<<<<<< HEAD
    //刷新树形图数据
=======
    //鍒锋柊鏍戝舰鍥炬暟鎹�
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public updateTree(data) {
        // LeftNav.refreshTree -- TreeArea.setTreedata
        LeftNav.refreshTree(data);
    }

<<<<<<< HEAD
    //激活房间组件
=======
    //婵�娲绘埧闂寸粍浠�
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public updateBusiness(a) {
        console.log("flushRoom", a);
        // LeftNav.outBusinessdata(a) -- BusinessArea.outRoomdata(a);
        LeftNav.updateBusiness(a)
    }
<<<<<<< HEAD
    // 激活企业组件
=======
    // 婵�娲讳紒涓氱粍浠�
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public updateCompany(a) {
        console.log("flushRoom", a);
        // LeftNav.outCompanydata  --  CompanyArea.outRoomdata(a);
        LeftNav.updateCompany(a)
    }

<<<<<<< HEAD
    // 激活房间全景
=======
    // 婵�娲绘埧闂村叏鏅�
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public roomScene(a) {
        console.log("roomScene", a);
    }

<<<<<<< HEAD
    //激活房间讲解
=======
    //婵�娲绘埧闂磋瑙�
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public roomAduio(a) {
        IconView.play(a);
    }

    public dataService: DataService = new DataService();

<<<<<<< HEAD
    // 点击地图点，获取回调
=======
    // 鐐瑰嚮鍦板浘鐐癸紝鑾峰彇鍥炶皟
>>>>>>> d3af9502db6a77299a292aac21a1ff92b692d029
    public callback(a, pBack) {
        this.dataService.callback(a, pBack);
    }


}

ReactDOM.render(
    <HashRouter>
            <Switch>
                <Route path="/data" component={Data} />
                <Route exact path="/" component={Index} />
            </Switch>
    </HashRouter>
    , document.getElementById('viewContainer'));

export default Index;




