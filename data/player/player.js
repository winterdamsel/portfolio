//Version 1.2.5
function DopPlayer(){function t(){h("loadingImg").style.display="block"}function e(){h("loadingImg").style.display="none"}function i(){if(t(),r&&navigator.userAgent.match(/iPad/i)&&(s.orc=0,s.onorientationchange=function(){1===l&&(this.orc=1)},top===self)){s.scrollTo(0,1);var e=h("statusCurrent");e.onfocus=function(){l=1},e.onblur=function(){l=0}}var i=h("toolbar").style;i.backgroundColor="#ECECEC",i.borderTop="1px solid #DBDADA",c.getElementsByTagName("body")[0].style.backgroundColor=u.BackColr;var a=h("resizer");a.style.height=u.Height+"px",a.style.width=u.Width+"px",p.r(),s.onresize=p.r;var d=h("time");d.innerHTML="";var y=c.createElement("span");y.setAttribute("style","font-weight: bold; color: #525151;"),y.id="times",d.appendChild(y);var f=Math.floor(u.TotalTime/1e3%60),b=Math.floor(u.TotalTime/1e3/60%60),v=Math.floor(u.TotalTime/1e3/60/60%24);10>f&&(f="0"+f),10>b&&(b="0"+b),10>v&&(v="0"+v),0===v?d.innerHTML=d.innerHTML+":"+b+":"+f:d.innerHTML=d.innerHTML+":"+v+":"+b+":"+f,h("buttonDiv").style.display="block",h("progressContainer").style.display="block",h("time").style.display="block",h("status").style.display="block",u.ShowNotes&&(h("notesButton").style.display="block"),h("statusTotal").value="/ "+u.TotalSlides,h("statusCurrent").onkeydown=n,h("playN").onclick=o.Next,h("playP").onclick=o.Prev;var m=h("playB");m.onclick=o.Play,m.onmouseover=function(){var t=this.style;g?t.backgroundPosition="-148px 0px":t.backgroundPosition="-50px 0px"},m.onmouseout=function(){var t=this.style;g?t.backgroundPosition="-99px 0px":t.backgroundPosition="-1px 0px"}}function n(t){var e=t.keyCode||t.which;if(13===e){var i=h("statusCurrent").value;if(!isNaN(i)){var n=parseInt(i);o.GotoSlide(n)}}}function a(t){function e(t){var i;for(i=0;i<t.childNodes.length;i++){var n=t.childNodes[i];1==n.nodeType&&e(n),/^\s+$/.test(n.nodeValue)&&3==n.nodeType&&t.removeChild(t.childNodes[i--])}return t}function i(t){var i;if(s.ActiveXObject)i=new ActiveXObject("Microsoft.XMLDOM"),i.async=!1,i.loadXML(t);else if(s.DOMParser){var n=new DOMParser;i=n.parseFromString(t,"text/xml")}var a=e(i);return a.firstChild}function n(t){return void 0!=t?t:""}var a=i(t);try{var o=n(a.getAttribute("name"));if(""===o)return void(h("presInfo").style.display="none");var r=a.childNodes,l=n(a.getAttribute("info")),c=n(r[0].getAttribute("photo")),u=n(r[0].getAttribute("companyLogo")),g=n(a.getAttribute("email")),d=n(a.getAttribute("website")),p=n(a.getAttribute("companyWebsite"));""===c&&(c="pres.png"),h("PrePicLoader").src="data/player/"+c,""!==u&&(h("logo").innerHTML='<a target="_about:blank" href="'+p+'"><img class="img1" src="data/player/'+u+'" style="top:6px;height:30px;width:auto;position:relative"></a>'),h("profileName").innerHTML=o;var y=l;y+=""!==g?'<br>Email : <a class="pagelink" href="mailto:'+g+'">'+g+"</a>":"",y+=""!==d?'<br>Website : <a class="pagelink" target="_about:blank" href="'+d+'">'+d+"</a><br>":"",h("profiles").innerHTML=y,y="";var f="data/player",b=40;if(null!==r[1].getAttribute("faceBook")&&"True"===r[1].getAttribute("faceBookChecked")){var v=n(r[1].getAttribute("faceBook"));y+='<br><a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/fb.png" alt="facebook" style="width:'+b+'px;position:relative" ></a> '}if(null!==r[1].getAttribute("googlePlus")&&"True"===r[1].getAttribute("googlePlusChecked")){var v=n(r[1].getAttribute("googlePlus"));y+='<a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/gPlus.png" alt="Google Plus" style="width:'+b+'px;position:relative"></a> '}if(null!==r[1].getAttribute("twitter")&&"True"===r[1].getAttribute("twitterChecked")){var v=n(r[1].getAttribute("twitter"));y+='<a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/tweet.png" alt="Twitter" style="width:'+b+'px;position:relative"></a> '}if(null!==r[1].getAttribute("youTube")&&"True"===r[1].getAttribute("youTubeChecked")){var v=n(r[1].getAttribute("youTube"));y+='<a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/yt.png" alt="YouTube" style="width:'+b+'px;position:relative"></a> '}if(null!==r[1].getAttribute("blogger")&&"True"===r[1].getAttribute("bloggerChecked")){var v=n(r[1].getAttribute("blogger"));y+='<a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/blog.png" alt="Blogger" style="width:'+b+'px;position:relative"></a> '}if(null!==r[1].getAttribute("rss")&&"True"===r[1].getAttribute("rssChecked")){var v=n(r[1].getAttribute("rss"));y+='<a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/rss.png" alt="rss" style="width:'+b+'px;position:relative"></a> '}if(null!==r[1].getAttribute("linkedIn")&&"True"===r[1].getAttribute("linkedInChecked")){var v=n(r[1].getAttribute("linkedIn"));y+='<a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/in.png" alt="LinkedIn" style="width:'+b+'px;position:relative"></a> '}if(null!==r[1].getAttribute("userLocation")&&"True"===r[1].getAttribute("userLocationChecked")){var v=n(r[1].getAttribute("userLocation"));y+='<a target="_about:blank" href="'+v+'"><img class="img2" src="'+f+'/map.png" alt="Location" style="width:'+b+'px;position:relative"></a>'}h("socialLinks").innerHTML=y,h("presInfo").style.display="block",h("slideNote").style.top="145px"}catch(m){}}var o,r,l,s=this,c=s.document,u={},g=!1,h=function(t){return c.getElementById(t)},d=function(){this.OnError=function(){},this.OnLoadingStart=function(){t()},this.OnLoadingEnd=function(){e()},this.OnSlideChange=function(t){p.HandleSlideChange(t)},this.OnMovToNxtAnim=function(){},this.OnMovToPrvAnim=function(){},this.OnPlayingStart=function(){g=!0,p.HandlePlayAndPause(!0)},this.OnPlayingEnd=function(){g=!1,p.HandlePlayAndPause(!1)},this.OnProgressChange=function(t){p.HandleProgress(t)},this.OnSlideEnd=function(t){},this.OnSldOutlineLoad=function(t){},this.InitaliseSettings=function(t){u=t,i()}};Pcl=function(){function t(){function t(){c.body.removeChild(s.iabho)}r&&(navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPod/i))&&(s.iabho=c.createElement("div"),c.body.appendChild(s.iabho),s.iabho.style.height="1000px",setTimeout(t(),100),s.scrollTo(0,1))}function e(t){var e=t.toString();return e.indexOf("e")>0?Math.floor(t):t}function i(t){var e=(""+u.TotalSlides).length,i=(""+t).length;return i===e?t:i===e-1?"0"+t:i===e-2?"00"+t:t}this.r=function(){if(t(),navigator.userAgent.match(/iPad/i))if(1===s.orc&&1===l)s.orc=0;else if(1===l)return;var i,n,a,c=s.innerWidth,g=s.innerHeight,d=h("player"),p=50,y=0;u.MaxScale>0?(i=g>u.Height*u.MaxScale?u.Height*u.MaxScale:g,n=c>u.Width*u.MaxScale?u.Width*u.MaxScale:c):(i=g,n=c),"block"===h("panel").style.display&&(y=250),a=n-y<u.Width||i-p<u.Height?(u.Width-(n-y))/u.Width<(u.Height-(i-p))/u.Height?1-(u.Height-(i-p))/u.Height:1-(u.Width-(n-y))/u.Width:(n-y-u.Width)/u.Width>(i-p-u.Height)/u.Height?1+(i-p-u.Height)/u.Height:1+(n-y-u.Width)/u.Width,o.SetScale(a),0===u.MaxScale&&(n=y+u.Width*a),d.style.height=e(i)+"px",d.style.width=e(n)+"px",d.style.top=e((g-i)/2)+"px",d.style.left=e((c-n)/2)+"px";var f=h("resizer");f.style.top=0,f.style.left=0,f.style.webkitTransform="scale("+e(a)+")",f.style.MozTransform="scale("+e(a)+")",f.style.OTransform="scale("+e(a)+")",f.style.msTransform="scale("+e(a)+")";var b=h("contentHolder");b.style.height=e(u.Height*a)+"px",b.style.width=e(u.Width*a)+"px";var v=e(y+(n-y-a*u.Width)/2),m=e((i-p-a*u.Height)/2);b.style.marginLeft=v+"px",b.style.marginTop=m+"px";var x=h("loadingImg");x.style.height=e(u.Height*a)+"px",x.style.width=e(u.Width*a)+"px",x.style.marginTop=m+"px",x.style.marginLeft=v+"px";var k=h("panel");k.style.height=e(i-p)+"px",h("noteDisplay").style.height=e(i-p-40)+"px",h("buttonDiv").style.left=e(n/2-25)+"px";var T=(n/2-70-95)/200;T=T>.8?.8:T,T=.33>T?.33:T;var A=h("progress");A.style.webkitTransform="scale("+e(T)+",1)",A.style.MozTransform="scale("+e(T)+",1)",A.style.OTransform="scale("+e(T)+",1)",A.style.msTransform="scale("+e(T)+",1)",A.parentNode.style.width=e(200*T)+"px";var w=h("notesButton").style,H=h("status").style,P=h("time").style,M=h("logo").style;n>427?(P.opacity=1,H.opacity=1,M.display="block",A.style.opacity=1,null!==k&&(w.right="65px",w.opacity=1)):(P.opacity=0,M.display="none",A.style.opacity=0,H.opacity=1,null!==k&&(w.opacity=1),300>n&&(null!==k&&(w.opacity=0),r||(H.opacity=0)));var L=h("play");if(null!==L){var C=L.style;C.height=e(a*u.Height)+"px",C.width=e(a*u.Width)+"px"}var S=h("slideNote"),O=10;"block"===h("presInfo").style.display&&(O=parseInt(S.style.top)),S.style.height=parseInt(k.style.height)-O+"px",h("noteDisplay").style.height=parseInt(k.style.height)-O-55+"px"},this.HandleProgress=function(t){var e=Math.floor(t/1e3%60),i=Math.floor(t/1e3/60%60);10>e&&(e="0"+e),10>i&&(i="0"+i),h("times").innerHTML=i+":"+e;var n=200/u.TotalTime*t;n>200&&(n=200),h("Bar").style.width=n+"px"},this.n=function(t){var e=o.GetFormatedNotes(t),i=h("noteDisplay");i.innerHTML="";for(var n=e.length,a=0;n>a;a++){var r=e[a],l=r.level,s=r.words,u=c.createElement("p");u.style.marginLeft=10*l+"px";for(var g=s.length,d=0;g>d;d++){var p=s[d],y=p.text,f=c.createElement("span");f.innerHTML=y,p.bold&&(f.style.fontWeight="bold"),p.italic&&(f.style.fontStyle="italic"),p.underline&&p.line_through?f.style.textDecoration="line-through underline":p.line_through?f.style.textDecoration="line-through":p.underline&&(f.style.textDecoration="underline"),u.appendChild(f)}i.appendChild(u)}},this.HandleSlideChange=function(t){switch(t){case-1:break;case 0:break;default:h("statusCurrent").value=i(t),u.CurrentSlide=t,p.n(t)}},this.HandlePlayAndPause=function(t){var e=h("playB");switch(t){case!0:e.style.backgroundPosition="-99px 0px";break;case!1:e.style.backgroundPosition="-1px 0px"}}};var p=new Pcl;if(h("notesButton").onclick=function(){var t=h("panel");"block"===t.style.display?t.style.display="none":t.style.display="block",p.r()},h("btnShowInfo").onclick=function(t){var e=h("presInfo");"more info"===t.innerHTML?(t.innerHTML="less info",e.style.overflowY="auto",e.scrollTop=100):(t.innerHTML="more info",e.style.overflowY="hidden",e.scrollTop=0)},!c.createElement("canvas").getContext){h("resizer").innerHTML="";var y=h("toolbar");return y.innerHTML="",y.style.width="0px",void c.write("Oops! Your browser does not support HTML5. You need to upgrade your browser to view this content.")}var f={playAnimationsOnLoad:!0,skipBlankSlide:!1,dgradeAnim:!1};o=new DopPresentation(new d,f),o.SetRPath("data/");try{c.createEvent("TouchEvent"),r=!0}catch(b){r=!1}s.Presentation=o,s.Presentation.LoadPres("pres",1),a(presenterNode)}window.onload=DopPlayer;