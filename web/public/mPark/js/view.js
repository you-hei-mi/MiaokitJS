define("bottomBtn", ["require", "exports", "react", "react-router-dom", "css!./styles/view.css"], function (require, exports, React, RouterDOM) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BottomBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                iconBottom1: "iconBox-bottomIn",
                iconBottom2: "iconBox-bottom",
                iconBottom3: "iconBox-bottom",
                iconBottom4: "iconBox-bottom"
            };
            BottomBtn.toggleIcon = this.toggleIcon.bind(this);
        }
        static toggleIcon(a) { }
        toggleIcon(data) {
            console.log(data);
            if (data == 1) {
                this.setState({
                    iconBottom1: "iconBox-bottomIn",
                    iconBottom2: "iconBox-bottom",
                    iconBottom3: "iconBox-bottom",
                    iconBottom4: "iconBox-bottom",
                });
            }
            else if (data == 2) {
                this.setState({
                    iconBottom1: "iconBox-bottom",
                    iconBottom2: "iconBox-bottomIn",
                    iconBottom3: "iconBox-bottom",
                    iconBottom4: "iconBox-bottom",
                });
            }
            else if (data == 3) {
                this.setState({
                    iconBottom1: "iconBox-bottom",
                    iconBottom2: "iconBox-bottom",
                    iconBottom3: "iconBox-bottomIn",
                    iconBottom4: "iconBox-bottom",
                });
            }
            else if (data == 4) {
                this.setState({
                    iconBottom1: "iconBox-bottom",
                    iconBottom2: "iconBox-bottom",
                    iconBottom3: "iconBox-bottom",
                    iconBottom4: "iconBox-bottomIn",
                });
            }
        }
        render() {
            return (React.createElement("div", { className: "bottomView" },
                React.createElement(RouterDOM.Link, { to: "/" },
                    React.createElement("div", { className: this.state.iconBottom1 },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "3D\u0273\uFFFD\uFFFD"))),
                React.createElement(RouterDOM.Link, { to: "/infoArea" },
                    React.createElement("div", { className: this.state.iconBottom2 },
                        React.createElement("span", { className: "iconfont iconActice", style: { "fontSize": "5rem" } }, " \uE7FA "),
                        React.createElement("p", null, "\u03A2\u0226"))),
                React.createElement(RouterDOM.Link, { to: "/message" },
                    React.createElement("div", { className: this.state.iconBottom3 },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\uFFFD\uFFFD\u0476"))),
                React.createElement(RouterDOM.Link, { to: "/aboutMe" },
                    React.createElement("div", { className: this.state.iconBottom4 },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\uFFFD\u04B5\uFFFD")))));
        }
        ;
    }
    exports.default = BottomBtn;
});
define("aboutMe", ["require", "exports", "react", "bottomBtn", "css!./styles/view.css"], function (require, exports, React, bottomBtn_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class AboutMe extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            bottomBtn_1.default.toggleIcon(4);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "AboutMeAboutMe\uFFFD\u3F6D\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u03E2\uFFFD\u01BC\uFFFD\uFFFD\uFFFD\uFFFD\u07B9\uFFFD\u02FE"),
                React.createElement(bottomBtn_1.default, null)));
        }
    }
    exports.default = AboutMe;
});
define("applyPut", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ApplyPut extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "ApplyPut")));
        }
    }
    exports.default = ApplyPut;
});
define("bookSite", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class BookSite extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "BookSite")));
        }
    }
    exports.default = BookSite;
});
define("compat", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class GlobalAction {
        switchRoom(pName) {
            console.log("SwitchLayer", pName);
        }
        switchMark(pName, pInfo) {
            console.log("switchMark", pName, pInfo);
        }
    }
    exports.default = GlobalAction;
});
define("findLease", ["require", "exports", "react", "css!./styles/view.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class FindLease extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "FindLeaseFindLeaseFindLease")));
        }
    }
    exports.default = FindLease;
});
define("home", ["require", "exports", "react", "react-router-dom", "bottomBtn", "compat", "css!./styles/view.css"], function (require, exports, React, RouterDOM, bottomBtn_2, compat_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Home extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            bottomBtn_2.default.toggleIcon(1);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement(TopBtn, null),
                React.createElement(FoldBtn, null),
                React.createElement(bottomBtn_2.default, null)));
        }
    }
    class TopBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                topView: "topView",
                topIcon1: "iconBox",
                topIcon2: "iconBox",
                topIcon3: "iconBox",
                topIcon4: "iconBox",
                topIcon5: "iconBox",
                topIcon: "iconBox",
                playIcon: "iconBox",
                moreIcon: "iconBox",
                topClose: "hide",
                topViewBack: "",
                topIcon3info: 0,
                topIcon4info: 0,
                topIcon5info: 0,
                mapIcon: [
                    { name: "��ͨ" },
                    { name: "��Ȧ" },
                    { name: "����վ" },
                    { name: "ȫ��" },
                    { name: "ͣ����" },
                    { name: "��ͨ" },
                ]
            };
            this.globalAction = new compat_1.default();
        }
        moreIcon(a) {
            console.log('toggleIconbox', a);
            this.setState({
                topView: "topView-big",
                moreIcon: "hide",
                topClose: "topClose",
                topIcon1: "iconBox-big",
                topIcon2: "iconBox-big",
                topIcon3: "iconBox-big",
                topIcon4: "iconBox-big",
                topIcon5: "iconBox-big",
                topViewBack: "topViewBack",
            });
            if (this.state.topIcon1 == "iconBoxIn" && this.state.topIcon2 == "iconBoxIn") {
                this.setState({
                    topIcon1: "iconBox-bigIn",
                    topIcon2: "iconBox-bigIn",
                });
            }
            else if (this.state.topIcon1 == "iconBoxIn") {
                console.log(this.state.topIcon1);
                this.setState({
                    topIcon1: "iconBox-bigIn",
                });
            }
            else if (this.state.topIcon2 == "iconBoxIn") {
                console.log(this.state.topIcon1);
                this.setState({
                    topIcon2: "iconBox-bigIn",
                });
            }
            ;
            if (this.state.topIcon3info == 1) {
                this.setState({
                    topIcon3: "iconBox-bigIn",
                });
            }
            if (this.state.topIcon4info == 1) {
                this.setState({
                    topIcon4: "iconBox-bigIn",
                });
            }
            if (this.state.topIcon5info == 1) {
                this.setState({
                    topIcon5: "iconBox-bigIn",
                });
            }
        }
        topClose(a) {
            console.log('topClose', a);
            this.setState({
                topView: "topView",
                moreIcon: "iconBox",
                topClose: "hide",
                topViewBack: " ",
            });
            if (this.state.topIcon1 == "iconBox-bigIn" && this.state.topIcon2 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBoxIn",
                    topIcon2: "iconBoxIn",
                });
            }
            else if (this.state.topIcon1 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBoxIn",
                    topIcon2: "iconBox",
                });
            }
            else if (this.state.topIcon1 == "iconBox-bigIn") {
                this.setState({
                    topIcon1: "iconBox",
                    topIcon2: "iconBoxIn",
                });
            }
            else {
                this.setState({
                    topIcon1: "iconBox",
                    topIcon2: "iconBox",
                    topIcon3: "iconBox",
                    topIcon4: "iconBox",
                    topIcon5: "iconBox",
                });
            }
        }
        switchMark(a, bInfo) {
            console.log('switchMark', a);
            if (a == "��ͨ") {
                if (this.state.topIcon1 == "iconBoxIn" || this.state.topIcon1 == "iconBox-bigIn") {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon1: "iconBox-big",
                        });
                    }
                    else {
                        this.setState({
                            topIcon1: "iconBox",
                        });
                    }
                    this.globalAction.switchMark(a, 0);
                }
                else {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon1: "iconBox-bigIn",
                        });
                    }
                    else {
                        this.setState({
                            topIcon1: "iconBoxIn",
                        });
                    }
                    this.globalAction.switchMark(a, 1);
                }
            }
            else if (a == "��Ȧ") {
                if (this.state.topIcon2 == "iconBoxIn" || this.state.topIcon2 == "iconBox-bigIn") {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon2: "iconBox-big",
                        });
                    }
                    else {
                        this.setState({
                            topIcon2: "iconBox",
                        });
                    }
                    this.globalAction.switchMark(a, 0);
                }
                else {
                    if (this.state.topView == "topView-big") {
                        this.setState({
                            topIcon2: "iconBox-bigIn",
                        });
                    }
                    else {
                        this.setState({
                            topIcon2: "iconBoxIn",
                        });
                    }
                    this.globalAction.switchMark(a, 1);
                }
            }
            else if (a == "������") {
                if (this.state.topIcon3 == "iconBox-big") {
                    this.setState({
                        topIcon3: "iconBox-bigIn",
                        topIcon3info: 1,
                    });
                    this.globalAction.switchMark(a, 1);
                }
                else {
                    this.setState({
                        topIcon3: "iconBox-big",
                        topIcon3info: 0,
                    });
                    this.globalAction.switchMark(a, 0);
                }
            }
            else if (a == "ȫ��") {
                if (this.state.topIcon4 == "iconBox-big") {
                    this.setState({
                        topIcon4: "iconBox-bigIn",
                        topIcon4info: 1,
                    });
                    this.globalAction.switchMark(a, 1);
                }
                else {
                    this.setState({
                        topIcon4: "iconBox-big",
                        topIcon4info: 0,
                    });
                    this.globalAction.switchMark(a, 0);
                }
            }
            else if (a == "ͣ����") {
                if (this.state.topIcon5 == "iconBox-big") {
                    this.setState({
                        topIcon5: "iconBox-bigIn",
                        topIcon5info: 1,
                    });
                    this.globalAction.switchMark(a, 1);
                }
                else {
                    this.setState({
                        topIcon5: "iconBox-big",
                        topIcon5info: 0,
                    });
                    this.globalAction.switchMark(a, 0);
                }
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.topViewBack },
                React.createElement("div", { className: this.state.topView },
                    React.createElement("div", { className: this.state.topIcon1, onClick: this.switchMark.bind(this, "��ͨ") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\uFFFD\uFFFD\u0368")),
                    React.createElement("div", { className: this.state.topIcon2, onClick: this.switchMark.bind(this, "��Ȧ") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\uFFFD\uFFFD\u0226")),
                    React.createElement("div", { className: this.state.moreIcon, onClick: this.moreIcon.bind(this, 10) },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\uFFFD")),
                    React.createElement("div", { className: this.state.topIcon3, onClick: this.switchMark.bind(this, "������") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD")),
                    React.createElement("div", { className: this.state.topIcon4, onClick: this.switchMark.bind(this, "ȫ��") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u022B\uFFFD\uFFFD")),
                    React.createElement("div", { className: this.state.topIcon5, onClick: this.switchMark.bind(this, "ͣ����") },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                        React.createElement("p", null, "\u0363\uFFFD\uFFFD\uFFFD\uFFFD")),
                    React.createElement("div", { className: this.state.topClose, onClick: this.topClose.bind(this, 10) },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "3rem" } }, "\uE7FA"))),
                React.createElement(RouterDOM.Link, { to: "/narrate" },
                    React.createElement("div", { className: "playIconbox" },
                        React.createElement("div", { className: this.state.playIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\uFFFD"))))));
        }
    }
    class FoldBtn extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                foleIcon: "foleIcon",
                foldView: "foldView-part"
            };
        }
        toggleFold() {
            if (this.state.foldView == "foldView") {
                this.setState({
                    foldView: " foldView-part"
                });
            }
            else {
                this.setState({
                    foldView: "foldView"
                });
            }
        }
        render() {
            return (React.createElement("div", { className: this.state.foldView },
                React.createElement("div", { className: "foleBtn", onClick: this.toggleFold.bind(this) },
                    React.createElement("span", { style: { "fontSize": "5rem" } }, "--")),
                React.createElement("div", { className: "foleIconbox" },
                    React.createElement(RouterDOM.Link, { to: "/parkCompany" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\u0530\uFFFD\uFFFD\uFFFD\uFFFD\u04B5"))),
                    React.createElement(RouterDOM.Link, { to: "/photograph" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"))),
                    React.createElement(RouterDOM.Link, { to: "/findLease" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD\u046F"))),
                    React.createElement(RouterDOM.Link, { to: "/applyPut" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\uFFFD\u06B5\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"))),
                    React.createElement(RouterDOM.Link, { to: "/bookSite" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\uFFFD\u0524\uFFFD\uFFFD"))),
                    React.createElement(RouterDOM.Link, { to: "/repairsOnline" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\uFFFD\uFFFD\uFFFD\u07F1\uFFFD\uFFFD\uFFFD"))),
                    React.createElement(RouterDOM.Link, { to: "/parking" },
                        React.createElement("div", { className: this.state.foleIcon },
                            React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem" } }, "\uE7FA"),
                            React.createElement("p", null, "\u0363\uFFFD\uFFFD\u04B5\uFFFD\uFFFD"))))));
        }
    }
    exports.default = Home;
});
define("parkCompany", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class ParkCompany extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "ParkCompany")));
        }
    }
    exports.default = ParkCompany;
});
define("photograph", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Photograph extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "Photograph")));
        }
    }
    exports.default = Photograph;
});
define("infoArea", ["require", "exports", "react", "react-router-dom", "css!./styles/infoArea.css"], function (require, exports, React, react_router_dom_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class InfoArea extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "请输入主题",
                tagArr: ["咨询", "建议", "投诉", "其他"],
                listArr: [{ spread: true }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }, { spread: false }],
                tagIndex: 0,
            };
        }
        foucus() {
            if (this.state.inputValue === "请输入主题") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "请输入主题" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        clickTag(index) {
            this.setState({ tagIndex: index });
        }
        spread(index) {
            let listArr = this.state.listArr;
            listArr[index].spread = !listArr[index].spread;
            this.setState({ listArr: listArr });
        }
        render() {
            return (React.createElement("div", { className: "infoarea" },
                React.createElement("div", { className: "infoarea-top" },
                    React.createElement("div", { className: "infoarea-title" }, "\u6570\u5B57\u56ED\u533A"),
                    React.createElement("div", { className: "infoarea-child-top" },
                        React.createElement("input", { className: "infoarea-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./mpark/image/search.png", className: "infoarea-search-img" }),
                        React.createElement("span", { className: "infoarea-sreach-bt" }, "\u641C\u7D22"))),
                React.createElement("div", { className: "infoarea-tag" }, this.state.tagArr.map((item, index) => {
                    return React.createElement("div", { key: index, className: index !== this.state.tagIndex ? "infoarea-tag-child" : "infoarea-tag-child-add", onClick: e => this.clickTag(index) }, item);
                })),
                React.createElement("div", { className: "infoarea-content" },
                    this.state.listArr.map((item, index) => {
                        return React.createElement("div", { className: item.spread ? "infoarea-content-child-bottom" : "infoarea-content-child", key: index }, item.spread ?
                            React.createElement("div", { style: { width: "100%", height: "100%" } },
                                React.createElement("div", { style: { height: "50%", width: "100%" } },
                                    React.createElement("div", { className: "infoarea-content-name" }, "\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219"),
                                    React.createElement("div", { className: "infoarea-content-bottom", onClick: e => this.spread(index) },
                                        React.createElement("img", { src: "./mpark/image/right.png", className: "infoarea-content-right-img" }))),
                                React.createElement("div", { className: "infoarea-br" },
                                    index !== 2 ?
                                        React.createElement("div", { className: "infoarea-br-bt" }, "\u5DF2\u89E3\u51B3") :
                                        React.createElement("div", { className: "infoarea-br-bt-add" }, "\u53D7\u7406\u4E2D"),
                                    React.createElement("div", { className: "infoarea-br-data" }, "2020-03-06 14:38:15")),
                                React.createElement("div", { style: { borderTop: "3px solid #F2F2F2", marginTop: "30px", marginRight: "50px" } }),
                                React.createElement("div", { style: { fontSize: "40px", color: "#949494", marginTop: "20px" } }, "\u7559\u8A00\u5185\u5BB9:"),
                                React.createElement("div", { style: { fontSize: "40px", color: "#333333", marginTop: "20px" } }, "\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\u3002"),
                                React.createElement("div", { style: { fontSize: "40px", color: "#949494", marginTop: "30px" } }, "\u7559\u8A00\u56DE\u590D:"),
                                React.createElement("div", { style: { fontSize: "40px", marginTop: "20px" } },
                                    React.createElement("span", { style: { color: "#949494" } }, "\u7531"),
                                    React.createElement("span", { style: { fontWeight: "600", margin: "0 25px 0 25px" } }, "xxx"),
                                    React.createElement("span", { style: { color: "#949494" } }, "\u53D7\u7406\u4E8E"),
                                    React.createElement("span", { style: { color: "#333333", marginLeft: "25px" } }, "2020-02-28 17:38:15")),
                                React.createElement("div", { style: { fontSize: "40px", color: "#949494", marginTop: "20px" } }, "\u56DE\u590D\u5185\u5BB9:"),
                                React.createElement("div", { style: { fontSize: "40px", color: "#333333", marginTop: "20px", marginBottom: "150px" } }, "\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\uFF0C\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219\u3002")) :
                            React.createElement("div", { style: { width: "100%", height: "100%" } },
                                React.createElement("div", { style: { height: "50%", width: "100%" } },
                                    React.createElement("div", { className: "infoarea-content-name" }, "\u5173\u4E8E\u65B0\u7684\u51ED\u79DF\u516C\u5BD3\u6392\u961F\u89C4\u5219"),
                                    React.createElement("div", { className: "infoarea-content-right", onClick: e => this.spread(index) },
                                        React.createElement("img", { src: "./mpark/image/right.png", className: "infoarea-content-right-img" }))),
                                React.createElement("div", { className: "infoarea-br" },
                                    index !== 2 ?
                                        React.createElement("div", { className: "infoarea-br-bt" }, "\u5DF2\u89E3\u51B3") :
                                        React.createElement("div", { className: "infoarea-br-bt-add" }, "\u53D7\u7406\u4E2D"),
                                    React.createElement("div", { className: "infoarea-br-data" }, "2020-03-06 14:38:15"))));
                    }),
                    React.createElement("div", { style: { width: "100%", height: "30%", textAlign: "center", fontSize: "40px", lineHeight: "60px", margin: "20px 0 0 -25px" } }, "\u5230\u5E95\u5566~")),
                React.createElement(react_router_dom_1.Link, { to: "/isay" },
                    React.createElement("div", { className: "infoarea-add-c" },
                        React.createElement("img", { src: "./mpark/image/add.png", width: "60px", height: "60px" })))));
        }
    }
    exports.default = InfoArea;
});
define("message", ["require", "exports", "react", "bottomBtn"], function (require, exports, React, bottomBtn_3) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Message extends React.Component {
        constructor(props) {
            super(props);
            this.state = {};
        }
        componentDidMount() {
            bottomBtn_3.default.toggleIcon(3);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "messageBox" }, "message"),
                React.createElement(bottomBtn_3.default, null)));
        }
    }
    exports.default = Message;
});
define("repairsOnline", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class RepairsOnline extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "RepairsOnline")));
        }
    }
    exports.default = RepairsOnline;
});
define("parking", ["require", "exports", "react"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Parking extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("div", { className: "aboutMebox" }, "Parking")));
        }
    }
    exports.default = Parking;
});
define("narrate", ["require", "exports", "react", "react-router-dom", "css!./styles/view.css"], function (require, exports, React, RouterDOM) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Narrate extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                activeType: 0,
                parkAudio: [
                    { name: "԰����ͨ", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
                    { name: "԰������", url: "http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3" },
                    { name: "԰����ͨ", url: "http://downsc.chinaz.net/Files/DownLoad/sound1/201906/11582.mp3" },
                    { name: "԰������", url: "http://downsc.chinaz.net/files/download/sound1/201206/1638.mp3" },
                ]
            };
        }
        componentDidMount() {
            let audio = document.getElementById("audioTool");
            audio.onended = function () {
                console.log("��Ƶ�������");
            };
        }
        audioClick(index, name, url) {
            console.log("handleSiblingsClick", index, name, url);
            this.setState({
                activeType: index
            });
            console.log("activeType", this.state.activeType);
            let audio = document.getElementById("audioTool");
            audio.src = url;
            audio.play();
        }
        togglePlay(a) {
            var audio = document.getElementById('audioTool');
            if (audio !== null) {
                console.log(audio.paused);
                if (audio.paused) {
                    audio.play();
                }
                else {
                    audio.pause();
                }
            }
        }
        render() {
            return (React.createElement("div", null,
                React.createElement("audio", { controls: true, id: "audioTool" },
                    React.createElement("source", { src: "" })),
                React.createElement(RouterDOM.Link, { to: "/" },
                    React.createElement("div", { className: "narrareClose" },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem", "color": "#fff" } }, "\uE7FA"))),
                React.createElement("div", { className: "narrareTitle" }, "\uFFFD\u0536\uFFFD\uFFFD\uFFFD\uFFFD\uFFFD"),
                React.createElement("div", { className: "audioBox" },
                    React.createElement("ul", { className: "flex-layout category-head" }, this.state.parkAudio.map((i, index) => {
                        return (React.createElement("li", { className: this.state.activeType == index ? "flex-active" : "flex", onClick: this.audioClick.bind(this, index, i.name, i.url), "data-index": index }, i.name));
                    })),
                    React.createElement("div", { className: "playBtn", onClick: this.togglePlay.bind(this) },
                        React.createElement("span", { className: "iconfont", style: { "fontSize": "5rem", "color": "#fff" } }, "\uE7FA")))));
        }
    }
    exports.default = Narrate;
});
define("isay", ["require", "exports", "react", "css!./styles/isay.css"], function (require, exports, React) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Isay extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                tagArray: [{ name: "咨询" }, { name: "建议" }, { name: "投诉" }, { name: "其它" }],
                tagIndex: 0,
                inputValue: "不能少于3个字且不能大于33个字",
                textareaValue: "请将留言内容描述出来（200字内）"
            };
        }
        inputFoucus() {
            if (this.state.inputValue === "不能少于3个字且不能大于33个字") {
                this.setState({ inputValue: "" });
            }
        }
        inputBlur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "不能少于3个字且不能大于33个字" });
            }
        }
        inputChange(event) {
            this.setState({ inputValue: event.target.value });
        }
        textareaFoucus() {
            if (this.state.textareaValue === "请将留言内容描述出来（200字内）") {
                this.setState({ textareaValue: "" });
            }
        }
        textareaBlur() {
            if (this.state.textareaValue === "") {
                this.setState({ textareaValue: "请将留言内容描述出来（200字内）" });
            }
        }
        textareaChange(event) {
            this.setState({ textareaValue: event.target.value });
        }
        goBack() {
            this.props.history.goBack();
        }
        render() {
            return (React.createElement("div", { className: "isay" },
                React.createElement("div", { className: "isay-top" },
                    React.createElement("div", { className: "isay-title" }, "\u6570\u5B57\u56ED\u533A")),
                React.createElement("div", { className: "isay-back" },
                    React.createElement("img", { src: "./mpark/image/back.png", style: { marginBottom: "25px" }, onClick: this.goBack.bind(this) }),
                    React.createElement("span", { style: { color: "#6C6C6C", fontSize: "40px", marginLeft: "15px" } }, "\u6211\u6709\u8BDD\u8BF4")),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", margin: "20px 0 0 35px", overflow: "hidden" } },
                    React.createElement("div", { className: "isay-star" }),
                    React.createElement("div", { style: { float: "left", marginLeft: "15px" } }, "\u7559\u8A00\u7C7B\u522B:")),
                React.createElement("div", { className: "isay-tag" }, this.state.tagArray.map((item, index) => {
                    return React.createElement("div", { className: "isay-tag-child", key: index },
                        React.createElement("img", { src: "./mpark/image/checked.png", style: { margin: "-22px 20px 0 0" } }),
                        React.createElement("span", { style: { fontSize: "40px", color: "#6C6C6C" } }, item.name));
                })),
                React.createElement("div", { style: { borderTop: "3px solid #F2F2F2", marginTop: "30px", margin: "0 30px 0 30px" } }),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", margin: "20px 0 0 35px", overflow: "hidden" } },
                    React.createElement("div", { className: "isay-star" }),
                    React.createElement("div", { style: { float: "left", marginLeft: "15px" } }, "\u7559\u8A00\u4E3B\u9898:")),
                React.createElement("div", { className: "isay-theme" },
                    React.createElement("input", { className: "isay-theme-input", value: this.state.inputValue, onFocus: this.inputFoucus.bind(this), onBlur: this.inputBlur.bind(this), onChange: this.inputChange.bind(this) })),
                React.createElement("div", { style: { fontSize: "40px", color: "#949494", margin: "30px 0 0 35px", overflow: "hidden" } },
                    React.createElement("div", { className: "isay-star" }),
                    React.createElement("div", { style: { float: "left", marginLeft: "15px" } }, "\u7559\u8A00\u5185\u5BB9:")),
                React.createElement("div", { className: "isay-content" },
                    React.createElement("textarea", { className: "isay-content-textarea", value: this.state.textareaValue, onFocus: this.textareaFoucus.bind(this), onBlur: this.textareaBlur.bind(this), onChange: this.textareaChange.bind(this) })),
                React.createElement("div", { className: "isay-submit" }, "\u63D0\u4EA4")));
        }
    }
    exports.default = Isay;
});
define("index", ["require", "exports", "react", "react-dom", "home", "parkCompany", "photograph", "infoArea", "message", "aboutMe", "findLease", "applyPut", "bookSite", "repairsOnline", "parking", "narrate", "isay", "react-router-dom", "css!./styles/index.css"], function (require, exports, React, ReactDOM, home_1, parkCompany_1, photograph_1, infoArea_1, message_1, aboutMe_1, findLease_1, applyPut_1, bookSite_1, repairsOnline_1, parking_1, narrate_1, isay_1, react_router_dom_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Index extends React.Component {
        constructor() {
            super(...arguments);
            this.state = {
                inputValue: "请输入园区名称",
                city: "",
                parkArr: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                tagArr: ["电子信息", "高新技术", "电商服务"]
            };
        }
        componentDidMount() {
            let _this = this;
            var geolocation = new BMap.Geolocation();
            geolocation.getCurrentPosition(function (r) {
                if (this.getStatus() == BMAP_STATUS_SUCCESS) {
                    console.log(r.address.city);
                    _this.setState({ city: r.address.city });
                }
                else {
                    if (this.getStatus() === 6) {
                        console.log("没有权限");
                    }
                    if (this.getStatus() === 8) {
                        console.log("连接超时");
                    }
                }
            });
        }
        foucus() {
            if (this.state.inputValue === "请输入园区名称") {
                this.setState({ inputValue: "" });
            }
        }
        blur() {
            if (this.state.inputValue === "") {
                this.setState({ inputValue: "请输入园区名称" });
            }
        }
        change(event) {
            this.setState({ inputValue: event.target.value });
        }
        render() {
            return (React.createElement("div", { className: "index" },
                React.createElement("div", { className: "index-top" }, "\u6570\u5B57\u56ED\u533A"),
                React.createElement("div", { className: "index-input-div" },
                    React.createElement("div", { className: "index-child-left" },
                        React.createElement("input", { className: "index-input", value: this.state.inputValue, onFocus: this.foucus.bind(this), onBlur: this.blur.bind(this), onChange: this.change.bind(this) }),
                        React.createElement("img", { src: "./mpark/image/search.png", className: "index-search-img" })),
                    React.createElement("div", { className: "index-child-right" },
                        React.createElement("span", null, this.state.city),
                        React.createElement("img", { src: "./mpark/image/bottom.png", width: "50px", height: "50px", style: { marginTop: "-10px" } }))),
                React.createElement("div", { className: "index-number" },
                    React.createElement("img", { src: "./mpark/image/tower.png", className: "tower-img" }),
                    "\u5DF2\u6709",
                    React.createElement("span", { style: { color: "#0B8BF0", margin: "0 15px 0 15px" } }, "15"),
                    "\u5BB6\u56ED\u533A\u4E0A\u7EBF"),
                React.createElement("div", { className: "index-park" },
                    this.state.parkArr.map((item, index) => {
                        return React.createElement(react_router_dom_2.Link, { to: "/home" },
                            React.createElement("div", { className: "index-child-park", key: index },
                                React.createElement("div", { className: "index-child-park-left" },
                                    React.createElement("img", { src: "./mpark/image/a.jpg", className: "park-img" })),
                                React.createElement("div", { className: "index-child-park-right" },
                                    React.createElement("div", { className: "index-park-name" }, "\u6842\u6797\u56FD\u5BB6\u9AD8\u65B0\u533A\u4FE1\u606F\u4EA7\u4E1A\u56ED"),
                                    React.createElement("div", { className: "index-park-position" },
                                        React.createElement("img", { src: "./mpark/image/position.png", width: "45px", height: "40px", style: { marginTop: "-18px" } }),
                                        React.createElement("span", { className: "index-park-position-name" }, "\u6842\u6797\u9AD8\u65B0\u533A\u671D\u9633\u8DEFD-12\u53F7")),
                                    React.createElement("div", { className: "index-tag" }, this.state.tagArr.map((item, index) => {
                                        return React.createElement("div", { key: index, className: "index-tag-child" }, item);
                                    }))),
                                React.createElement("div", { className: "index-child-park-end" },
                                    React.createElement("div", { className: "index-distance" }, "10.5km"))));
                    }),
                    React.createElement("div", { style: { width: "100%", height: "60px", textAlign: "center", fontSize: "40px", lineHeight: "60px", marginLeft: "-25px" } }, "\u5230\u5E95\u5566~")),
                React.createElement("div", { className: "index-bottom-logo" },
                    React.createElement("img", { src: "./mpark/image/bottomLogo.png", className: "index-bottom-logo-img" }))));
        }
    }
    exports.default = Index;
    ReactDOM.render(React.createElement(react_router_dom_2.HashRouter, null,
        React.createElement(react_router_dom_2.Switch, null,
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/index", component: Index }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/home", component: home_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/parkCompany", component: parkCompany_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/photograph", component: photograph_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/findLease", component: findLease_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/applyPut", component: applyPut_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/bookSite", component: bookSite_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/repairsOnline", component: repairsOnline_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/parking", component: parking_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/", component: infoArea_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/message", component: message_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/aboutMe", component: aboutMe_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/narrate", component: narrate_1.default }),
            React.createElement(react_router_dom_2.Route, { exact: true, path: "/isay", component: isay_1.default }))), document.getElementById('viewContainer'));
});
