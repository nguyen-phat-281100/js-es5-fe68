/**
 * Khỏi tạo danh sách  nhân viên từ lớp đói tượng
 */
 var dsnv = new DanhSachNhanVien();
var validator = new Validator();
console.log(dsnv);

 var getEl=function(id){
     return document.getElementById(id);
 }

// var validator =function name(params) {
    
// }

//lấy dât từ local storage
 var renderDSNV=function(dsnv){
    var content = '';
    dsnv.forEach(function(nv,index){// bỏ index đi cũng đc tại chưa sử dụng
        /**
         * nv đại diện cho 1 phần tử trong mảng(object nhân viên)
         * index: số chỉ múc của phần tử trong mảng
         */
        content += `
            <tr>
                <td>${nv.maNV}</td>
                <td>${nv.hoTen}</td>
                <td>${nv.email}</td>
                <td>${nv.ngaySinh}</td>
                <td>${nv.chucVu}</td>
                <td>
                    <button class ="btn btn-success" data-toggle="modal" data-target="#myModal" onclick = 'suaNhanVien('${nv.maNV}')'>Xem</button>
                    <button class ="btn btn-danger" onclick ="xoaNhanVien('${nv.maNV}')">Xóa</button>
                </td>
            </tr>
        `;
    });
    getEl('tableDanhSach').innerHTML=content;
 };

 function xoaNhanVien(maNV){
     dsnv.xoaNhanVien(maNV);
     renderDSNV(dsnv.arr);
     setLocalStorage();
 }

function suaNhanVien(maNV){
    getEl('btnThemNV').style.display= 'none';
    getEl('btnCapNhat').style.display= 'block';// hiện lên
    getEl('msnv').disabled='true';
    // getEl('msnv').setAttribute('disabled','true');
 
    var nhanVien=dsnv.layThongTinNhanVien(maNV);
    /**
     *Đổ data nhân viên lên model
     */
    getEl('msnv').value=nhanVien.maNV;
    getEl('name').value=nhanVien.hoTen;
    getEl('email').value=nhanVien.email;
    getEl('password').value=nhanVien.matKhau;
    getEl('datepicker').value=nhanVien.ngaySinh;
    getEl('chucvu').value=nhanVien.chucVu;
};


/**
 * cập nhật nhân viên
 */
getEl('btnCapNhat').addEventListener('click',function(){
    var maNV = getEl('msnv').value;
     var hoTen = getEl('name').value;
     var email = getEl('email').value;
     var matKhau = getEl('password').value;
     var ngaySinh = getEl('datepicker').value;
     var chucVu = getEl('chucvu').value;
    
     var nhanVien =new NhanVien(maNV,hoTen,email,matKhau,ngaySinh,chucVu)
     dsnv.capNhatNhanVien(nhanVien);
     getEl('btnDong').click();
     renderDSNV(dsnv);//cập nhật lai dsnv
     setLocalStorage();
});
getEl('searchName').addEventListener('keyup',function(){
    var keyword =getEl('searchName').value;
    var mangTimKiem =dsnv.timKiemNhanVien(keyword);
    renderDSNV(mangTimKiem);
})
//lấy data từ local storage
 getLocalStorage();


  getEl('btnThem').addEventListener('click', function(){
      getEl('btnCapNhat').style.display = 'none';
      getEl('btnThemNV').style.display = 'block';

  });
  
  getEl('btnThemNV').addEventListener('click',function(){
    /**
     * lay thong tin
     */
     var maNV = getEl('msnv').value;
     var hoTen = getEl('name').value;
     var email = getEl('email').value;
     var matKhau = getEl('password').value;
     var ngaySinh = getEl('datepicker').value;
     var chucVu = getEl('chucvu').value;
    /**
     * kiểm tra dữ liệu
     */
    var isValid = true;
    //&= :và bằng (tất cả điều kiện đúng mới đúng)

    isValid &= validator.kiemTraRong(maNV,'tbMaNV','Mã nhân viên không được bỏ trống')
                &&validator.kiemTraDoDaiKyTu(maNV,'tbMaNV','vui lòng nhập từ 4-10 ký tự',4,10);

    isValid &= validator.kiemTraRong(hoTen,'tbTen','Họ tên không được để trống')
                &&validator.kiemTraChuoi(hoTen,'tbTen','Họ tên không hợp lệ');

    isValid &= validator.kiemTraRong(email,'tbEmail','Email không được để trống')
                &&validator.kiemTraEmail(email,'tbEmail',"Email không hợp lệ");

    isValid &= validator.kiemTraRong(matKhau,'tbMatKhau','Mật khẩu không được để trống')    
                &&validator.kiemTraDoDaiKyTu(matKhau,'tbMatKhau','vui lòng nhập 6 - 10 ký tự',6,10);

    isValid &= validator.kiemTraChucVu('chucvu','tbChucVu','Bạn chư chon chức vụ');//chức vụ là id nên chuyển sang dạng chuỗi
    if(!isValid)
    return; //nếu hàm đúng thì ở dưới dừng lại, break chỉ đúng trong vòng lập và switch case 



    /**
     * Khỏi tạo đối tượng nhân viên từ lớp đối tượng nhân viên
     */
    var nhanVien = new NhanVien(maNV,hoTen,email,matKhau,ngaySinh,chucVu);
    /**
     * thêm đối tượng nhanVien vào mảng
     */
    dsnv.themNhanVien(nhanVien);

    /**render  danh sachs nhaan vieen ra giao dieenj */

    renderDSNV(dsnv.arr);
    /**
     * đóng model(thường sd cho hàm sửa)
     */
    getEl('btnDong').click();
  });
function getLocalStorage(){
    /**
     * Laays data tuwf local strorage
     */
    if(localStorage.getItem('DSNV')){
        dsnv.arr= JSON.parse(localStorage.getItem('DSVN'));
        renderDSNV(dsnv.arr);
    }
    

}


//JSON  là 1 cái ĐỊNH DẠNG dữ liệu (dạng chuỗi)
  function setLocalStorage(){
localStorage.setItem("DSNV",JSON.stringify(dsnv.arr));

  };
//    var arr=['a','b','c'];
//    console.log(typeof JSON.stringify(arr));
