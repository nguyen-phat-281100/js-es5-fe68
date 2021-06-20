console.log('Hello world ');
// this is my comment
/**
 * 
 */
// alert('Hello')
/**
 * biến và kiểu dữ liệu:
 * - kiểu nguyên thủy (primitive type): string ,number, boolean, underfined, null , bigint, symbol
 * - Còn lại là Object
 * - null là object (bug của JS) ,array cũng là kiểu object
 * - Dynamic type (linh động kiểu var)
 * - đặt tên biến theo kiểu camelCase (kiểu lạc đà) và phải có ý nghĩa
 * - Không bắt đầu bằng số và kí tự đặt biệt, và ko đc chứ kí tụ đặc biệt ngoại trừ dấu gạch dưới
 * - không đatẹ tên biến có khoảng trắng
 * - khoog đặt tên trùng vs các keyword có săn trong JS
 * - Hằng số (constant ):
 *    +lưu trữ các gí trị ko bao giờ thay đổi
 *    + không thể gán giá tị mới đc
 *    + Bắt buộc phải gán gán giá trị
 *    + khia báo hằng số nên viết bằng chữ in hoa (IN_HOA)
 *    +Switch case chỉ so sánh bằng
 */
var fullname = 'Nguyen Tan Phat'
console.log(typeof fullname); //kiểm tra kiểu dữ liệu

var age = 18;
console.log(typeof age);

var isStudent = true;//boolean
console.log(typeof isStudent);

var height;
console.log(typeof height);

var weight = null; //object
console.log(typeof weight);

// hằng số
//  const PI; => toang
const PI = 3.14; 
// PI=3.15 => TOANG

//câu điều kiện if, else, else if, switch case
/**
 * - AND (&&) tất cả true thì true, 1 thằng false thì cả đám false
 *  + nếu ở đầu là false thì dừng lại và để lại giá trị đó luôn (có thể ở đầu là object)
 *  + nếu đầu là true thì chạy tiếp
 * - OR (||) chỉ cần 1 cái true là true, tất cả false thì false
 *  + nếu true thì dừng lại và để lại giá trị đó luôn (có thể là object)
 *  + nếu false đầu thì chạy tiếp
 * - NOT (!) nghịch đảo
 * Truthy và falsy value (&& hoặc || 2 số tự chuyển sang kiểu boolean, số 0 convert ra là false, số âm hoặc dương là true)
 * - false:0, '',"",``,null, undefined, false,NaN (not a number)
 * -true :còn laoij
 * - 
 */

//if 
var isGirl = true;
if (!isGirl){
    alert('right');
    
}
//if else
var isAdult = true;
if(isAdult){
    console.log("u can access thid page !");
}else{
    console.log("FBI warning");
}

//else if
var trafficLight = "blue"
if (trafficLight == 'green'){
    console.log('ddi ddi');
}else if (trafficLight == "yellow"){
    console.log('chay cham');
}else if(trafficLight == 'red'){
    console.log('dung');
}else {
    console.log('cup dien');
}

// === là so sánh giá trị và kiểu dữ liệu
console.log(3==='3');//false
console.log(3=='3');//true

console.log(3!=='3');// true
console.log(3!='3');//false

// Switch case 
var number = 2; //số case
switch(number){
    case 1:
        console.log('Một');
        break;
    case 2:
        console.log('Hai');
        break;
    case 3:
        console.log('Ba');
        break;
    case 4:
        console.log('Bốn');
        break;
    case 5:
        console.log('Năm');
        break;
    default:
        console.log('ko xac dinh');
}
//biểu thức điều kiện(Logical Operater)
var A = true;
var B = false;
 console.log(!(A && B)); //false

 const isGirls = true;
 var result = isGirls && 'hey girl'
 console.log(result);

 var number = 0;
 if(number){//ở đây number là false vì number là 0 thì nó tự convert ra là false
    // nên muốn lấy number thì thêm !
    //cái này theo kiểu trueth và falsy

 }
/**
 * ?? là nullish (null vs underfined)
 * trả giá trị khác null và underfined (là khi gặp null và underfined thì xét phía sau)
 */

 /**
  * Hàm (Function)
  * - 3 loại : declaration func,expression func, arrow func (es6)
  * + hàm ko có tham số, ko có giá trị trả về
  * + hàm có tham sô , ko có giá trị trả về
  * + hàm ko có tham số, ko có giá trị trả về 
  * -hoisting: là cơ chế đẩy 1 biếm được khai báo lên trên cùng scope chứa nó => có thể truy cập được biến chưa khai báo
  * +đối với biến : hoisting chỉ xảy ra với từ khóa var
  * +đối với func : hoisting chỉ xảy ra với declaration
  * -Ternary operator (toán tử 3 ngôi)
  */
 function sayHello(){
     console.log('kinhs chaof');
 }
 function sayHelloToSomone(name){
    console.log('hello' +' '+ name);
    // return sayHelloToSomone
 }
 function calculateGPA(score1, score2, score3){
     var gpa = (score1 + score2 + score3)/3;
    //  console.log(gpa);
    return gpa;
 }
//  goij func
sayHello();
sayHelloToSomone('phat');
// calculateGPA(7, 9, 10);
var _gpa = calculateGPA(7, 9, 10);
console.log(_gpa);
//expression funct,ko thể gọi trc func,khi gọi lên thì nó bị undefied
var _sayHello = function(name){
    console.log('hello' + name);

}
_sayHello('tay');
_sayHello('tay');
// Hoisting
 var demoHoisting;//chỉ có vả nới có hoisting 
 console.log('demoHoisting');
 var demoHoisting = 'hoisting';

// console.log(hoistingConst );=>toang
const hoistingConst ='hoisting'
console.log(hoistingConst );




// Ternary operator (toán tử 3 ngôi)
1===2 ? console.log("điều kiện đúng"): console.log("điều kiện sai");

var res = 1 === 2 ? true :false ;
console.log(res);

/**
 * BT1: tính điểm TB và xeeps loại sinh viên
 */
var tinhDiemTB = function(dToan,dLy,dHoa){
    //var dtb=(dToan + dLy + dHoa)/3;//scope,dtb ;là biến local(ko thể gọi từ bên ngoài)
    return (dToan + dLy + dHoa)/3;
}
var xeploai = function(){
    var dtb = tinhDiemTB(5,8,10);
    var xeploai = ''//chuỗi
    if (dtb >= 9 && dtb <= 10){
        // console.log('hoc');
        xeploai = 'Xuất sắc '
    }else if (dtb>=8 && dtb < 9){
        xeploai='giỏi'
    }else if (dtb>=7 && dtb < 8){
        xeploai=' Khá'
    }else if (dtb>=6 && dtb < 7){
        xeploai='TB khá'
    }else if(dtb>=5 && dtb < 6){
        xeploai = 'Trung bình'
    }else{ //chỉ có else vì hết điều kiện
        xeploai='Yếu'
    }
    console.log('xếp loại' + xeploai);
}
xeploai();
tinhDiemTB(5,8,9);
console.log(tinhDiemTB);