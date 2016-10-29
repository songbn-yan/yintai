window.onload=function(){


	var imgs=$('.banner-img');
	var lis=$('.Yuan-li');
	var box=$(".B-banner")[0];
	var bj=$(".aaaa");
	var width=parseInt(getStyle(box,'width'));
	var left=$('#left');
	var right=$('#right');
	// 下标
	var n=0;
	var t=setInterval(move,2500);

	function move(){
		
			n++;
			// 
			if(n>=imgs.length){
				n=0;
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.display='none';
				bj[i].style.display='none';
				lis[i].style.background='#211616';
			}
			imgs[n].style.display='block';
			bj[n].style.display='block';
			lis[n].style.background='#FE116F';
		
	}

	box.onmouseover=function(){
		clearInterval(t);
		animate(right,{opacity:1})
		animate(left,{opacity:1})
	}

	box.onmouseout=function(){
		t=setInterval(move,2500);
		animate(right,{opacity:0})
		animate(left,{opacity:0})
	}

	for(var i=0;i<lis.length;i++){
		
			lis[i].index=i;
			lis[i].onclick=function(){
				for(var i=0;i<lis.length;i++){
					lis[i].style.background='#211616';
					bj[i].style.display='none';
					imgs[i].style.display='none';
				}
				this.style.background='#FE116F';
				imgs[this.index].style.display='block';
				bj[this.index].style.display='block';
				n=this.index;
		}
	}

	right.onclick=function(){
		move();
	}


	left.onclick=function(){
			n-=1;
			// 
			if(n<0){
				n=imgs.length-1;
			}
			for(var i=0;i<imgs.length;i++){
				imgs[i].style.display='none';
				bj[i].style.display='none';
				lis[i].style.background='#211616';
			}
			imgs[n].style.display='block';
			lis[n].style.background='#FE116F';
			bj[n].style.display='block';
	}
 		
 			
		  
		




//图片左移
	// function imgLeftMove(){
	// 	var leftbtn=$("#left");
	// 	var rightbtn=$("#right");
	// 	var move=$(".img-left-move");
	// 	  for(var i=0;i<move.length;i++){
	// 	    move[i].bb=i;
	// 	    move[i].onmouseover=function(){
	// 	    	animate(rightbtn,{opacity:1})
 //        		animate(leftbtn,{opacity:1})
	// 	    	animate(move[this.bb],{marginRight:10},300);
	// 	    }
	// 	    move[i].onmouseout=function(){
	// 	    	animate(rightbtn,{opacity:0})
 //        		animate(leftbtn,{opacity:0})
	// 	    	animate(move[this.bb],{marginRight:0},300);
 //           }
	// 	}
	// }
	// imgLeftMove();


	//中间轮播


	function lunboNode(obj,simg,slis,left_pic,right_pic){

		var sbox=obj;
		
		var simg=simg;
		var slis=slis;
		var left_pic=left_pic;
		var right_pic=right_pic;
		var kuang=parseInt(getStyle(sbox,'width'));
		var sn=0;
		var snext=0;
		var flag=true;
		var sit=setInterval(smove,7000);
		function smove(){
			if(!flag){
			return;
			}
			flag=false;
			snext=sn+1;
			if(snext>=simg.length){
				snext=0;
			}
			simg[snext].style.left=kuang+'px';
			animate(simg[sn],{left:-kuang},800);
			animate(simg[snext],{left:0},800,function(){
					flag=true;
				});

			for(var i=0;i<slis.length;i++){
				slis[i].style.background='gray';
			}
			slis[snext].style.background='#F0447E';
			sn=snext;
		}




		sbox.onmouseover=function(){
			animate(left_pic,{opacity:1},0)
			animate(right_pic,{opacity:1},0)
			clearInterval(sit);
		}
		sbox.onmouseout=function(){
			animate(right_pic,{opacity:0},0)
			animate(left_pic,{opacity:0},0)
			sit=setInterval(smove,7000);
		}




		right_pic.onclick=function(){
			smove();
		}


		left_pic.onclick=function(){
			if(!flag){
			return;
			}
			flag=false;
			snext=sn+1;
			if(snext>=simg.length){
				snext=0;
			}
			simg[snext].style.left=-kuang+'px';
			animate(simg[sn],{left:kuang},800);
			animate(simg[snext],{left:0},800,function(){
					flag=true;
				});

			for(var i=0;i<slis.length;i++){
				slis[i].style.background='gray';
			}
			slis[snext].style.background='#F0447E';
			sn=snext;
		}



		for(var i=0;i<slis.length;i++){
			slis[i].index=i;
			slis[i].onclick=function(){
				if(this.index>sn){
					if(!flag){
					return;
					}
					flag=false;
					simg[this.index].style.left=kuang+'px';
					animate(simg[sn],{left:-kuang},800);
					animate(simg[this.index],{left:0},800,function(){
							flag=true;
						});
					for(var i=0;i<slis.length;i++){
					slis[i].style.background='gray';
					}
					slis[this.index].style.background='#F0447E';
				}else if(this.index<sn){
					if(!flag){
					return;
					}
					flag=false;
					simg[this.index].style.left=-kuang+'px';
					animate(simg[sn],{left:kuang},800);
					animate(simg[this.index],{left:0},800,function(){
							flag=true;
						});
					for(var i=0;i<slis.length;i++){
						slis[i].style.background='gray';
					}
					slis[this.index].style.background='#F0447E';
				}
				sn=this.index;
				snext=this.index;
			}
		}

	}

	var sbox=$(".tongY")[0];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[0];
	
	var right_pic=$(".right-pic")[0];

	lunboNode(sbox,simg,slis,left_pic,right_pic);


	var sbox=$(".tongY")[1];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[1];
	
	var right_pic=$(".right-pic")[1];

	lunboNode(sbox,simg,slis,left_pic,right_pic);


	var sbox=$(".tongY")[2];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[2];
	
	var right_pic=$(".right-pic")[2];

	lunboNode(sbox,simg,slis,left_pic,right_pic);



	var sbox=$(".tongY")[3];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[3];
	
	var right_pic=$(".right-pic")[3];

	lunboNode(sbox,simg,slis,left_pic,right_pic);


	var sbox=$(".tongY")[4];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[4];
	
	var right_pic=$(".right-pic")[4];

	lunboNode(sbox,simg,slis,left_pic,right_pic);


	var sbox=$(".tongY")[5];
	var simg=$(".Simg",sbox);
	var slis=$(".TWO",sbox);
	var left_pic=$(".left-pic")[5];
	
	var right_pic=$(".right-pic")[5];

	lunboNode(sbox,simg,slis,left_pic,right_pic);




	// 跳转楼层

	var floor_nav=$(".floor-nav")[0];
	var floor_lis=$(".floor-lis");
	var floor=$(".floor");
	var lisB=$(".lisB");
	var flag1=true;
	var cHeight=document.documentElement.clientHeight;
	var nHeight;
	
	for(var i=0;i<floor.length;i++){
		floor[i].h=floor[i].offsetTop;
	}

	window.onscroll=function(){
		var obj=document.body.scrollTop? document.body:document.documentElement;
		var top=obj.scrollTop;

		if(top>=floor[0].h-250){
			floor_nav.style.display="block";
			nHeight=floor_nav.offsetHeight;
			floor_nav.style.top=(cHeight-nHeight)/2+"px";
			if(flag1){
				flag1=false;
			}
			
		}
		if(top<floor[0].h-800){
			floor_nav.style.display="none";
		}

		for(var i=0;i<floor.length;i++){
			if(top>=floor[i].h-200){
				for(var j=0;j<lisB.length;j++){
					lisB[j].style.display="none";
				}
				lisB[i].style.display="block";
				now=i;
			}
		}
		
	}

	for(var i=0;i<floor_lis.length;i++){
		floor_lis[i].index=i;
		floor_lis[i].onclick=function(){
			animate(document.body,{scrollTop:floor[this.index].h})
			animate(document.documentElement,{scrollTop:floor[this.index].h})
		}


	
	}
	

	for(var i=0;i<lisB.length;i++){
		lisB[i].index=i;
		
		floor_lis[i].onmouseover=function(){
			for(var i=0;i<lisB.length;i++)
				lisB[this.index].style.display="block";
		}
		floor_lis[i].onmouseout=function(){
			for(var i=0;i<lisB.length;i++)
				lisB[this.index].style.display="none";
		}


	
	}

var obj=document.body.scrollTop?
		document.body:document.documentElement;
		var back=$(".backH")[0];
		back.onclick=function(){
			
			animate(document.body,{scrollTop:0},100);
			animate(document.documentElement,{scrollTop:0},100);
		}




// 最顶部下拉框

	var weixinbox=$(".weixin-box")[0];
    var clickweixin=$(".clickweixin")[0];
    weixinbox.onmouseover=function(){
        clickweixin.style.display="block";
        clickweixin.onmouseover=function(){
            clickweixin.style.display="block";
        }
        clickweixin.onmouseout=function(){
            clickweixin.style.display="none";
        }
    }
    var sjytbox=$(".sjyt-box")[0];
    var clicksjyt=$(".clicksjyt")[0];
    sjytbox.onmouseover=function(){
        clicksjyt.style.display="block";
        clicksjyt.onmouseover=function(){
            clicksjyt.style.display="block";
        }
        clicksjyt.onmouseout=function(){
            clicksjyt.style.display="none";
        }
    }
     var wdyt=$(".wdyt")[0];
    var clickwdyt=$(".clickwdyt")[0];
    wdyt.onmouseover=function(){
        clickwdyt.style.display="block";
        clickwdyt.onmouseover=function(){
            clickwdyt.style.display="block";
        }
        clickwdyt.onmouseout=function(){
            clickwdyt.style.display="none";
        }
    }
// function xllb(xl){
// 	var xlk=xl;
// 	for(var i=0;i<xlk.length;i++){
		
// 		hover(xlk[i],function(){
// 			var height=this.offsetHeight;
// 			this.style.background="#fff";
// 			var ul=$(".hid",this)[0];
// 			var len=$("li",ul).length;
// 			var ulHeight=len*height;
// 			animate(ul,{height:ulHeight},0);
// 		},function(){
// 			var that=this;
// 			var ul=$(".hid",this)[0];
// 			animate(ul,{height:0},0,function(){
// 				that.style.background="#eee";
// 			});

// 		})
// 	}


// }
//  var xlk=$(".xlk");
//  xllb(xlk);




//banner导航

function xiala1(kind,jty){
	var kind=kind;
	var jty=jty;
	for (var i=0;i<kind.length;i++){
	
		kind[i].index=i;
	    hover(kind[i],function(){
	    	for(var i=0;i<kind-lis;i++){
	    		jty[i].index=i;
	    		jty[i].style.display="block";
	    	}
	    	jty[this.index].style.display="none";
	    	console.log(jty[i])
	        this.style.background='#E5004F';
	        var ui=$('.kind-right')[this.index];  
	        animate(ui,{width:500},0);

	    },function(){
	    	for(var i=0;i<kind-lis;i++){
	    		jty[i].style.display="none";
	    	}
	    	jty[this.index].style.display="block";
	        var ui=$('.kind-right')[this.index];      
	        var that=this
	        animate(ui,{width:0},0,function(){
	            that.style.background='#333333'; 
	        })
	    })
	}
}

var kind=$(".kind-lis")
var jty=$(".jty")
xiala1(kind,jty)



//图片边框
function linebox(){
	var picBox=$(".line-box");	
	var top=$(".border_top")
	var right=$(".border_right")
	var bottom=$(".border_bottom")
	var left=$(".border_left")
	var sudu=500;	
	for(var i=0; i<picBox.length;i++){
		picBox[i].aa=i		
		picBox[i].onmouseover=function(){
			animate(top[this.aa],{width:picBox[this.aa].offsetWidth},sudu);
			animate(right[this.aa],{height:picBox[this.aa].offsetHeight},sudu);
			animate(bottom[this.aa],{width:picBox[this.aa].offsetWidth},sudu);
			animate(left[this.aa],{height:picBox[this.aa].offsetHeight},sudu);
		}
		picBox[i].onmouseout=function(){
			animate(top[this.aa],{width:0},sudu);
			animate(right[this.aa],{height:0},sudu);
			animate(bottom[this.aa],{width:0},sudu);
			animate(left[this.aa],{height:0},sudu);
		}
	}
}
linebox()




// 选项卡

	var xxk=getClass('xxk');
	var PIC=getClass('PIC');
	var hx=getClass("hx");
	for(var i=0;i<xxk.length;i++){
		xxk[i].index=i;
		xxk[i].onmouseover=function(){
		for(var i=0;i<xxk.length;i++){
				xxk[i].style.cssText='border-bottom: 5px solid #333333;font-weight: normal;'
			} 
			this.style.cssText='border-bottom: 5px solid #E5004F;font-weight: bold;';
		for(var i=0;i<PIC.length;i++){
			PIC[i].style.display='none';
		}
		PIC[this.index].style.display='block';
		for(var i=0;i<hx.length;i++){
			hx[i].style.background='#333';
		}
		hx[this.index].style.background='#e5004f';
		}
	}


	var xxk2=getClass('xxk2');
	var PIC2=getClass('PIC2');
	var hx2=getClass("hx2");
	for(var i=0;i<xxk2.length;i++){
		xxk2[i].index=i;
		xxk2[i].onmouseover=function(){
		for(var i=0;i<xxk2.length;i++){
				xxk2[i].style.cssText='font-weight: normal;'
			} 
			this.style.cssText='font-weight: bold;';
		for(var i=0;i<PIC2.length;i++){
			PIC2[i].style.display='none';
		}
		PIC2[this.index].style.display='block';
		for(var i=0;i<hx2.length;i++){
			hx2[i].style.background='#333';
		}
		hx2[this.index].style.background='#e5004f';
		}
	}





	// 楼层中小图标轮播
function tubiaolunbo(leftbotBOX,imgBOX,licon,ricon){

	 	var leftbotBOX=leftbotBOX;
		var imgBOX=imgBOX;
		var boxwidth=parseInt(getStyle(leftbotBOX,'width'));
		var licon=licon;
		var ricon=ricon;
		var a=0;
		var nexta=0;
		var flag=true;
		ricon.onclick=function(){
			if(!flag){
				return;
			}
			flag=false;
			nexta=a+1;
			if(nexta>=imgBOX.length){
				nexta=0;
			}
			imgBOX[nexta].style.left=boxwidth+'px';
			animate(imgBOX[a],{left:-boxwidth},600);
			animate(imgBOX[nexta],{left:0},600,function(){
				flag=true;
			});
			a=nexta;
		}
		licon.onclick=function(){
			if(!flag){
				return;
			}
			flag=false;
			nexta=a-1;
			if(nexta<0){
				nexta=imgBOX.length-1;
			}
			imgBOX[nexta].style.left=-boxwidth+'px';
			animate(imgBOX[a],{left:boxwidth},600);
			animate(imgBOX[nexta],{left:0},600,function(){
				flag=true;
			});
			a=nexta;
		}

	}
var leftbotBOX=$(".leftbotbox1")[0];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[0];
var ricon=$(".ricon")[0];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);


var leftbotBOX=$(".leftbotbox1")[1];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[1];
var ricon=$(".ricon")[1];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);

var leftbotBOX=$(".leftbotbox1")[2];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[2];
var ricon=$(".ricon")[2];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);

var leftbotBOX=$(".leftbotbox1")[3];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[3];
var ricon=$(".ricon")[3];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);

var leftbotBOX=$(".leftbotbox1")[4];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[4];
var ricon=$(".ricon")[4];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);

var leftbotBOX=$(".leftbotbox1")[5];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[5];
var ricon=$(".ricon")[5];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);

var leftbotBOX=$(".leftbotbox1")[6];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[6];
var ricon=$(".ricon")[6];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);

var leftbotBOX=$(".leftbotbox1")[7];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[7];
var ricon=$(".ricon")[7];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);


var leftbotBOX=$(".leftbotbox1")[8];
var imgBOX=$(".leftbotbox",leftbotBOX);
var licon=$(".licon")[8];
var ricon=$(".ricon")[8];
tubiaolunbo(leftbotBOX,imgBOX,licon,ricon);


     	var Xlk=function(jj,ewm){
        var mean=jj;
		var ewm=ewm;
		for(var i=0; i<mean.length;i++){
		 	mean[i].index=i;
		 	mean[i].onmouseover=function(){
		 		for(var i=0;i<ewm.length;i++){
		 			ewm[i].style.display="none";
		 		};
		 		ewm[this.index].style.display="block";
		 		this.style.background="#fff";
		 	}
		 	mean[i].onmouseout=function(){
		 		for(var i=0;i<ewm.length;i++){
		 			ewm[i].style.display="none";
		 		};
		 		this.style.background="#EEEEEE";
		 	}
		 
		}



	}

		 var mean=$(".display");
		 var ewm=$(".wechat1");

		 Xlk(mean,ewm);

		 var mean=$(".none");
		 var ewm=$(".wechat2");

		 Xlk(mean,ewm);

}

//图片懒加载 
var a=jQuery.noConflict();
a(document).ready(function(){
	a("img.lazy").lazyload({

	});
})



