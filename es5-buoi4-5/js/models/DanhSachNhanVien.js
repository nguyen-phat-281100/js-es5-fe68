function DanhSachNhanVien(){
    this.arr=[];

    this.themNhanVien = function(nhanVien){
        this.arr.push(nhanVien);
    };
    this.timViTri = function(maNV){
        /**
         * finIndex:
         * timf thaay s trả về index
         * ko tìm thấy trả về -1
         */
        return this.arr.findIndex(function(nv){//laays ra  1 cái element (nv)
            return maNV === nv.maNV;
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