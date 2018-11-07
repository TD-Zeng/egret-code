var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var MainView = (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super.call(this) || this;
        _this.skinName = "MainSkin";
        return _this;
    }
    MainView.prototype.childrenCreated = function () {
        this.loginBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
    };
    MainView.prototype.onClick = function (event) {
        console.log("点击到按钮了");
        if (this.nameTxt.text != "" && this.pwdTxt.text != "") {
            console.log('密码和帐号不为空');
            if (!this.welComeView) {
                this.welComeView = new WelComeView();
            }
            this.addChild(this.welComeView);
        }
        else {
            console.log('密码或帐号不能为空');
        }
    };
    MainView.prototype.removeSelf = function () {
        if (this.parent) {
            this.parent.removeChild(this);
        }
    };
    return MainView;
}(eui.Component));
__reflect(MainView.prototype, "MainView");
//# sourceMappingURL=MainView.js.map