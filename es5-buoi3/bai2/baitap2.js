var danhSachSV = [];
var getEle =function(id){
    return document.getElementById(id);
    
}

var renderDSSV = function(){
    //clear body
    getEle('tbodySinhVien').innerHTML = '';
    //duyệt qua danh sachs sinh vien;
    for (var i =0 ;i<danhSachSV.length;i++){
        //Tạo dòng
        var tagTr = document.createElement('tr');//tạo <tr></tr>
        //taoj cột
         var tagTdMaSV = document.createElement('td');//tạo <td></td>
         var tagTdTenSV = document.createElement('td');
         var tagTdEmail = document.createElement('td');
         var tagTdNgaySinh = document.createElement('td');
         var tagTdKhoaHoc = document.createElement('td');
         var tagTdDiemTB = document.createElement('td');
         

         // gán nội dung cho côt tạo <td></td>
         tagTdMaSV.innerHTML = danhSachSV[i].ma;
         tagTdTenSV.innerHTML = danhSachSV[i].ten;
         tagTdEmail.innerHTML = danhSachSV[i].email;
         tagTdNgaySinh.innerHTML = danhSachSV[i].ngaySinh;
         tagTdKhoaHoc.innerHTML = danhSachSV[i].khoaHoc;
         tagTdDiemTB.innerHTML = danhSachSV[i].tinhDTB();

         // gán lần lượt các cột vào dòng
         tagTr.appendChild(tagTdMaSV);
         tagTr.appendChild(tagTdTenSV);
         tagTr.appendChild(tagTdEmail);
         tagTr.appendChild(tagTdNgaySinh);
         tagTr.appendChild(tagTdKhoaHoc);
         tagTr.appendChild(tagTdDiemTB);

         //gán dòng vào tbody
         getEle('tbodySinhVien').appendChild(tagTr);
    }
}
 
 var themSinhVien = function(){
     //lấy thông tin tsừ người dùng nhập
    //  var maSV = document.querySelector('#txtMaSV');// trả về element đầu tiên tìm thấy
    //  var queryAll= document.querySelectorAll('input');//lấy tất cả cái input
    //  console.log(queryAll);
    //  console.log(maSV);

    var maSV = getEle('txtMaSV').value;
    var tenSV = getEle ('txtTenSV').value;
    var email =getEle('txtEmail').value;
    var matKhau=getEle ('txtPass').value;
    var ngaySinh =getEle('txtNgaySinh').value;
    var khoaHoc=getEle('khSV').value;
    var dienToan=getEle('txtDiemToan').value;
    var diemLy = getEle('txtDiemLy').value;
    var diemHoa = getEle('txtDiemHoa').value;

    var sinhVien = new SinhVien(maSV,tenSV,email,matKhau,ngaySinh,khoaHoc,dienToan,diemLy,diemHoa);
    //khoir tọa để push SV
    // console.log(sinhVien);

    /**
     * theem  đối tượng SV vào mảng
     */
    danhSachSV.push(SinhVien);


    // console.log(object);
    renderDSSV();

    /**
     * render danh sách ra giao diện
     */
     console.log(danhSachSV[i]);
 }
