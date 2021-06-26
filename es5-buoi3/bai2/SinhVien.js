//Lớp đối tượng: constructor function
function SinhVien(_ma,_ten,_email,_matKhau,_ngaySinh,_khoaHoc,_dToan,_dLy,_dHoa){// function ở lớp đối tượng thì đặt chữ hoa ở đầu 
    //thuộc tính
    /**
     * this tồn tai trong function
    'this' keyword /variable:tồn tại ở trong func, giá trị của biến this chính là object
    mà func đó thuộc về ,giá trị của this ko cố định và được xác định tại thời điểm mà func
    được thực thi
    *-regular func :this = global object(windown )
    *'new; operrater(constructor func):thí = empty object được tạo ra từ constructor func
    -func là method của object :this object chưa method đó
    -event handle: this= element xảy xa event
     */
    this.ma=_ma;
    this.ten=_ten;
    this.email=_email;
    this.matKhau=_matKhau;
    this.ngaySinh=_ngaySinh;
    this.khoaHoc=_khoaHoc;
    this.dToan=_dToan;
    this.dLy=_dLy;
    this.dHoa=_dHoa;
    //phương thức
    this.tinhDTB= function(){
        return (parseFloat(this.dToan) + parseFloat(this.dLy) +parseFloat(this.dHoa)/3); 
    }
}
//khỏi tạo 1 dối tượng sinh viên từ lớp đối tượng
var sv1= new SinhVien('Sv1','phat','xxx@gmail.com','123','08/06','fe',8,5,10)
//console.log(sv1);


// var t=tinhDTB(8,5,9);
// console.log(t);

/**
 * cách thức hoạt động của toán tử new
 * 4 bước:
 * b1: tạo ra 1 object roongk (empty object=> {})
 * b2: goik func SinhVien và đông thời gán object rỗng được tao ra ỏe bước 1 vào biến this (this = {})
 * b3:trở object rỗng (b1) đến object prototype trong constructor func(SinhVien)
 * b4: return về object rông được tao ra ở bươc 1
 */
var _sinhVien= function (ma,ten,lop){//lop là giá trị được thêm vào
    var emptyObject ={};//tạo ra 1 empty object (do lấy cáo 3 thuộc tính nên ko xài new)
    var _this = emptyObject;
    _this.ma=ma;
    _this.ten=ten;
    _this.lop=lop;
    return emptyObject;
}
var _sv2=_sinhVien('sv1','phat','1')
// console.log(_sv2);