/**
 * Array
 */
//var fullName = ' nguyen tan phat'; => mỗi biến chứa 1 giá trị
// typeof là kiểm tra phần tử xem kiểu gì

// c1                 0      1    2
var  listSinhVien = ['phat','Y','thang'];
// console.log(typeof listSinhVien); => object 

//c2
var listNhanVien = new Array ('phat','Y','thang');

//truy xuất phần mảng
console.log(listSinhVien[2]);
//cập nhật giá trị
listSinhVien [0] = 'Phat'
console.log(listSinhVien[0]);

// thêm
listNhanVien.push('dong'); // thêm vào cuối mảng
listNhanVien.unshift('Nam');//thêm vào đầu mảng
console.log(listNhanVien);

 //xóa phần tử khỏi mảng
 listNhanVien.pop();//tự động xóa phần tử cuối mảng
 listNhanVien.shift();//xóa phần tử đầu mảng
 console.log(listNhanVien);

 //lấy độ dài
 console.log(listNhanVien.length);
 console.log(listSinhVien.length);

 //duyệt mảng (vòng lập for) loop
//  debugger
for(var i = 0; i<listNhanVien.length ; i++){//i là index
    console.log(listNhanVien[i]);
}



/**
 * DOM(var tagHelloDOM = document.getElementById('helloDOM'))
 * - DOM thông qu ID: getElementById(trả về 1 element)
 * - DOM thôg qua TAGNAME:getElementsByTagName: TRẢ về 1 danh sách (vì có thể có nhiều h2)
 * -DOM thông qua CLASS :getElementsByClassName: TRẢ về 1 danh sách (vì có thể có nhiều h2)
 */

//DOM thông qua id
//console.log(document.getElementById('helloDOM'));//nó tự hiểu là ID rồi nên ko cần #
var tagHelloDOM = document.getElementById('helloDOM')
console.log(tagHelloDOM.innerHTML);//innerHTML: lấy nội dung trong tag
//thay đổi nội dung
tagHelloDOM.innerHTML='hello DOM nè'
//thay đổi style của element
tagHelloDOM.style.backgroundColor='red'

//DOM thông qua TAGNAME
var tagHeading =document.getElementsByTagName('h2')//TRẢ về mảng(vì có thể có nhiều h2)
console.log(tagHeading[1]);

var classWellcome= document.getElementsByClassName('welcome') 
classWellcome[2].style.color= 'blue'
console.log(classWellcome);

//xử lý sự kiện click
//c1
// var handleClickChaoTheGioi = function(){
//     alert('chào thế giới');
// }

//c2
// document.getElementById('btnChaoTheGioi').onclick=function(){
//     alert ('chào thế giới');
// }

//c3
//callback function: là func mà làm THAM SỐ của 1 func khác (giôngs như hàm kiểu tra số nguyên tố vây,
// khi hàm số nguyên tố gọi kiểm tra sô nguyên tố thì hàm sô nguyên tố mới chạy)


// document.getElementById('btnChaoTheGioi').addEventListener(
//  'click',function(){
//     alert('chào thế giới')
//  }
// )
//calback
var cbfn = function(){
    alert ('hello');
} 
document.getElementById('btnChaoTheGioi').addEventListener('click',cbfn);

//

var tagP = document.getElementById('tagP');

document.getElementById('nhan').onclick=function(){
    tagP.innerHTML='đã bấm';
}

//bật tắt đèn

document.getElementById('on').onclick=function(){
    document.getElementById('imgDen').src='./img/pic_bulbon.gif'
}
document.getElementById('off').onclick=function(){
    document.getElementById('imgDen').src='./img/pic_bulboff.gif'
}

