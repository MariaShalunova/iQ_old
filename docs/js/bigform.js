function step1(xml){

	$('#firststep').append(
		'<div id="leftmain" style="float: left; width: 60%;">'+
		
			'<div class="small-title"><span class="star">*</span> Наименование компании / ФИО</div>'+
			'<input name="companyname" type="value" class="required"></input>'+

			'<div class="small-title"><span class="star">*</span> Страна</div>'+
			'<select name="Scountry" id="choosecountry" class="country required"><option value="">Выберете страну</option></select>'+

			'<div class="small-title"><span class="star">*</span> Город</div>'+
			'<select class="notowns required"><option value="">Выберете город</option></select>'+
		
			'<div class="small-title"><span class="star">*</span> Телефон</div>'+
			'+7 <input class="required mobile" type="value" name="phone1"></input><br />'+
			'+7 <input class="mobile" type="value" name="phone2"></input><br />'+
			'+7 <input class="mobile" type="value" name="phone3"></input><br />'+
			'<label for="phone1" class="error" generated="true"></label>'+

			'</div>'+
		
		'<div style="float: left;">'+
		
		'<div class="small-title"><span class="star">*</span> E-mail</div>'+
		'<input name="email" type="value" class="required email"></input>'+

		'<div class="small-title">ICQ</div>'+
		'<input name="icq" type="value" class="icq"></input>'+	

		'<div class="small-title">Skype</div>'+
		'<input name="skype" type="value" class="skype"></input>'+

		'</div><div class="clear"></div>'+

		'<input type="checkbox" id="sameaddress" name="sameaddress">Мой адрес доставки совпадает с платежным</input>'+

	'<a id="next2" style="float: right; position: relative; margin-top: 50px;" href="#1" class="button_blue">Продолжить</a>'
		);

	$("#fourstep").append(
		'<div id="delform">'+
			'<div style="float: left; width: 55%;">'+
			'<div class="small-title"><span class="star">*</span> Наименование компании / ФИО</div>'+
			'<input name="delcompanyname" type="value" class="required"></input>'+

			'<div class="small-title"><span class="star">*</span> Страна</div>'+
			'<select name="delScountry" id="delchoosecountry" class="country required"><option value="">Выберете страну</option></select>'+

			'<div class="small-title"><span class="star">*</span> Город</div>'+
			'<select class="delnotowns required"><option value="">Выберете город</option></select>'+
			'</div>'+
		
			'<div style="float: right;">'+
			'<div class="small-title"><span class="star">*</span> Телефон</div>'+
			'+7 <input class="required mobile" type="value" name="delphone1"></input><br />'+
			'+7 <input class="mobile" type="value" name="delphone2"></input><br />'+
			'+7 <input class="mobile" type="value" name="delphone3"></input><br />'+
			'<label for="delphone1" class="error" generated="true"></label>'+
			'</div>'+
			'<div class="clear"></div>'+
		'</div>'
		
		);

	var leftmain = $("#leftmain"), fstep= $("#fourstep");

	$(xml).find("Country").each(function (k) {
		var $this = $(this), options = '';

		country = $this.find("name").text();

    	var city = $this.find("cities").text().split('|');	
    	var delivery = $this.find("delivery").text().split('|');	

		leftmain.find('.notowns').after('<select id="towns'+k+'" class="towns"></select>');
		fstep.find('.delnotowns').after('<select id="deltowns'+k+'" class="deltowns"></select>');
		$('#delform').before('<div id="delivery'+k+'" class="delivery"></div>');
        
		$('.country').append('<option data-connection="'+k+'">'+country+'</option>');
	
		options = '';

		for (i in city)
		{
	     		options += '<option value="'+city[i]+'">'+city[i]+'</option>';
		}

		$('#towns'+k).append(options);
		$('#deltowns'+k).append(options);

		options = '';

		for (i in delivery)
		{
	     		options += '<input type="radio" class="chdelivery" name="mydeliver" value="'+delivery[i]+'">'+delivery[i]+'</input><br>';
		}

		$('#delivery'+k).append(options);
		       
	
	});

	var towns = $(".towns"),
			notowns = $(".notowns"), deliverys = $(".delivery");

	$("#choosecountry").change(function(){
		var showfield = $("#choosecountry option:selected").data('connection');
			towns.hide("fast");
			towns.removeAttr('name');
			notowns.hide();
			$("#towns"+showfield).show("fast");
			$("#towns"+showfield).attr('name','mytown');

			deliverys.css("display","none");		
			$("#delivery"+showfield).css("display","block");
	});
}

function step2(xml){
	$('#secondstep').append(
		
		'<input type="radio" class="template required" name="template" value="have">У меня есть макет в электронном виде.</input><br>'+
		'<input type="radio" class="template" name="template" value="donthave">У меня нет макета в электронном виде, я хочу заказать разработку макета.</input><br>'+
		'<input type="radio" class="template" name="template" value="havebad">У меня есть макет в электронном виде, но его необходимо доработать.</input>'+
		'<label for="template" class="error" generated="true"></label>'+
		'<div class="type1">'+
			'<div id="sendtemp">'+
				'<input type="radio" class="sending required" name="sendt" value="sendnow">Отправить макет сейчас</input><br>'+
				'<input type="radio" class="sending" name="sendt" value="sendlate">Отправлю макет позже</input>'+
				'<label for="sendt" class="error" generated="true"></label>'+
			'</div>'+

			'<div id="linktemplate">'+
				'<input type="radio" class="linkfile required" name="linkt" value="sendfile">Загрузить файлы сейчас</input><br>'+
				'<input type="radio" class="linkfile" name="linkt" value="sendlink">У меня есть ссылка на файл</input>'+
				'<label for="linkt" class="error" generated="true"></label>'+
			'</div>'+

			'<div id="agree"><input type="checkbox" id="agreed" name="agreed">С <a href="" target="_blank">техническими требованиями</a> к макетам согласен</input></div>'+

			'<div id="addtemp">'+
				'<div class="filecont"><input type="file" class="fagree" disabled="disabled" name="f1"><a class="removef" href="#1">Удалить файл</a></div>'+	
				'<div class="filecont"><input type="file" class="fagree" disabled="disabled" name="f2"><a class="removef" href="#1">Удалить файл</a></div>'+
				'<div class="filecont"><input type="file" class="fagree" disabled="disabled" name="f3"><a class="removef" href="#1">Удалить файл</a></div>'+
				'<div class="filecont"><input type="file" class="fagree" disabled="disabled" name="f4"><a class="removef" href="#1">Удалить файл</a></div>'+
				'<span class="confirm">Вам необходимо подтвердить согласие с техническими требованиями к макетам!</span>'+
			'</div>'+

			'<div id="links">'+
				'<div class="small-title">Текст ссылки <span>(например: http://files.mail.ru/GFIJZ)</span></div>'+
				'<input class="required linktext fagree" disabled="disabled" type="value" name="link1"></input><br />'+
				'<input class="linktext fagree" type="value" disabled="disabled" name="link2"></input><br />'+
				'<input class="linktext fagree" type="value" disabled="disabled" name="link3"></input><br />'+
				'<span class="confirm">Вам необходимо подтвердить согласие с техническими требованиями к макетам!</span>'+
			'</div>'+	
		'</div>'+

		'<div class="type2">'+

			'<div class="techz">'+
				'<input type="radio" class="havetech required" name="tz" value="have">У меня есть файл с техническим заданием на дизайн (*.doc,*.xls,*.txt)</input><br>'+
				'<input type="radio" class="havetech" name="tz" value="donthave">Я хочу заполнить форму заказа на разработку дизайна</input>'+
				'<label for="tz" class="error" generated="true"></label>'+
			'</div>'+

			'<div id="addtz">'+
				'<div class="small-title">Техническое задание (*.doc,*.xls,*.txt)</div>'+
				'<div class="filecont"><input type="file" class="ignore" accept="text/plain,application/msword,application/vnd.ms-excel" name="ftz"><a class="removef" href="#1">Удалить файл</a></div>'+	
				'<div id="fi">'+
				'<div class="small-title">Изображения для дизайна (фотографии, логотип и пр)</div>'+
				'<div class="filecont"><input type="file" class="fimore" name="fimages[]"><a class="removef" href="#1">Удалить файл</a></div>'+					
				'<a class="addfi" id="addfi" href="#1">Загрузить еще?</a>'+
				'</div>'+
				'<div class="small-title">Комментарии</div>'+
				'<textarea name="comments" style="width: 500px; height: 200px;"></textarea>'+
			'</div>'+

			'<div id="tzform">'+
				'<div id="moving">'+
					'<div class="small-title"><span class="star">*</span> Наименование заказа</div>'+
					'<select id="order" class="orders required" name="orders"><option value="">Выбрать</option></select>'+
					'<br><br><input type="value" id="otherorder"></input>'+
				'</div>'+	

				'<div id="phere" class="fstyle">'+
					'<div class="small-title">Есть ли у вас фирменный стиль компании в электронном виде</div>'+
					'<input type="radio" class="havefs required" name="fs" value="have">Да</input><br>'+
					'<input type="radio" class="havefs" name="fs" value="donthave">Нет</input>'+
					'<label for="fs" class="error" generated="true"></label>'+
				'</div>'+

				'<div id="sendfs">'+
					'<input type="radio" class="sendingfs required" name="sendfs" value="sendfsnow">Отправить сейчас файл описания фирменного стиля</input><br>'+
					'<input type="radio" class="sendingfs" name="sendfs" value="sendfslate">Отправлю позже</input>'+
					'<label for="sendfs" class="error" generated="true"></label>'+
				'</div>'+

				'<div id="addfs">'+
					'<div id="sendfilelate">'+
					'<div class="filecont"><input type="file" name="ffirmstyle"><a class="removef" href="#1">Удалить файл</a></div>'+	
					'</div>'+
					'<div id="ffs">'+
					'<div class="small-title">Изображения для дизайна(фотографии, логотип и пр)</div>'+
					'<div class="filecont"><input type="file" class="ffsmore" name="ffsimages[]"><a class="removef" href="#1">Удалить файл</a></div>'+					
					'<a class="addffs" id="addffs" href="#1">Загрузить еще?</a>'+
					'</div>'+
					'<div class="small-title">Текст для макета</div>'+
					'<textarea name="templateText" style="width: 500px; height: 200px;"></textarea>'+

					'<div class="small-title">Комментарии</div>'+
					'<textarea name="commentsFS" style="width: 500px; height: 200px;"></textarea>'+
				'</div>'+	
			'</div>'+

		'</div>'+

		'<div class="type3">'+

			'<div id="mhere" class="filecont"><input type="file" name="fbad"><a class="removef" href="#1">Удалить файл</a></div>'+
			'<span>У меня есть ссылка на файл(рекомендуется для файлов большого размера, более 15mb)</span>'+
			'<div class="small-title">Текст ссылки <span>(например: http://files.mail.ru/GFIJZ)</span></div>'+
			'<input class="linktext" type="value" name="linkTZ"></input><br />'+			
			'<div class="small-title">Что необходимо доработать в макете:</div>'+
			'<textarea name="commentsWork" style="width: 500px; height: 200px;"></textarea>'+

		'</div>'+

		'<a id="next3" style="float: right; position: relative; top: 50px;" href="#1" class="button_blue">Продолжить</a>'
		);

		var orderselect = $("#order");
	$(xml).find("Order").each(function () {
		var order = $(this).find("name").text().split('|');
	
		options = '';
		for (i in order)
		{
	     		options += '<option value="'+order[i]+'">'+order[i]+'</option>';
		}

		orderselect.append(options);		
	});

	orderselect.append('<option value="Другое...">Другое...</option>');

	var otherorder = $("#otherorder");

	orderselect.change(function(){
		var other = $("#order option:selected").val();
		if (other == "Другое...") {
			otherorder.show("fast");
			orderselect.removeAttr("name");
			otherorder.addClass("required");
			otherorder.attr("name","orders");
			
		}else{
			otherorder.hide("fast");			
			otherorder.removeAttr("name");
			otherorder.removeClass("required");
			orderselect.attr("name","orders");
		}
	});

	$(".template").change(function() {
		var tempcheck = $('input:radio[name=template]:checked').val();
		
		if(tempcheck == "have") {
			$('.type1').show("fast");
			$('.type2').hide("fast");
			$('.type3').hide("fast");
			$('#phere').before($("#moving"));
		}
		if(tempcheck == "donthave") {
			$('.type2').show("fast");
			$('.type1').hide("fast");
			$('.type3').hide("fast");
		}
		if(tempcheck == "havebad") {
			$('.type3').show("fast");
			$('.type1').hide("fast");
			$('.type2').hide("fast");
			$('#mhere').before($("#moving"));
		}
		$(".sending").removeAttr("checked");
	});
	/*Type 1*/
	var linktemplate = $('#linktemplate');

	$(".sending").click(function(){
		var maket = $('input:radio[name=sendt]:checked').val();
			if (maket == 'sendnow') {
				linktemplate.show("fast");
		  	}else{
				linktemplate.hide("fast");
			}
		addtemp.hide();
		links.hide();
		agree.hide();
		$(".linkfile").removeAttr("checked");
	});

	var addtemp = $("#addtemp"),
			links = $('#links'),
				agree = $('#agree');
	$(".linkfile").click(function(){
		var lf = $('input:radio[name=linkt]:checked').val();
			agree.show();
			if (lf == 'sendfile') {
				addtemp.show("fast");
				links.hide("fast");
		  	}else{
				links.show("fast");
				addtemp.hide("fast");
			}
	});

	/*type2*/
	var addtz = $('#addtz'),
			tzform = $('#tzform'),
				sendfs = $('#sendfs'), 
					addfs = $('#addfs'),
						havefs = $('.havefs'),
							sendingfs = $('.sendingfs');
	$(".havetech").change(function() {
		var check = $('input:radio[name=tz]:checked').val();
		
		if(check == "have") {
			addtz.show("fast");
			tzform.hide("fast");
			
		}else {		
			addtz.hide("fast");
			tzform.show("fast");
		}		
		havefs.removeAttr("checked");
		sendingfs.removeAttr("checked");
		addfs.hide();
		sendfs.hide();
	});
	/*tzform*/
	var sendfilelate = $("#sendfilelate");
	havefs.change(function() {
		var check = $('input:radio[name=fs]:checked').val();
		
		if(check == "have") {
			sendfs.show("fast");
			addfs.hide();
			sendfilelate.hide();
			
		}else {		
			sendfs.hide("fast");	
			addfs.show();
			sendfilelate.hide();		
		}		
		
		sendingfs.removeAttr("checked");
	});
	/*sendfs*/
	
	sendingfs.change(function() {
		var check = $('input:radio[name=sendfs]:checked').val();
		
		if(check == "sendfsnow") {
			addfs.show("fast");
			sendfilelate.show('fast');
			
		}else {		
			addfs.show("fast");		
			sendfilelate.hide("fast");	
		}		
	});

	var agreed = $("#agreed"), disagree =$('.fagree'), confirm = $('.confirm');
	agreed.change(function(){
		
		if (agreed.is(":checked")) {
			disagree.removeAttr('disabled');	
			confirm.hide();
		}else{
			disagree.attr('disabled','disabled');	
			confirm.show();
		}
	});	
	var ifiles=1;
	$(document).on("click","#addfi",function(){
		if (ifiles <10) {
		$('#addfi').before('<div class="filecont"><input type="file" class="fimore" name="fimages[]"><a class="removef" href="#1">Удалить файл</a>');	
		ifiles++;
		}
		$('.addfi').css("display","none");
	});
	var ffsfiles=1;
	$(document).on("click","#addffs",function(){
		if (ffsfiles <10) {
		$('#addffs').before('<div class="filecont"><input type="file" class="ffsmore" name="ffsimages[]"><a class="removef" href="#1">Удалить файл</a>');					
		ffsfiles++;
		}
		$('.addffs').css("display","none");
	});
	$(document).on("change",".ffsmore",function(){
		if (ffsfiles <10) {
		$('.addffs').css("display","inline");
		}
	});
	$(document).on("change",".fimore",function(){
		if (ifiles <10) {
		$('.addfi').css("display","inline");
		}
	});

}

function step3(xml){
	$('#thirdstep').append(
		'<div id="leftmain" style="float: left; width: 49%;">'+
			
			'<div class="small-title"><span class="star">*</span> Наименование</div>'+
			'<select id="order1" class="orders1 required" name="orders1"><option value="">Выбрать</option></select>'+
				'<div id="other">'+
					'<div class="small-title">Наименование продукции (пример: листовка, купон и пр.)</div>'+
					'<input type="value" id="otherorder1"></input>'+
					'<div class="small-title">Размер в миллиметрах</div>'+
					'<input type="value" style="width: 30px;" name="x"></input> x <input type="value" style="width: 30px;" name="y" ></input> мм'+
				'</div>'+			

			'<div class="small-title">Печать на бумаге</div>'+	
			'<div id="prinpaper"></div>'+
			'<input type="value" id="newpapertype"></input>'+

			'<div class="small-title"><span class="star">*</span> Тираж (количество отпечатков)</div>'+
			'<input type="value" class="required" style="width: 100px;"  name="printcount"></input>&nbsp;экземпляров'+

		'</div>'+
		
		'<div style="float: right;">'+
		
			'<div class="small-title">Красочность печати</div>'+	
			'<div id="printcolor"></div>'+
			'<input type="value" id="newcolor"></input>'+

			'<div class="small-title">Дополнительная постпечатная обработка</div>'+	
			'<div id="printpost"></div>'+
			'<input type="value" id="newpost"></input>'+

		'</div><div class="clear"></div>'+

	'<a id="next4" style="float: right; position: relative; top: 50px;" href="#1" class="button_blue">Продолжить</a>'
		);

	var orderselect = $("#order1"), options = '';
	$(xml).find("Order").each(function () {
		var order = $(this).find("name").text().split('|');
	
		options = '';
		for (i in order)
		{
	     		options += '<option value="'+order[i]+'">'+order[i]+'</option>';
		}

		orderselect.append(options);		
	});

	orderselect.append('<option value="Другое...">Другое...</option>');

	var otherorder = $("#otherorder1");

	orderselect.change(function(){
		var other = $("#order1 option:selected").val();
		if (other == "Другое...") {
			$('#other').show("fast");
			orderselect.removeAttr("name");
			otherorder.addClass("required");
			otherorder.attr("name","orders1");
			
		}else{
			$('#other').hide("fast");			
			otherorder.removeAttr("name");
			otherorder.removeClass("required");
			orderselect.attr("name","orders1");
		}
	});

	$(xml).find("Printpapers").each(function () {
		var papers = $(this).find("name").text().split('|');
	
		options = '';
		for (i in papers)
		{
	     		options += '<input type="radio" class="printp" name="papertype" value="'+papers[i]+'">'+papers[i]+'</input><br>';
		}

		$('#prinpaper').append(options);		
	});

	$('#prinpaper').append('<input class="printp" type="radio" id="printp" name="papertype" value="Другая бумага">Другая бумага</option><br>');

	var otherpaper = $("#newpapertype");

	$('.printp').change(function(){		
		var papercheck = $('input:radio[name=papertype]:checked').val();		
		if (papercheck == "Другая бумага") {
			otherpaper.show("fast");
			otherpaper.addClass("required");
			otherpaper.attr("name","papertype1");
			
		}else{
			otherpaper.hide("fast");			
			otherpaper.removeAttr("name");
			otherpaper.removeClass("required");					
		}
	});

	/*Цветность печати*/

	$(xml).find("Colorprint").each(function () {
		var colors = $(this).find("name").text().split('|');
	
		options = '';
		for (i in colors)
		{
	     		options += '<input type="radio" class="colorp" name="colortype" value="'+colors[i]+'">'+colors[i]+'</input><br>';
		}

		$('#printcolor').append(options);		
	});

	$('#printcolor').append('<input class="colorp" type="radio" id="colorp" name="colortype" value="Другое">Другое</option><br>');

	var othercolor = $("#newcolor");

	$('.colorp').change(function(){		
		var colorcheck = $('input:radio[name=colortype]:checked').val();		
		if (colorcheck == "Другое") {
			othercolor.show("fast");
			othercolor.addClass("required");
			othercolor.attr("name","colortype1");
			
		}else{
			othercolor.hide("fast");			
			othercolor.removeAttr("name");
			othercolor.removeClass("required");					
		}
	});

	/*Постобработка*/

	$(xml).find("Postprocessing").each(function () {
		var posts = $(this).find("name").text().split('|');
	
		options = '';
		for (i in posts)
		{
	     		options += '<input type="radio" class="postp" name="posttype" value="'+posts[i]+'">'+posts[i]+'</input><br>';
		}

		$('#printpost').append(options);		
	});

	$('#printpost').append('<input class="postp" type="radio" id="printp" name="posttype" value="Другое">Другое</option><br>');

	var otherpost = $("#newpost");

	$('.postp').change(function(){		
		var postcheck = $('input:radio[name=posttype]:checked').val();		
		if (postcheck == "Другое") {
			otherpost.show("fast");
			otherpost.addClass("required");
			otherpost.attr("name","posttype1");
			
		}else{
			otherpost.hide("fast");			
			otherpost.removeAttr("name");
			otherpost.removeClass("required");					
		}
	});


}

function checkValue(){
	var addrcheck = $("#sameaddress").attr("checked"),
			comp = $("input[name=delcompanyname]"),
				ph1 = $("input[name=delphone1]"),
				 ph2 = $("input[name=delphone2]"),
				 	ph3 = $("input[name=delphone3]"),
				 		cntr = $("#delchoosecountry"),
				 			deltowns = $(".deltowns"),
								delnotowns = $(".delnotowns");				 			
	
	if (addrcheck == 'checked') {
		comp.val($("input[name=companyname]").val());
		ph1.val($("input[name=phone1]").val());
		ph2.val($("input[name=phone2]").val());
		ph3.val($("input[name=phone3]").val());
		cntr.val($("#choosecountry :selected").text());
		
			var showfield = $("#delchoosecountry option:selected").data('connection'),
							town = $("#deltowns"+showfield); 

			deltowns.hide("fast");
			deltowns.removeAttr('name');
			delnotowns.hide();
			town.show("fast");
			town.attr('name','mytown');
			town.val($("#towns"+showfield+" :selected").text());

		comp.attr('disabled','disabled');
		ph1.attr('disabled','disabled');
		ph2.attr('disabled','disabled');
		ph3.attr('disabled','disabled');
		cntr.attr('disabled','disabled');
		town.attr('disabled','disabled');	
	} else {
		comp.removeAttr('disabled');
		ph1.removeAttr('disabled');
		ph2.removeAttr('disabled');
		ph3.removeAttr('disabled');
		cntr.removeAttr('disabled');
		deltowns.removeAttr('disabled');
	}

}

function step4(){
	$('#delform').find('.clear').after('<div class="small-title">Паспортные данные (для авиа-, жд- и почтовых отправлений)</div>'+	
		'<textarea name="passport" style="width: 500px; height: 100px;"></textarea>'
	);
	$('#fourstep').prepend('<div class="info"><a href="http://dbiq.ru/city.html" target="_blank" >Подробнее о доставке</a></div>');			
	$('#fourstep').append(			

		'<a id="next5" style="float: right; position: relative; top: 50px;" href="#1" class="button_blue">Продолжить</a>'
		);


	var delform = $("#delform");

	$('.chdelivery').change(function(){		
		var delivercheck = $('input:radio[name=mydeliver]:checked').val();		
		if (delivercheck != "Самовывоз из офиса компании") {
			delform.show("fast");					
		}else{
			delform.hide("fast");
		}
	});

	var deltowns = $(".deltowns"),
			delnotowns = $(".delnotowns");

	$("#delchoosecountry").change(function(){
		var showfield = $("#delchoosecountry option:selected").data('connection');
			deltowns.hide("fast");
			deltowns.removeAttr('name');
			delnotowns.hide();
			$("#deltowns"+showfield).show("fast");
			$("#deltowns"+showfield).attr('name','delmytown');
	});
}

function step5(xml){
	$('#fivestep').append(
		'<div id="payments">'+
		'</div>'+
		'<div id="rekv">'+
			'<div id="rekvAsk">'+
				'<div class="small-title">Ваши реквизиты</div>'+	
				'<input type="radio" class="ask required" name="lrekv" value="lr">У меня есть файл с реквизитами (*.doc,*.xls,*.txt)</input><br>'+
				'<input type="radio" class="ask required" name="lrekv" value="tr"/>Заполнить форму</input><br>'+
			'</div>'+	

			'<div id="rekvload">'+	
				'<div class="filecont"><input type="file" class="ignore" accept="text/plain,application/msword,application/vnd.ms-excel" name="RekFile"><a class="removef" href="#1">Удалить файл</a></div>'+	
			'</div>'+	

			'<div id="rekvform">'+
				'<div style="float: left; width: 55%;"><div class="small-title">Организация (Например: ИП Петров П.П., ООО "Имидж")</div>'+
				'<input type="value" name="rekCompany"></input></div>'+
				'<div style="float: right;"><div class="small-title">ИНН/КПП (для ИП поле КПП не заполняется)</div>'+
				'<input style="width: 60px;" type="value" name="Inn"></input> / <input style="width: 60px;" type="value" name="Kpp"></input></div>'+
				'<div class="clear"></div>'+
				'<div class="bold-title">Юридический адрес</div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Индекс</div>'+				
				'<input type="value" class="rekField1" name="rekIndex"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Город</div>'+
				'<input class="rekField1" type="value" name="rekTown"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Улица</div>'+
				'<input class="rekField1" type="value" name="rekStreet"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Дом</div>'+
				'<input class="rekField2" type="value" name="rekDom"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Корпус</div>'+
				'<input class="rekField2" type="value" name="rekCorp"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Квартира / Офис</div>'+
				'<input class="rekField1" type="value" name="rekFlat"></input></div>'+
				
				'<div class="clear"></div>'+

				'<div class="bold-title">Фактический адрес</div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Индекс</div>'+				
				'<input type="value" class="rekField1" name="rekIndexF"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Город</div>'+
				'<input class="rekField1" type="value" name="rekTownF"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Улица</div>'+
				'<input class="rekField1" type="value" name="rekStreetF"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Дом</div>'+
				'<input class="rekField2" type="value" name="rekDomF"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Корпус</div>'+
				'<input class="rekField2" type="value" name="rekCorpF"></input></div>'+

				'<div style="float: left; margin-top: 5px;"><div class="small-title">Квартира / Офис</div>'+
				'<input class="rekField1" type="value" name="rekFlatF"></input></div>'+

				'<div class="clear"></div>'+

				'<div style="float: left;"><div class="small-title">Расчетный счет</div>'+				
				'<input type="value" class="rekField3" name="rekRSchet"></input></div>'+

				'<div style="float: left;"><div class="small-title">БИК</div>'+
				'<input class="rekField1" type="value" name="rekBIK"></input></div>'+

				'<div style="float: left;"><div class="small-title">Корр. счет</div>'+
				'<input type="value" class="rekField3" name="rekKSchet"></input></div>'+

				'<div class="clear"></div>'+

				'<div class="small-title">Примечание</div>'+
				'<textarea style="width: 500px; height: 200px;" name="rekComment"></textarea>'+

			'</div>'+
		'</div>'+
		'<a id="next6" style="float: right; position: relative; top: 50px;" href="#1" class="button_blue">Продолжить</a>'
		);

	$(xml).find("Payment").each(function () {
		var payments = $(this).find("name").text().split('|');
	
		options = '';
		for (i in payments)
		{
			if (payments[i] == "Безналичный расчет") {
	     		options += '<span id="beznal"><input type="radio" class="paymentp" name="paytype" value="'+payments[i]+'">'+payments[i]+'</input></span><br>';
	     	} else {
	     		options += '<input type="radio" class="paymentp" name="paytype" value="'+payments[i]+'">'+payments[i]+'</input><br>';
	     	}
		}

		$('#payments').append(options);		
	});

	
	$('.paymentp').change(function(){		
		var paycheck = $('input:radio[name=paytype]:checked').val(),
				rekv = $('#rekv');		

		if (paycheck == "Безналичный расчет") {
			rekv.show("fast");
			
			
		}else{
			rekv.hide("fast");			
					
		}
	});

	$('.ask').change(function(){		
		var paychck = $('input:radio[name=lrekv]:checked').val(),
				rekvform = $('#rekvform'),		
				rekvload = $('#rekvload');
		if (paychck == "tr") {
			rekvform.show("fast");				
			rekvload.hide("fast");
		}else{
			rekvload.show("fast");			
			rekvform.hide("fast");
					
		}
	});

}

function step6(){
	var companyname = $('input:[name=companyname]').val(),
			country = $("#choosecountry option:selected").val(),
				city = $("select:[name=mytown] option:selected").val(),

			phone1 = $('input:[name=phone1]').val(),
						phone2 = $('input:[name=phone2]').val(),
							phone3 = $('input:[name=phone3]').val(),
								email = $('input:[name=email]').val(),
									icq = $('input:[name=icq]').val(),
										skype = $('input:[name=skype]').val(),
		
		mydeliver =	$('input:radio[name=mydeliver]:checked').val(),
			sameaddress = $("#sameaddress").attr("checked"),
				delcompanyname = '', delcountry = '', delcity = '', delphone1 = '', delphone2 = '', delphone3 = '',	
					passport =	$('textarea[name=passport]').val(),						
			
		template = $('input:radio[name=template]:checked').val(),
			/*1*/
			sendt = $('input:radio[name=sendt]:checked').val(),
				linkt = $('input:radio[name=linkt]:checked').val(),
					f1 = $('input:file[name=f1]').val(),
						f2 = $('input:file[name=f2]').val(),
							f3 = $('input:file[name=f3]').val(),
								f4 = $('input:file[name=f4]').val(),
									link1 = $('input:[name=link1]').val()+'<br/>',
										link2 = $('input:[name=link2]').val()+'<br/>',
											link3 = $('input:[name=link3]').val()+'<br/>',
			/*2*/
			tz = $('input:radio[name=tz]:checked').val(),
				ftz = $('input:file[name=ftz]').val(),
					comments = $('textarea[name=comments]').val(),
						orders = $("select:[name=orders] option:selected").val(),
							fs = $('input:radio[name=fs]:checked').val(),
								sendfs = $('input:radio[name=sendfs]:checked').val(),
									ffirmstyle = $('input:file[name=ffirmstyle]').val(),
										templateText = $('textarea[name=templateText]').val(),
											commentsFS = $('textarea[name=commentsFS]').val(),
			/*3*/									
			fbad = $('input:file[name=fbad]').val(),
				linkTZ = $('input:[name=linkTZ]').val(),	
					commentsWork = $('textarea[name=commentsWork]').val(),

			orders1 = $("select:[name=orders1] option:selected").val(),
				x = $('input:[name=x]').val(),		
					y = $('input:[name=y]').val(),
						printcount = $('input:[name=printcount]').val(),	
							papertype =	$('input:radio[name=papertype]:checked').val(),		
								colortype =	$('input:radio[name=colortype]:checked').val(),
									posttype =	$('input:radio[name=posttype]:checked').val(),
										papertype1 = $('input:[name=papertype1]').val(),		
											colortype1 = $('input:[name=colortype1]').val(),
												posttype1 =	$('input[name=posttype1]').val(),

			paytype = $('input:radio[name=paytype]:checked').val(),
				lrekv =	$('input:radio[name=lrekv]:checked').val(),
					RekFile = $('input:file[name=RekFile]').val(),
						rekCompany = $('input:[name=rekCompany]').val(),	
							Inn = $('input:[name=Inn]').val(),	
								Kpp = $('input:[name=Kpp]').val(),	
									rekIndex = $('input:[name=rekIndex]').val(),	
										rekTown = $('input:[name=rekIndex]').val(),	
											rekStreet = $('input:[name=rekStreet]').val(),	
												rekDom = $('input:[name=rekDom]').val(),	
													rekCorp = $('input:[name=rekCorp]').val(),	
														rekFlat = $('input:[name=rekFlat]').val(),	
									rekIndexF = $('input:[name=rekIndexF]').val(),	
										rekTownF = $('input:[name=rekIndexF]').val(),	
											rekStreetF = $('input:[name=rekStreetF]').val(),	
												rekDomF = $('input:[name=rekDomF]').val(),	
													rekCorpF = $('input:[name=rekCorpF]').val(),	
														rekFlatF = $('input:[name=rekFlatF]').val(),					
									rekRSchet = $('input:[name=rekRSchet]').val(),					
										rekBIK = $('input:[name=rekBIK]').val(),					
											rekKSchet = $('input:[name=rekKSchet]').val(),					
												rekComment = $('textarea:[name=rekComment]').val();					

if (sameaddress == 'checked') {
			delcompanyname = companyname;
			delcountry = country;
			delcity = city;
			delphone1 = phone1;
			delphone2 = phone2;
			delphone3 = phone3;							
		}else{
			delcompanyname = $('input:[name=delcompanyname]').val();
			delcountry = $("#delchoosecountry option:selected").val();
			delcity = $("select:[name=delmytown] option:selected").val();
			delphone1 = $('input:[name=delphone1]').val();
			delphone2 = $('input:[name=delphone2]').val();
			delphone3 = $('input:[name=delphone3]').val();							
		}

if (template == 'have')	{
		template = 'У меня есть макет в электронном виде <br />';
		
		if (sendt == 'sendnow'){ 
				sendt = 'Файлы и данные добавлены <br />'; 
			}else{
				sendt = 'Отправлю макет позже <br />';
				linkt = '';
				link1 = '';
				link2 = '';
				link3 = '';	
			}

		if (linkt == 'sendfile') {
			linkt = 'Файлы приложены к письму <br/>';
			link1 = '';
			link2 = '';
			link3 = '';
		} 
		if (linkt == 'sendlink') {
			linkt = 'Ссылки на файлы:<br/>';
		}
		tz = '';ftz ='';comments ='';orders = '';fs = '';sendfs = '';templateText ='';commentsFS ='';linkTZ ='';commentsWork='';
}

if (template == 'donthave') {
		template ='У меня нет макета в электронном виде, я хочу заказать разработку макета <br />';
		if (tz == 'have') { 
			tz = 'У меня есть файл с техническим заданием на дизайн<br />Файлы добавлены<br />';
			comments = 'Комментарии:<br />'+comments;
			orders = '';fs = '';sendfs='';templateText='';commentsFS=''; 
		}
		if (tz == 'donthave'){
			tz = 'Форма заказа на разработку дизайна:<br />';
			if (!orders) {orders = $('input:[name=orders]').val(); }
			orders = 'Наименование заказа:' +orders;
			if (fs == 'have') {
				fs = 'Есть фирменный стиль компании в электронном виде<br />';
				
				if (sendfs == 'sendfsnow'){ 
					sendfs = 'Файлы и данные добавлены <br />'; 
					templateText='Текст для макета:<br />'+templateText+'<br />';
					commentsFS='Комментарии:<br />'+commentsFS; 
				}else{
				
				sendfs = 'Отправлю позже <br />';
				templateText='Текст для макета:<br />'+templateText+'<br />';
					commentsFS='Комментарии:<br />'+commentsFS; 
				}
			}else{
				fs = 'В электронном виде фирменного нет<br />';
				templateText='Текст для макета:<br />'+templateText+'<br />';
					commentsFS='Комментарии:<br />'+commentsFS; 
				sendfs='';
			}
			comments = '';
		}
		sendt='';linkt='';link1='';link2='';link3='';
}

if (template == 'havebad') {
		template = 'У меня есть макет в электронном виде, но его необходимо доработать <br />';		
		if (!orders) {orders = $('input:[name=orders]').val(); }
			orders = 'Наименование заказа:' +orders;
		if (linkTZ == '') {linkTZ = 'Файл приложен к письму <br/>'} else {linkTZ = 'Ссылка на файл: '+linkTZ+'<br />';}
		if (commentsWork != '') {commentsWork = 'Что необходимо доработать в макете:<br />'+commentsWork+'<br/>';}
		tz = '';ftz ='';comments ='';fs = '';sendfs = '';templateText ='';commentsFS ='';
		sendt='';linkt='';link1='';link2='';link3='';
}

var xy ="";
if (!orders1) {

	orders1 = $('input:[name=orders1]').val(); 
	xy = "<br/>Размеры: "+x+' x '+y+' мм'; 

}else { xy =""; }

if (papertype == 'Другая бумага') {papertype = papertype1;}
if (colortype == 'Другое') {colortype = colortype1;}
if (posttype == 'Другое') {posttype = posttype1;}

	$('#sixstep').html(
		'<input type="Submit" style="float: right; position: relative;" value="Подтвердить заказ" class="button_blue"/>'+

		'<div class="big_title">Личные данные</div>'+

		'<div class="title2">Наименование компании</div>'+
		'<div class="text">'+companyname+'</div>'+

		'<div class="title2">Страна</div>'+
		'<div class="text">'+country+'</div>'+

		'<div class="title2">Город</div>'+
		'<div class="text">'+city+'</div>'+

		'<div class="title2">Телефон:</div>'+		
		'<div class="text">'+phone1+'</div>'+
		'<div class="text">'+phone2+'</div>'+
		'<div class="text">'+phone3+'</div>'+

		'<div class="title2">E-mail</div>'+
		'<div class="text">'+email+'</div>'+
		
		'<div class="title2">ICQ</div>'+
		'<div class="text">'+icq+'</div>'+
								
		'<div class="title2">Skype</div>'+
		'<div class="text">'+skype+'</div>'+	

		'<div class="big_title">Макет для печати</div>'+							

		'<div class="title2"></div>'+
		'<div class="text">'+template+sendt+linkt+link1+link2+link3+tz+comments+orders+'<br />'+fs+sendfs+templateText+commentsFS+linkTZ+commentsWork+'</div>'+		

		'<div class="big_title">Параметры печати</div>'+

		'<div class="title2">Наименование</div>'+
		'<div class="text">'+orders1+xy+'</div>'+		

		'<div class="title2">Тираж</div>'+
		'<div class="text">'+printcount+'</div>'+	

		'<div class="title2">Печать на бумаге</div>'+
		'<div class="text">'+papertype+'</div>'+

		'<div class="title2">Красочность печати</div>'+
		'<div class="text">'+colortype+'</div>'+

		'<div class="title2">Дополнительная постпечатная обработка</div>'+
		'<div class="text">'+posttype+'</div>'+

		'<div class="big_title">Информация о способе доставки</div>'+

		'<div class="title2">Способ доставки</div>'+
		'<div class="text">'+mydeliver+'</div>'+

		'<div id="deliveryInfo"></div>'+

		'<div class="big_title">Информация о способе оплаты</div>'+

		'<div class="title2">Способ оплаты</div>'+
		'<div class="text">'+paytype+'</div>'+

		'<div id="paymentInfo"></div>'+		
		
		'<input type="Submit" style="float: right; position: relative;" value="Подтвердить заказ" class="button_blue"/>'	
		//'<a id="next7" style="float: right; position: relative; top: 50px;" href="#1" class="button_blue">Подтвердить заказ</a>'
		);

	if (mydeliver != 'Самовывоз из офиса компании'){
			$('#deliveryInfo').html(
				'<div class="title2">Наименование компании / ФИО</div>'+
				'<div class="text">'+delcompanyname+'</div>'+

				'<div class="title2">Страна</div>'+
				'<div class="text">'+delcountry+'</div>'+

				'<div class="title2">Город</div>'+
				'<div class="text">'+delcity+'</div>'+

				'<div class="title2">Телефон</div>'+
				'<div class="text">'+delphone1+'<br/>'+delphone2+'<br/>'+delphone3+'</div>'+

				'<div class="title2">Паспортные данные:</div>'+
				'<div class="text">'+passport+'</div>'
			);				
	}

	if (paytype == 'Безналичный расчет'){
		
			if (lrekv == 'lr') {$('#paymentInfo').html('Файл с реквизитами приложен к письму')
		
			}else{
				$('#paymentInfo').html(
					'<div class="title2">Организация</div>'+
					'<div class="text">'+rekCompany+'</div>'+

					'<div class="title2">ИНН</div>'+
					'<div class="text">'+Inn+'</div>'+

					'<div class="title2">КПП</div>'+
					'<div class="text">'+Kpp+'</div>'+

					'<div class="title2">Юридический адрес</div>'+
					'<div class="text">'+rekIndex+' г.'+rekTown+' ул. '+rekStreet+' , '+rekDom+' '+rekCorp+' '+rekFlat+'</div>'+

					'<div class="title2">Фактический адрес</div>'+
					'<div class="text">'+rekIndexF+' г.'+rekTownF+' ул. '+rekStreetF+' , '+rekDomF+' '+rekCorpF+' '+rekFlatF+'</div>'+

					'<div class="title2">Расчетный счет</div>'+
					'<div class="text">'+rekRSchet+'</div>'+

					'<div class="title2">БИК</div>'+
					'<div class="text">'+rekBIK+'</div>'+

					'<div class="title2">Корр. счет</div>'+
					'<div class="text">'+rekKSchet+'</div>'+	

					'<div class="title2">Примечание</div>'+
					'<div class="text">'+rekComment+'</div>'
				);				
			}
	}
}

function xmlParserfull(xml) {
	var mainwindow = $("div.main"),
			Ourform = $('#dinamicform');			

	mainwindow.append(
	'<div id="step0">'+
	'<input type="radio" class="required" name="face" value="ur">Юридическое лицо</input><br>'+
	'<input type="radio" class="required" name="face" value="fiz"/>Физическое лицо</input><br>'+
	'<label for="face" class="error" generated="true"></label>'+
	'<a id="next" style="top: 20px; left: 30px; position: relative;" href="#1" class="button_blue">Продолжить</a>'+
	'</div>'
		);

	mainwindow.append(		
	'<div id="controlpan">'+
	'<a href="#1" class="activeS current" id="step1">Шаг 1.<br /><span id="step1des"> Личные данные</span><br /><span class="changel">Изменить</span></a>'+
	'<a href="#1" id="step2">Шаг 2.<br /><span id="step2des"> Макет для печати</span><br /><span class="changel">Изменить</span></a>'+
	'<a href="#1" id="step3">Шаг 3.<br /><span id="step3des"> Параметры печати</span><br /><span class="changel">Изменить</span></a>'+
	'<a href="#1" id="step4">Шаг 4.<br /><span id="step4des"> Способы доставки</span><br /><span class="changel">Изменить</span></a>'+
	'<a href="#1" id="step5">Шаг 5.<br /><span id="step5des"> Способы оплаты</span><br /><span class="changel">Изменить</span></a>'+
	'<a href="#1" id="step6">Шаг 6.<br /><span id="step6des"> Подтверждение заказа</span></a>'+
	'</div>'
	);

	Ourform.append(
		'<fieldset id="firststep"></fieldset>'+
		'<fieldset id="secondstep"></fieldset>'+
		'<fieldset id="thirdstep"></fieldset>'+
		'<fieldset id="fourstep"></fieldset>'+
		'<fieldset id="fivestep"></fieldset>'+
		'<fieldset id="sixstep"></fieldset>'
		);

	step1(xml);
	step2(xml);
	step3(xml);
	step4();
	step5(xml);


	var cpanel = $('#controlpan'),
			cpanelLink = $('#controlpan a');

	$('#next').click(function(){
	  if (Ourform.valid()) {
	  	$('#step0').hide();	  	
		cpanel.slideDown(300);	 
		$('#firststep').addClass('activeF');
		$('#step1').addClass('current')
						.find("span.changel").show();

		var payday = $('input:radio[name=face]:checked').val();

		if (payday == 'fiz') {
			$('#beznal').hide();

		}				
	  }
	});

	$('#next2').click(function(){
	  if (Ourform.valid()) {
	  	$('#firststep').hide();	  	
		$('#secondstep').slideDown(300)	 
							.addClass('activeF');		
		$('#step1').removeClass('current');
		$('#step2').addClass('current activeS')
						.find("span.changel").show();
	  }
	});

	$('#next3').click(function(){
	  if (Ourform.valid()) {
	  	$('#secondstep').hide();	  	
		$('#thirdstep').slideDown(300)	 
							.addClass('activeF');
		$('#step2').removeClass('current');
		$('#step3').addClass('current activeS')
						.find("span.changel").show();
	  }
	});


	$('#next4').click(function(){
	  if (Ourform.valid()) {
	  	$('#thirdstep').hide();	  	
		$('#fourstep').slideDown(300)	 
						.addClass('activeF');
		$('#step3').removeClass('current');
		$('#step4').addClass('current activeS')
						.find("span.changel").show();
		checkValue();
	  }
	});

	$('#next5').click(function(){
	  if (Ourform.valid()) {
	  	$('#fourstep').hide();	  	
		$('#fivestep').slideDown(300)	 
						.addClass('activeF');
		$('#step4').removeClass('current');
		$('#step5').addClass('current activeS')
						.find("span.changel").show();
	  }
	});

	$('#next6').click(function(){
	  if (Ourform.valid()) {
	  	$('#fivestep').hide();	  	
	  		step6();
		$('#sixstep').slideDown(300)	 
						.addClass('activeF');
		$('#step5').removeClass('current');
		$('#step6').addClass('current activeS')
						.find("span.changel").show();
	  }
	});

	/*$('#controlpan a.activeS').mouseenter(function(){
		$('#controlpan a.current').find("span").hide();
		$(this).css("background-color","#67666b");
		cpanelLink.css("width","9%");
		$(this).find("span").css("color","#f9f9f9");
	});

	$('#controlpan a.activeS').mouseleave(function(){
		$(this).css("background-color","#edefee");
		cpanelLink.css("width","9%");
		$(this).find("span").css("color","#000");
		$(this).find("span").css("display","none");
		cpanelLink.css("width","auto");
		$('#controlpan a.current').find("span").show();
	});

	$('#controlpan a.current').mouseleave(function(){
		$(this).css("background","#67666b");
		$(this).find("span").css("color","#f9f9f9");
	})*/

	cpanel.on("click", '#step1.activeS', function(){
		Ourform.children('fieldset').hide();
		cpanel.find('a.current').removeClass('current');
		$(this).addClass('current');
		$('#firststep').slideDown(300);
	});

	cpanel.on("click", '#step2.activeS',function(){
		Ourform.children('fieldset').hide();
		cpanel.find('a.current').removeClass('current');
		$(this).addClass('current');
		$('#secondstep').slideDown(300);
	});

	cpanel.on("click", '#step3.activeS', function(){
		Ourform.children('fieldset').hide();
		cpanel.find('a.current').removeClass('current');
		$(this).addClass('current');
		$('#thirdstep').slideDown(300);
	});

	cpanel.on("click", '#step4.activeS', function(){
		Ourform.children('fieldset').hide();
		cpanel.find('a.current').removeClass('current');
		$(this).addClass('current');
		$('#fourstep').slideDown(300);
		checkValue();
	});

	cpanel.on("click", '#step5.activeS', function(){
		Ourform.children('fieldset').hide();
		cpanel.find('a.current').removeClass('current');
		$(this).addClass('current');
		$('#fivestep').slideDown(300);
	});

	cpanel.on("click", '#step6.activeS', function(){
		Ourform.children('fieldset').hide();
		step6();
		cpanel.find('a.current').removeClass('current');
		$(this).addClass('current');
		$('#sixstep').slideDown(300);
	});

$(document).on("click","a.removef",function(){
		 $(this).closest('.filecont').children('input').val('');
	});

	$('#loader').fadeOut();
	mainwindow.slideDown('500');
	Ourform.attr('action','go2.php');

}