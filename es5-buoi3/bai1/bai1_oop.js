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


var hienThiThongTin =function(){//hàm của button
    /**
     * Lấy thoog tin từ người dùng nhập
     */
//    var maSV = document.getElementById('txtMaSV').value;

   var _maSV = getEle('txtMaSV').value;
    var _tenSV=getEle('txtTenSV').value;
    var _hoanCanh=getEle('loaiSV').value;
    var _diemToan=getEle('txtDiemToan').value;
    var _diemVan= getEle('txtDiemVan').value;
    /**
     * khởi tạo đối tượng sinh viên
     */
    var sinhVien = {//ko lưu tính toán
        maSV: _maSV,// hoăc có thể ghi maSV, (nếu là maSV=maSV),
        tenSV : _tenSV,
        hoanCanh: _hoanCanh,
        diemToan:_diemToan,
        diemVan:_diemVan,
        //phương thức
        tinhTB(){
            //this = sinhVien(this key word hoặc con trỏ this )
            // console.log(this);
            return (parseFloat(this.diemToan)+ parseFloat(this.diemVan))/2;
        },
        xeploai(dtb){
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

    }
/**
 * hiển thị thông tin
 */

    var dtb =sinhVien.tinhTB();
    getEle('spanTenSV').innerHTML =sinhVien.tenSV
    getEle('spanMaSV').innerHTML =sinhVien.maSV
    getEle('spanLoaiSV').innerHTML =sinhVien.hoanCanh
    getEle('spanDTB').innerHTML =dtb
    getEle('spanXepLoai').innerHTML =sinhVien.xeploai(dtb)


}