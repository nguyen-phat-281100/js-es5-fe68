/**
 * Khỏi tạo danh sách  nhân viên từ lớp đói tượng
 */
 var dsnv = new DanhSachNhanVien();

 var getEl=function(id){
     return document.getElementById(id);
 }


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
                    <button class ="btn btn-success">Xem</button>
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

//lấy data từ local storage
 getLocalStorage();


  getEl('btnThem').addEventListener('click', function(){
      getEl('btnCapNhat').style.display = 'none';
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
