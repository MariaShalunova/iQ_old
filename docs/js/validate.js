$(document).ready(function () {
 $("#dinamicform").validate({ 
 	rules: {     
    RekFile:{required: true,
              accept: "xls|txt|doc|jpg|gif|png|jpeg"},
    ftz:{required: true,
              accept: "xls|txt|doc|jpg|gif|png|jpeg"},          
    link1:{url: true},
        link2:{url: true},
           link3:{url: true},
                linkTZ:{url: true},
    	email:	{ required: true, email: true },
    	  phone: { required: true, digits: true, maxlength: 11},
    	  	 phone1: { required: true, digits: true, maxlength: 11},
           phone2: {digits: true, maxlength: 11},
           phone3: {digits: true, maxlength: 11},
           delphone1: { required: true, digits: true, maxlength: 11},
            delphone2: {digits: true, maxlength: 11},
             delphone3: {digits: true, maxlength: 11},
    	  	Scountry: {required: true},
          delScountry: {required: true},
    	  		printcount: {required: true, digits: true},
    	  			companyname: { required: true,
    	  								minlength: 2,
      									maxlength: 32},
                  delcompanyname: { required: true,
                        minlength: 2,
                        maxlength: 32},

   },
   messages: {   		
   	  phone: {required: "Необходимо указать телефон",
         		digits: "Введите только цифры", 
              maxlength: "Максимум 10 цифр"},
link1:{url: "Укажите правильный формат ссылки (http://link.ru)"},
        link2:{url: "Укажите правильный формат ссылки (http://link.ru)"},
           link3:{url: "Укажите правильный формат ссылки (http://link.ru)"},
                linkTZ:{url: "Укажите правильный формат ссылки (http://link.ru)"},
		phone1: {required: "Необходимо указать хотя бы 1 телефон",
         		digits: "Введите только цифры",
              maxlength: "Максимум 10 цифр"},
    phone2: { digits: "Введите только цифры",
                maxlength: "Максимум 10 цифр"},
    phone3: { digits: "Введите только цифры",
              maxlength: "Максимум 10 цифр"},            
    delphone1: {required: "Необходимо указать хотя бы 1 телефон",
            digits: "Введите только цифры",
              maxlength: "Максимум 10 цифр"},
    delphone2: { digits: "Введите только цифры",
                  maxlength: "Максимум 10 цифр"},              
    delphone3: { digits: "Введите только цифры",
                  maxlength: "Максимум 10 цифр"},              

        companyname: { required: 'Введите название компании',
    	  								minlength: 'Имя должно быть от 2 до 32 символов',
      									maxlength: 'Имя должно быть от 2 до 32 символов'},   
          delcompanyname: { required: 'Введите название компании',
                        minlength: 'Имя должно быть от 2 до 32 символов',
                        maxlength: 'Имя должно быть от 2 до 32 символов'},         		
	  Scountry: {required: 'Выберете страну'},         		
    delScountry: {required: 'Выберете страну'},            
	  printcount: {required: 'Укажите тираж', 
	  					digits: "Введите только цифры"},
      email: {
         required: "Необходимо указать email!",
         email: "Необходимо указать корректный email!"
      },
  	}
   });
 });