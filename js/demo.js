

$(function(){
	var $typein = $("#typein .typein")//把会用到的jq对象声明为变量。
	$typein.focus(function(){
    	$(this).parent('.typearea').css("border-bottom","2px solid #ff5c01");
  	});
  	$typein.blur(function(){
    	$(this).parent('.typearea').css("border-bottom","2px solid #fff");
  	});
  	// 表单部分元素被选中时改变边框颜色

  	$('#our_work .os_turn').hover(function(){
  		$(this).find('.mask').stop().fadeToggle('fast');
  	});

  	$('#about_us .r_img').hover(function(){
  		$(this).find('.smog').stop().fadeToggle('normal');
  	});
    //图片蒙版效果
  	$('#position').mouseenter(function(){
  		$('#orange').slideDown('slow')
  		$('#white').delay(700).fadeIn('slow');	
  	});
  	//鼠标进入头部区域特效


  	

  	var line = function (){
  		var $s_circle = $('#time_line .s_circle'),
	  		$pgroup = $('#time_line .NewBs p'),
	  		$round = $('#time_line .round'),
  			$spans = $('#time_line .years span');//把所有会用到的jq对象声明为变量。



        $round.mouseenter(function(){
        	var index = $round.index(this); //声明当前对象位置
            $s_circle.removeClass('current');//删除橙色块
            $(this).find('.s_circle').addClass('current');//当前块加橙色
            $($pgroup[index]).addClass('focus').siblings().removeClass('focus');//给字样加灰色背景
            $($spans[index]).addClass('thisyear').siblings().removeClass('thisyear');//给年份加橙色
        });
        //改良后的timeline特效。



  		// $($($round[0]).mouseenter(function(){
	  	//   	$s_circle.removeClass('current');
	  	//  	$(this).find('.s_circle').addClass('current');
	  	//  	$($pgroup[0]).addClass('focus').siblings().removeClass('focus');
	  	//  	$($spans[0]).addClass('thisyear').siblings().removeClass('thisyear');
	  	// }));
	  	// $($($round[1]).mouseenter(function(){
	  	//   	$s_circle.removeClass('current');
	  	//  	$(this).find('.s_circle').addClass('current');
	  	// 	$($pgroup[1]).addClass('focus').siblings().removeClass('focus');
	  	//  	$($spans[1]).addClass('thisyear').siblings().removeClass('thisyear');
	  	// }));
	  	// $($($round[2]).mouseenter(function(){
	  	//   	$s_circle.removeClass('current');
	  	//  	$(this).find('.s_circle').addClass('current');
	  	// 	$($pgroup[2]).addClass('focus').siblings().removeClass('focus');
	  	//  	$($spans[2]).addClass('thisyear').siblings().removeClass('thisyear');
	  	// }));
	  	// $($($round[3]).mouseenter(function(){
	  	//   	$s_circle.removeClass('current');
	  	//  	$(this).find('.s_circle').addClass('current');
	  	// 	$($pgroup[3]).addClass('focus').siblings().removeClass('focus');
	  	//  	$($spans[3]).addClass('thisyear').siblings().removeClass('thisyear');
	  	// }));
	  	// 改良前
  	};

  	line();
  	
  	$('#ceo img').mouseenter(function(){
  		var link = $(this).attr('alt'),
  			origin = $(this).attr('src'),
  			name = $(this).attr('name'),
  			title = $(this).attr('title');
  		$('#pname').html(name);
  		$('#ptitle').html(title);
  		$(this).attr('src',link);
  		
		$(this).mouseleave(function(){
	  		$('#pname').html('&nbsp;');
	  		$('#ptitle').html('&nbsp;');
	  		$(this).attr('src',origin)	
	  	})
  	})
  	
	$("#our_blog .showimg , #time_line .skill img , #our_service .services img").click(function(){  
        var _this = $(this);//将当前的pimg元素作为_this传入函数  
        imgShow("#outerdiv", "#innerdiv", "#bigimg", _this);  
    });
    $(".l_img , .mypho , .myphou").click(function(){
        author("#forauthor", "#innerauthor", "#myphoto");
    });
    // $("").click(function(){
    //     var _this = $(this);//将当前的pimg元素作为_this传入函数
    //     author("#forauthor", "#innerauthor", "#myphoto", _this);
    // });
    // $("").click(function(){
    //     var _this = $(this);//将当前的pimg元素作为_this传入函数
    //     author("#forauthor", "#innerauthor", "#myphoto", _this);
    // });

    // $("#our_blog .showimg").click(function(){
   //      var _this = $(this);
   //      var src = _this.attr('src');
   //      var windowW = $(window).width();//获取当前窗口宽度  
   //      var windowH = $(window).height();//获取当前窗口高度  
   //      var realWidth = _this.width();//获取图片真实宽度  
   //      var realHeight = _this.height();//获取图片真实高度  
   //      var imgWidth,
   //      	imgHeight; 
   //      var scale = 0.8;//缩放尺寸，当图片真实宽度和高度大于窗口宽度和高度时进行缩放  
        
   //      if(realHeight>windowH*scale) {//判断图片高度  
   //          imgHeight = windowH*scale;//如大于窗口高度，图片高度进行缩放  
   //          imgWidth = imgHeight/realHeight*realWidth;//等比例缩放宽度  
   //          if(imgWidth>windowW*scale) {//如宽度扔大于窗口宽度  
   //              imgWidth = windowW*scale;//再对宽度进行缩放  
   //          }  
   //      } else if(realWidth>windowW*scale) {//如图片高度合适，判断图片宽度  
   //          imgWidth = windowW*scale;//如大于窗口宽度，图片宽度进行缩放  
   //                      imgHeight = imgWidth/realWidth*realHeight;//等比例缩放高度  
   //      } else {//如果图片真实高度和宽度都符合要求，高宽不变  
   //          imgWidth = realWidth;  
   //          imgHeight = realHeight;  
   //      }  
   //      $('#bigimg').css({'width':imgWidth,'height':imgHeight}).attr('src', src);//以最终的宽度对图片缩放  
          
   //      var w = (windowW-imgWidth)/2;//计算图片与窗口左边距  
   //      var h = (windowH-imgHeight)/2;//计算图片与窗口上边距  
   //      alert(realWidth);
   //      $(innerdiv).css({'top':h, 'left':w});//设置#innerdiv的top和left属性  
   //      $(outerdiv).fadeIn("fast");//淡入显示#outerdiv及 

   //      $(outerdiv).click(function(){//再次点击淡出消失弹出层  
   //      $(this).fadeOut("fast");  
   //  });  
   //  });
    $("#ow_nav li a").click(function(){
        $(this).parent().addClass("choo").siblings().removeClass("choo");
        var index = $("#ow_nav li a").index(this);
        showList(index);
        return false;
    }).eq(0).click();


	// var num = 0,
	// 	timer = setInterval(autoPlay,1);
    //
	// function autoPlay(){
	// 	num--;
	// 	num <= -2348 ? num = 0 : num ;
	// 	$('#inner_figures').css("left",num);
	// 	$('#figures').mouseover = function () {
	// 		clearInterval(timer);
	// 	}
     //    $('#figures').mouseout = function(){
	// 		timer = setInterval(autoPlay,1);
	// 	};
	// }


}) 
 	

 

