function DanhSachNhanVien(){
    this.arr=[];

    DanhSachNhanVien.prototype.themNhanVien = function(nhanVien){
        this.arr.push(nhanVien);//this ở đây là 
    };
    this.timViTri = function(maNV){
        /**
         * finIndex:
         * timf thaay s trả về index
         * ko tìm thấy trả về -1
         */
        return this.arr.findIndex(function(nv){//laays ra  1 cái element (nv: đặt cái gì cũng được)
            return maNV === nv.maNV; //tìm vị trí của i
        })
    }
    //xóa nhân viên
     this.xoaNhanVien = function(maNV){
        var viTri =  this.timViTri();
        if(viTri !==-1){
            this.arr.splice(viTri,1);//  số 1 là xóa 1 phần tử ,nếu 2 thì xóa 2 phần tử từ viTri
        }
     }
}
DanhSachNhanVien.prototype.layThongTinNhanVien=function(maNV){//prototy là 1 cáo object
    // console.log('Prototype');
    var viTri = this.timViTri(maNV);
    if(viTri !== -1) return this.arr[viTri];
};
DanhSachNhanVien.prototype.capNhatNhanVien = function(nhanVien){
    var viTri = this.timViTri(nhanVien.maNV);// cập nhật nguyên cái nhân viên
    if(viTri !== -1){
        this.arr[viTri]=nhanVien;

    };

};
DanhSachNhanVien.prototype.timKiemNhanVien = function(keyword){
    // var mangTimKiem=[];
    return this.arr.filter(function(nv){
        return nv.hoTen.toLowerCase().indexOf(keyword.toLowerCase())!==-1
    });
    // return mangTimKiem;
}