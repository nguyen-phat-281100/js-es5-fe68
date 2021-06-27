function Validator(){
    this.kiemTraRong = function(value,spanId,mess){
        if(value === ''){
            getEl(spanId).style.display='block';
            getEl(spanId).innerHTML=mess;
            return false;
        }
        //hợp lệ
        getEl(spanId).style.display='none';
        getEl(spanId).innerHTML='';
        return true;
    };
    this.kiemTraChucVu = function(select,spanId,mess){
        if(getEl(select).selectedIndex === 0){
            //không chon chức vụ
            getEl(spanId).style.display= "block";
            getEl(spanId).innerHTML= mess;//nếu toàn chữ thì thay bằng textcontent cũng dduocj (innerhtml)
            return false;

        }
        //hợp lệ
        getEl(spanId).style.display='none';
        getEl(spanId).innerHTML='';
        return true;
    };
    this.kiemTraDoDaiKyTu = function(value , spanId,mess,min,max){
        if(value.length < min || value.length>max){//cái length này tính luôn cả dấu cách
            getEl(spanId).style.display="block";
            getEl(spanId).innerHTML=mess;
        }
        getEl(spanId).style.display='none';
        getEl(spanId).innerHTML='';
        return true;
    };
    this.kiemTraChuoi= function(value,spanId,mess){
        var pattern=new RegExp("^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
        "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
        "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$");
        if(!pattern.test(value)){
            getEl(spanId).style.display='block';
            getEl(spanId).innerHTML= mess;
        }
        getEl(spanId).style.display='none';
        getEl(spanId).innerHTML='';
        return true;
    }
    this.kiemTraEmail = function(value,spanId,mess){
        // var pattern = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
        var pattern =/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!pattern.test(value)){
            getEl(spanId).style.display='block';
            getEl(spanId).innerHTML= mess;
        }
        getEl(spanId).style.display='none';
        getEl(spanId).innerHTML='';
        return true;
    }

}