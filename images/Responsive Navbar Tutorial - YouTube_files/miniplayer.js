(function(g){var window=this;'use strict';var P3=function(a){g.W.call(this,{F:"div",K:"ytp-miniplayer-ui"});this.Se=!1;this.player=a;this.P(a,"minimized",this.Yg);this.P(a,"onStateChange",this.oJ)},Q3=function(a){g.CJ.call(this,a);
this.j=new P3(this.player);this.j.hide();g.oJ(this.player,this.j.element,4);a.xf()&&(this.load(),g.O(a.getRootNode(),"ytp-player-minimized",!0))};
g.w(P3,g.W);g.h=P3.prototype;
g.h.TG=function(){this.tooltip=new g.LN(this.player,this);g.H(this,this.tooltip);g.oJ(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Dc=new g.JK(this.player);g.H(this,this.Dc);this.Ch=new g.W({F:"div",K:"ytp-miniplayer-scrim"});g.H(this,this.Ch);this.Ch.xa(this.element);this.P(this.Ch.element,"click",this.vC);var a=new g.W({F:"button",Ba:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.OG()]});g.H(this,a);a.xa(this.Ch.element);this.P(a.element,"click",this.Ij);
a=new g.XZ(this.player,this);g.H(this,a);a.xa(this.Ch.element);this.er=new g.W({F:"div",K:"ytp-miniplayer-controls"});g.H(this,this.er);this.er.xa(this.Ch.element);this.P(this.er.element,"click",this.vC);var b=new g.W({F:"div",K:"ytp-miniplayer-button-container"});g.H(this,b);b.xa(this.er.element);a=new g.W({F:"div",K:"ytp-miniplayer-play-button-container"});g.H(this,a);a.xa(this.er.element);var c=new g.W({F:"div",K:"ytp-miniplayer-button-container"});g.H(this,c);c.xa(this.er.element);this.oQ=new g.jM(this.player,
this,!1);g.H(this,this.oQ);this.oQ.xa(b.element);b=new g.hM(this.player,this);g.H(this,b);b.xa(a.element);this.nextButton=new g.jM(this.player,this,!0);g.H(this,this.nextButton);this.nextButton.xa(c.element);this.Fh=new g.xN(this.player,this);g.H(this,this.Fh);this.Fh.xa(this.Ch.element);this.vc=new g.tM(this.player,this);g.H(this,this.vc);g.oJ(this.player,this.vc.element,4);this.kC=new g.W({F:"div",K:"ytp-miniplayer-buttons"});g.H(this,this.kC);g.oJ(this.player,this.kC.element,4);a=new g.W({F:"button",
Ba:["ytp-miniplayer-close-button","ytp-button"],T:{"aria-label":"Close"},R:[g.OG()]});g.H(this,a);a.xa(this.kC.element);this.P(a.element,"click",this.Ij);a=new g.W({F:"button",Ba:["ytp-miniplayer-replay-button","ytp-button"],T:{"aria-label":"Close"},R:[g.UG()]});g.H(this,a);a.xa(this.kC.element);this.P(a.element,"click",this.pZ);this.P(this.player,"presentingplayerstatechange",this.Xc);this.P(this.player,"appresize",this.ub);this.P(this.player,"fullscreentoggled",this.ub);this.ub()};
g.h.show=function(){this.ue=new g.hp(this.Yr,null,this);this.ue.start();this.Se||(this.TG(),this.Se=!0);0!==this.player.getPlayerState()&&g.W.prototype.show.call(this);this.vc.show();this.player.unloadModule("annotations_module")};
g.h.hide=function(){this.ue&&(this.ue.dispose(),this.ue=void 0);g.W.prototype.hide.call(this);this.player.xf()||(this.Se&&this.vc.hide(),this.player.loadModule("annotations_module"))};
g.h.ea=function(){this.ue&&(this.ue.dispose(),this.ue=void 0);g.W.prototype.ea.call(this)};
g.h.Ij=function(){this.player.stopVideo();this.player.La("onCloseMiniplayer")};
g.h.pZ=function(){this.player.playVideo()};
g.h.vC=function(a){if(a.target===this.Ch.element||a.target===this.er.element)this.player.S().L("kevlar_miniplayer_play_pause_on_scrim")?g.QF(this.player.vb())?this.player.pauseVideo():this.player.playVideo():this.player.La("onExpandMiniplayer")};
g.h.Yg=function(){g.O(this.player.getRootNode(),"ytp-player-minimized",this.player.xf())};
g.h.Sd=function(){this.vc.Qb();this.Fh.Qb()};
g.h.Yr=function(){this.Sd();this.ue&&this.ue.start()};
g.h.Xc=function(a){g.V(a.state,32)&&this.tooltip.hide()};
g.h.ub=function(){g.JM(this.vc,0,this.player.Va().getPlayerSize().width,!1);g.wM(this.vc)};
g.h.oJ=function(a){this.player.xf()&&(0===a?this.hide():this.show())};
g.h.kc=function(){return this.tooltip};
g.h.Ff=function(){return!1};
g.h.fg=function(){return!1};
g.h.zj=function(){return!1};
g.h.vz=function(){};
g.h.Xo=function(){};
g.h.ou=function(){};
g.h.xp=function(){return null};
g.h.Sx=function(){return null};
g.h.Bk=function(){return new g.rm(0,0,0,0)};
g.h.handleGlobalKeyDown=function(){return!1};
g.h.handleGlobalKeyUp=function(){return!1};
g.h.ws=function(a,b,c,d,e){var f=0,k=d=0,l=g.Fm(a);if(b){c=g.pp(b,"ytp-prev-button")||g.pp(b,"ytp-next-button");var m=g.pp(b,"ytp-play-button"),n=g.pp(b,"ytp-miniplayer-expand-watch-page-button");c?f=k=12:m?(b=g.Dm(b,this.element),k=b.x,f=b.y-12):n&&(k=g.pp(b,"ytp-miniplayer-button-top-left"),f=g.Dm(b,this.element),b=g.Fm(b),k?(k=8,f=f.y+40):(k=f.x-l.width+b.width,f=f.y-20))}else k=c-l.width/2,d=25+(e||0);b=this.player.Va().getPlayerSize().width;e=f+(e||0);l=g.oh(k,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.h.showControls=function(){};
g.h.Em=function(){};
g.h.Sl=function(){return!1};g.w(Q3,g.CJ);Q3.prototype.create=function(){};
Q3.prototype.aj=function(){return!1};
Q3.prototype.load=function(){this.player.hideControls();this.j.show()};
Q3.prototype.unload=function(){this.player.showControls();this.j.hide()};g.BJ("miniplayer",Q3);})(_yt_player);
