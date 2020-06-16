// JavaScript Document

//index.html

$(function(){
	$('#popover_btn_no').popover({
		animation: true,
		trigger:'focus',
	});
	$('#popover_btn_yes').popover({
		animation: true,
		html: true,
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><a href = "./pages/room.html"><div class="popover-content"></div></a></div>',
	});
});


//room.html

$('#notebook').on('click', function(){
$('#myModalQuestion').modal('show');
jQuery('#wrong_pw').hide();
$('#password_box').val('');
});
	
$('#program_btn').on('click', function(){
$('#myModalQuestion').modal('hide');
$('#myModalProgram').modal('show');
});
	
$('#docs_btn').on('click', function(){
$('#myModalQuestion').modal('hide');
$('#myModalDocs').modal('show');
});
	
$('#pics_btn').on('click', function(){
$('#myModalQuestion').modal('hide');
$('#myModalPics').modal('show');
});

$('#return_btn1').on('click', function(){
$('#myModalProgram').modal('hide');
$('#myModalQuestion').modal('show');
});
	
$('#return_btn2').on('click', function(){
$('#myModalDocs').modal('hide');
$('#myModalQuestion').modal('show');
});
	
$('#return_btn3').on('click', function(){
$('#myModalPics').modal('hide');
$('#myModalQuestion').modal('show');
});
		
$('#okay').on('click', function(){
	if($("#password_box").val() == "717"){   
    	jQuery('#test').show();  
		jQuery('#wrong_pw').hide();
		jQuery('#form-inline').hide();
		jQuery('#right_pw').show();
    } else {  
		jQuery('#wrong_pw').show();
		$('#password_box').val('');
    }  
});
	
$(function(){
	$('#book').popover({
		animation: true,
		trigger:'hover',
		html: true,
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	});		
	$('#pad').popover({
		animation: true,
		trigger:'hover'
	});				
	$('#monitor').popover({
		animation: true,
		trigger:'hover'
	});	
					
	$('#speaker').popover({
		animation: true,
		trigger:'hover'
	});				
	$('#goods').popover({
		animation: true,
		trigger:'hover'
	});	
	$('#charge').popover({
		animation: true,
		trigger:'hover'
	});	
});