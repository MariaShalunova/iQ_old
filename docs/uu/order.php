<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>IQ - Дизайн-бюро, г. Сочи</title>
<link href="css/style.css" rel="stylesheet" type="text/css" />
<LINK href="css/main.css" type=text/css rel=stylesheet>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.js"></script>
<script type="text/javascript" src="js/jquery.validate.js"></script>
<script type="text/javascript" src="js/validate.js"></script>
<style fprolloverstyle>
.style10 {
	font-size: 24px;
	font-weight: bold;
}
.style2 {color: #012855}
.style9 {font-size: 15px}
</style>
<script type="text/JavaScript">
<!--
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
//-->
</script>
<script>
$(document).ready(function () {
	  $('#noscript').hide();
	var yourdestiny = $("#chooseyodestiny"),
			formdiv = $("#formdiv");

	$("#destiny1").click(function () {
		yourdestiny.css("display","none");
		formdiv.css("display","block");
		$("#loader").show();
		$.ajax({
			type: "GET",
			url: "prms.xml",
			dataType: "xml",
			success: xmlParserfast
		});
	});

	$("#destiny2").click(function () {
		yourdestiny.css("display","none");
		formdiv.css("display","block");
		$("#loader").show();
		$.ajax({
			type: "GET",
			url: "prms.xml",
			dataType: "xml",
			success: xmlParserfull
		});
	});
});



/*функция вывода краткой формы*/
function xmlParserfast(xml) {

	var mainwindow = $("div.main"), options = '', country = '', 
		i=0,
			ifiles=1;

	mainwindow.append(
	'<div id="leftmain" style="float: left; width: 60%;">'+

		'<div class="small-title"><span class="star">*</span> Страна</div>'+
		'<select name="Scountry" id="choosecountry" class="country required"><option value="">Выберете страну</option></select>'+

		'<div class="small-title"><span class="star">*</span> Город</div>'+
		'<select class="notowns required"><option value="">Выберете город</option></select>'+

	'</div>');
    	
	mainwindow.append(
	'<div style="float: left;">'+
		
		'<div class="small-title"><span class="star">*</span> E-mail</div>'+	
		'<input name="email" type="value" class="required email"></input>'+

		'<div class="small-title">ICQ</div>'+
		'<input type="value" name="icq" class="icq"></input>'+	

		'<div class="small-title">Skype</div>'+
		'<input type="value" name="skype" class="skype"></input>'+

	'</div><div class="clear"></div>'
	);

	var leftmain = $("#leftmain");

	$(xml).find("Country").each(function (k) {
		var $this = $(this);

		country = $this.find("name").text();

    	var city = $this.find("cities").text().split('|');		

		leftmain.append('<select id="towns'+k+'" class="towns"></select>');
        
		$('.country').append('<option data-connection="'+k+'">'+country+'</option>');
	
		options = '';

		for (i in city)
		{
	     		options += '<option value="'+city[i]+'">'+city[i]+'</option>';
		}

		$('#towns'+k).append(options);
		       
	
	});

	leftmain.append('<div class="small-title"><span class="star">*</span> Мобильный телефон</div>'+
		'+7 <input class="required mobile" type="value" name="phone"></input>');

	mainwindow.append(
		'<div class="small-title"><span class="star">*</span> Макет для печати</div>'+
		'<input type="radio" class="template required" name="template" value="have">У меня есть макет в электронном виде</input><br>'+
		'<input type="radio" class="template" name="template" value="donthave">Я хочу заказать дизайн макет - у меня нет макета в электронном виде</input>'+
		'<label for="template" class="error" generated="true"></label>'+
		'<div id="sendtemplate">'+
			'<input type="radio" class="sending required" name="sendt" value="sendnow">Отправить макет сейчас</input><br>'+
			'<input type="radio" class="sending" name="sendt" value="sendlate">Отправлю макет позже</input>'+
			'<label for="sendt" class="error" generated="true"></label>'+
		'</div>'+
		'<div id="addtemplate">'+
		'<div class="filecont"><input type="file" name="f[]"><a class="removef" href="#1">Удалить файл</a></div>'+	
		'<a class="addf" href="#1">Загрузить еще</a>'+
		'</div>'
		);

	mainwindow.append(
		'<div class="small-title"><span class="star">*</span> Мне необходимо напечатать</div>'+
		'<select id="order" class="orders required" name="orders"><option value="">Выбрать</option></select>'+
		'<br><br><input type="value" id="otherorder"></input>'+
		'<div class="small-title"><span class="star">*</span> Тираж (количество отпечатков)</div>'+
		'<input type="value" class="required" style="width: 100px;" name="printcount"></input>&nbsp;экземпляров'+
		'<div class="attention">ВНИМАНИЕ!<br>Другие параметры заказа мы уточним у Вас,<br>по указанным Вами контактным данным.</div>'
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

	var towns = $(".towns"),
			notowns = $(".notowns");

	$("#choosecountry").change(function(){
		var showfield = $("#choosecountry option:selected").data('connection');
			towns.hide("fast");
			towns.removeAttr('name');
			notowns.hide();
			$("#towns"+showfield).show("fast");
			$("#towns"+showfield).attr('name','mytown');
	});

	var sendtemplate = $('#sendtemplate'), 
			addtemplate = $('#addtemplate');

	$(".template").click(function(){
		var maket = $('input:radio[name=template]:checked').val();
			if (maket == 'have') {
				sendtemplate.show("fast");
		  	}else{
				sendtemplate.hide("fast");
				addtemplate.hide("fast");
				$(".sending").removeAttr("checked");
			}
	});


	$(".sending").click(function(){
		var maket = $('input:radio[name=sendt]:checked').val();
			if (maket == 'sendnow') {
				addtemplate.show("fast");
		  	}else{
				addtemplate.hide("fast");
			}
	});
	
	$(document).on("click","a.addf",function(){
		if(ifiles <4) {
		$('.filecont').append('<br /><br /><input type="file" name="f[]"><a class="removef" href="#1">Удалить файл</a>');	
		ifiles++;
		$('.addf').css("display","none");
	}
	});

	$(document).on("change","input:[type='file']",function(){
		if(ifiles <4) {
		$('.addf').css("display","inline");
		}
	});

$(document).on("click","a.removef",function(){
		 $(this).prev('input').val('');
	});

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
	$('#loader').fadeOut();
	mainwindow.slideDown('500');
	$('#dinamicform').append('<input type="Submit" style="display: block; margin: auto; position: relative; width: 150px;" value="Оформить заказ" class="button_blue"></input>');
	$('#dinamicform').attr('action','go.php');

}

</script>

</head>






<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" onLoad="MM_preloadImages('images/but01_02.jpg','images/but02_02.jpg','images/but02_03.jpg','images/but02_04.jpg','images/but02_05.jpg','images/but02_06.jpg','images/but01m.jpg','images/but02m.jpg','images/but03m.jpg','images/but04m.jpg','images/but05m.jpg','images/but06m.jpg','images/but07m.jpg')">
<table width="100%" border="0" cellspacing="0" cellpadding="0">
  <tr> <td colspan="3"><table width="1185" border="0">
            <tr>
              <td width="43%" align="left" valign="top"><a href="index.html"><img src="images/logo_00.jpg" alt="Дизайн-бюро IQ" width="350" height="90" border="0"></a></td>
              <td width="57%" align="right" valign="top"><table width="572" border="0">
                <tr>
                  <td width="220" align="left" valign="middle"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                      <td><a href="http://twitter.com/designburoiq"><img src="images/twitter.gif" alt="twitter" width="25" height="25" border="0" longdesc="http://twitter.com/designburoiq"></a></td>
                      <td>&nbsp;</td>
                      <td>Cледуйте за нами <br>
                        в <a href="http://twitter.com/designburoiq" target="_blank">Твиттере</a></td>
                    </tr>
                  </table>
                     <br></td>
                  <td width="10" align="right" valign="top">&nbsp;</td>
                  <td width="342" align="right" valign="top"><a href="index.html"><img src="images/top2.jpg" width="342" height="60" border="0"></a></td>
            </tr>
          </table>    </td>
  </tr>
  <tr>
    <td><a href="http://www.dbiq.ru"></a><img src="images/ras.gif" width="373" height="1"></td>
    <td align="right" valign="top"><a href="city.html"></a></td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td colspan="3"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="3%">&nbsp;</td>
        <td width="46%">&nbsp;</td>
        <td width="51%">&nbsp;</td>
      </tr>
      <tr>
        <td><img src="images/ras.gif" width="40" height="1"></td>
    <td>&nbsp;</td>
    <td>&nbsp;</td>
  </tr>
  <tr>
    <td colspan="3"><table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td width="3%">&nbsp;</td>
        <td width="46%">&nbsp;</td>
        <td width="51%">&nbsp;</td>
      </tr>
      <tr>
        <td><img src="images/ras.gif" width="40" height="1"></td>
        <td colspan="2"><table width="1150" border="0" cellspacing="0" cellpadding="1">
          <tr>
            <td><a href="about.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image87','','images/but01m.jpg',1)"><img src="images/but01.jpg" alt="О НАС" name="Image87" width="163" height="30" border="0"></a></td>
            <td>&nbsp;</td>
            <td><a href="work.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image88','','images/but02m.jpg',1)"><img src="images/but02.jpg" name="Image88" width="163" height="30" border="0"></a></td>
            <td>&nbsp;</td>
            <td><a href="hot.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image89','','images/but03m.jpg',1)"><img src="images/but03.jpg" name="Image89" width="163" height="30" border="0"></a></td>
            <td>&nbsp;</td>
            <td><a href="portfolio.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image90','','images/but04m.jpg',1)"><img src="images/but04.jpg" name="Image90" width="163" height="30" border="0"></a></td>
            <td>&nbsp;</td>
            <td><a href="vc.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image91','','images/but05m.jpg',1)"><img src="images/but05.jpg" name="Image91" width="163" height="30" border="0"></a></td>
            <td><a href="#" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image92','','images/but06m.jpg',1)"></a></td>
            <td><a href="contact.html" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image92','','images/but06m.jpg',1)"><img src="images/but06.jpg" name="Image92" width="163" height="30" border="0"></a></td>
            <td>&nbsp;</td>
            <td><a href="order.php" onMouseOut="MM_swapImgRestore()" onMouseOver="MM_swapImage('Image93','','images/but07m.jpg',1)"><img src="images/but07m.jpg" width="163" height="30" border="0"></a></td>
          </tr>
        </table></td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td align="left" valign="top">&nbsp;</td>
        <td align="left" valign="top">&nbsp;</td>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td colspan="2" align="left" valign="top"><a href="sianie.html"></a>
          <table width="1190" border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td width="676">&nbsp;</td>
              <td width="676">&nbsp;</td>
              <td width="676">&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="3"><table width="100%" border="0" cellspacing="0" cellpadding="5">
                <tr>
                  <td><span class="style10">On-line заказ  </span></td>
                  <td>&nbsp;</td>
                  <td><a href="shokprice.html"></a></td>
                  <td>&nbsp;</td>
                  <td><a href="magnit.html"></a></td>
                  <td>&nbsp;</td>
                  <td><a href="kop#"></a></td>
                </tr>
              </table></td>
              </tr>
            <tr>
              <td width="676">&nbsp;</td>
              <td width="676">&nbsp;</td>
              <td width="676">&nbsp;</td>
            </tr>
<tr><td colspan="3">
            <div id="noscript" align="middle">Пожалуйста, включите JavaScript, чтобы воспользоваться формой! 
            	<a target="_blank" href="http://www.google.ru/support/bin/answer.py?answer=23852">Как?</a>
			</div>
	<div class="feedback"><div id="chooseyodestiny">
		<div class="title_big">Я очень занят(а), есть 2 минуты времени</div>
		<a class="button_blue" id="destiny1" href="#">Экспресс оформление заказа</a>
		<div class="title_big">У меня есть 5-10 минут</div>
		<a class="button_blue" id="destiny2" href="#">Подробно оформить заказ</a>		
	</div>

<div align="center" id="loader" class="loader"><img src="loader.gif" id="load" width="16" height="11" align="absmiddle"/></div>

	<div id="formdiv">
		<form method='post' id="dinamicform" enctype="multipart/form-data">
			<div class="main">
			</div>
			<div class="clear"></div><br />			
		</form>
	</div>
<script type="text/javascript" src="js/bigform.js"></script>
<a style="display: none;" href="http://apella.su/">apella.su</a></div>        	
</td>
</tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="3"><div class="botmenu" align="center"><a href="index.html">На главную</a> | <a href="about.html">О нас</a> | <a href="work.html">Услуги</a> | <a href="hot.html">Акции</a> | <a href="portfolio.html">Работы</a> | <a href="vc.html">Вакансии</a> |                  <a href="contact.html">Контакты</a> | <a href="order.php">On-line заказ</a> </div></td>
              </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
            <tr>
              <td colspan="3"><table width="100%" border="0" cellspacing="0" cellpadding="0">
                <tr>
                  <td><img src="images/logo_01.jpg" alt="Дизайн-бюро IQ" width="243" height="60"></td>
                  <td>670000, Республика Бурятия, <br>
г. Улан-Удэ, ул. Каландаришвили, 27 &quot;а&quot;,<br>
офис 43 &quot;б&quot; (4 этаж)</td>
                  <td>Тел. +7 (3012) 56-80-89 <br>
Тел. +7 (3012) 65-28-51 </td>
                   <td>E-mail: <a href="mailto:ulan-ude@dbiq.ru">ulan-ude@dbiq.ru</a> <br>
Skype: dbiq-ulan-ude <br>
 </td>
                  <td><img src="images/icqcons.jpg" alt="ICQ" width="220" height="60"></td>
                </tr>
              </table></td>
              </tr>
            <tr>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
              <td>&nbsp;</td>
            </tr>
          </table></td>
        </tr>
    </table></td>
  </tr>
</table>
</body>
</html>