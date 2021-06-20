/**
 * object(kiểu đối tượng)
 */
var person ={
    // key : value
    // đối tượng có 2 thành phần lag thuộc tính (properties) và phương thức (methods)
    // thuộc tính của đối tượng person
    name :'Phat',
    age:20,
    class :'fe68',
    // phương thức của đối tượng person
    greeting: function(){
        console.log('hello');// do ko có return nên nó trở thành undefined, nếu return thì nó trả về 1 giá trị 
    }
}
//c1
console.log(person.name);
console.log(person.class);
console.log(person.greeting());

//c2: truy cập trực tiếp
var _age ='age';
console.log(person['age']);

// thay đổi gái trị thuộc tính
person.name = 'thắng'
console.log(person);

//thêm thuộc tính mới 
person.height = 170;
console.log(person);

// xóa thuộc tính trong Object
delete person.age;
delete person['class'];
console.log(person);

// 
var employee = {
    //thuộc tính
    id: '1234',
    fullName :'Nguyễn Tấn Phát',
    email: 'xxx@gamil.com',

    tinhLuong : function(){

    },
    tinhTongSoGioLam: function(){},
    //Phương thức
    tinhTongNgayNghi(){
        console.log('shorthand method');
    }
}