// CHUỖI +chuỗi( hay số) thì nó nối với nhau thành chuỗi VD:'6'+'7'='67'
// còn - x / thì nó không qua tâm chuỗi hay số
/**
 * cách ép kiểu chuỗi sang số
 * -parseInt('number');
 * -parseFloat('number');
 * -Number('number'): 
 * - +'number' VD: (+'dToan'): tương ứng với number
 */
var getEle =  function(id){
    return document.getElementById(id);
}
var tinhTB = function(dToan,dVan){// nó thuộc về global object hoạc trên browser là object ưindown
    
    return (parseFloat(dToan)+ parseFloat(dVan))/2;// phải ép kiểu nếu ko nó sẽ tưởng dToan và dVan LÀ 2 CÁI CHUỖI
}
var xeploai = function(dtb){
    var loai = '';
    if(dtb>8 &&dtb<=10){
        loai = 'giỏi';
    }else if(dtb >=6.5 && dtb <8){
        loai ='khá';
    }else if (dtb >=5 && dtb <6.5){
        loai = 'Trung bình'
    }else {
        loai = 'Yếu'
    }
    return loai;
}
var hienThiThongTin =function(){//hàm của button
    /**
     * Lấy thoog tin từ người dùng nhập
     */
//    var maSV = document.getElementById('txtMaSV').value;

   var maSV = getEle('txtMaSV').value;
    var tenSV=getEle('txtTenSV').value;
    var hoanCanh=getEle('loaiSV').value;
    var diemToan=getEle('txtDiemToan').value;
    var diemVan= getEle('txtDiemVan').value;
/**
 * hiển thị thông tin
 */
    var dtb =tinhTB(diemToan,diemVan)
    getEle('spanTenSV').innerHTML =tenSV
    getEle('spanMaSV').innerHTML = maSV
    getEle('spanLoaiSV').innerHTML = hoanCanh
    getEle('spanDTB').innerHTML = dtb
    getEle('spanXepLoai').innerHTML = xeploai(dtb)


}