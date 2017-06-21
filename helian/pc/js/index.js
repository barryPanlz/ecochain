			$(".ind_join").find("ul").find("li").find(".add").click(function(){
				$(this).parents("li").find(".join_bot").show(300);
				$(this).parents("li").siblings("li").find(".join_bot").hide(300);
				$(this).css("display","none");
				$(this).siblings("img").css("display","block");
				$(this).parents("li").siblings("li").find(".even").css("display","none");
				$(this).parents("li").siblings("li").find(".add").css("display","block");
				$(this).parents("li").css("background","#ffffff");
				$(this).parents("li").siblings("li").css("background","#f8f8f8");
			})
			$(".ind_join").find("ul").find("li").find(".even").click(function(){
				$(this).parents("li").find(".join_bot").hide(300);
				$(this).css("display","none");
				$(this).siblings("img").css("display","block");
				$(this).parents("li").css("background","#f8f8f8");
			})
			 var hei = document.documentElement.clientHeight;
			  $(".boxed").css("height",hei+"px"); 
			  $("#b1").css("top",hei/2+100+"px");
         //浏览器的窗口大小改变 
		  window.onresize = function(){ 
			  var hei = document.documentElement.clientHeight;
			  $(".boxed").css("height",hei+"px"); 
			  $("#b1").css("top",hei/2+100+"px");
			  
        };
         //浏览器滚动事件
         var ascroll=0;
         var onub=1;
		 $(window).scroll(function(){
		 	var scrollTop =  document.body.scrollTop||document.documentElement.scrollTop ;
//		 	console.log(scrollTop);
		 	
		 	if( scrollTop > 90.5){
		 		$('.super_nav_second').slideDown("slow"); 
		 	 	$('.super_nav_first').slideUp("slow");
		 	 	
		 	if(scrollTop >= 0&&scrollTop <615){
		 		ascroll=0;
		 	}	
		 	if(scrollTop >= 615&&scrollTop <1322){
		 		ascroll=1;
		 	}
		 	if(scrollTop >= 1322&&scrollTop <2022){
		 		ascroll=2;
		 	}
		 	if(scrollTop >= 2022&&scrollTop <2722){
		 		ascroll=3;
		 	}
		 	if(scrollTop >= 2722&&scrollTop <3422){
		 		ascroll=4;
		 	}
		 	if(scrollTop >= 3422&&scrollTop <3986){
		 		ascroll=5;
		 	}
		 	if(scrollTop >=3987 &&scrollTop <4708){
		 		ascroll=6;
		 	}
//		 	console.log(ascroll)
//			console.log(onub)
//			if(ascroll>onub){
//				dongtai(on);
//				onub++;
//			}
		 		$(".nav_top2").find("li").removeClass("oli");
				$(".nav_top2").find("li").eq(ascroll).addClass("oli");
				$(".nav_top3").find("li").removeClass("ali");
				$(".nav_top3").find("li").eq(ascroll).addClass("ali");
		 	 	return false;
		 	}
		 	else if( scrollTop < 90.5){
		 	  $('.super_nav_second').slideUp("slow");
		 	  $('.super_nav_first').slideDown("slow");	
			return false;
		 	}
		 });
		 $('.nav_second li').hover(function(){
			$('span',this).stop().css('height','1px');
			$('span',this).animate({
				    left:'0',
					width:'100%',
					right:'0'
				},200);
			},function(){
				$('span',this).stop().animate({
					left:'50%',
					width:'0'
				},200);
			});
		$(".particles-js-canvas-el").ready(function(){
			 //文字效果
			 $('.fullscreen_h2').css("display","block");
			  $('.fullscreen_p').css("display","block")
			 $('.fullscreen_h2').addClass('animated zoomInUp'); 
			 $('.fullscreen_p').addClass('animated zoomInUp'); 
		})
        
		 
		
		$('.nav_first li').hover(function(){
		$('span',this).stop().css('height','1px');
		$('span',this).animate({
			    left:'0',
				width:'100%',
				right:'0'
			},400);
		},function(){
			$('span',this).stop().animate({
				left:'50%',
				width:'0'
			},400);
		});
		//我们的技术优势
		$(".ind_ul_wrap").find("li").mouseenter(function(){
			$(this).find("img").addClass("animated swing");
			$(this).siblings("li").find("img").removeClass("animated swing");
		});
		$(".ind_ul_wrap").find("li").mouseleave(function(){
			$(".ind_ul_wrap").find("img").stop().removeClass("animated swing");
		});
		//我们的服务
		$('.ind_server li').hover(function(){
		$(this).find("span").stop().css('height','10px');
		$(this).find("span").animate({
			    left:'0',
				width:'100%',
				right:'0'
			},200);
		},function(){
			$(this).find("span").stop().animate({
				left:'50%',
				width:'0'
			},200);
		});
		//加入我们】
		$(".ind_join").find("li").mouseenter(function(){
			$(".ind_join").find("span").removeClass("animated bounce");
			$(this).find("span").addClass("animated bounce");
			return false;
		});
		$(".ind_join").find("li").mouseleave(function(){
			$(".ind_join").find("span").removeClass("animated bounce");
			return false;
		});
		//导航的scrolltop
		$(".nav_top").find("li").click(function(){
			var onub=$(this).index();
			//导航对应的模块据上部高度
			var oTop=$(".fl-builder").find(".w_wrap").eq(onub).offset().top-80;
//			console.log(oTop)
			$(".fl-builder").animate({"scrollTop":oTop},1000);
			$("html").animate({"scrollTop":oTop+80},1000);
		});
		$("#fhTop").mouseover(function(){
			$(this).find("img").attr("src","img/shang.png");
		});
		$("#fhTop").mouseout(function(){
			$(this).find("img").attr("src","img/shang1.png");
		});
//点击logo返回顶部
$(".he_logo").click(function(){
	var oTop=$(".fl-builder").find(".w_wrap").eq(0).offset().top-80;
	$(".fl-builder").animate({"scrollTop":oTop},1000);
})
//轮播图
			var outer = document.getElementById("outer");
			var inner = document.getElementById("inner");
			inner.innerHTML+=inner.innerHTML;
			var start = 0;
			var time = setInterval(move,10);
			var time1;
			function move(){
				start--;
				if(start%240==0){
					clearInterval(time);
					time1 = setTimeout(function(){
						time = setInterval(move,10);
					},3000);
				}
				if(start<=-1300){
					start = 0;
				}
				inner.style.left = start + "px";
			}
			outer.onmouseover = function(){
				clearInterval(time);
				clearTimeout(time1);
			}
			outer.onmouseout = function(){
				time = setInterval(move,10);
			}