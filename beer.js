

class Product{
    constructor(id,name,photo,price,quantity){
        this.id= id;
        this.name =name;
        this.photo =photo;
        this.price =price;
        this.quantity =quantity;
    }
}

class Cart{
    constructor(id,name,photo,price,quantity,totalItem){
        this.id= id;
        this.name =name;
        this.photo =photo;
        this.price =price;
        this.quantity =quantity;
        this.totalItem =totalItem;
    }
}

let beer1 = "https://carlsbergvietnam.vn/media/32709/csd-ny.png?height=440&mode=max";
 
let prot1 = new Product(1,"CARLSBERG PREMIUM",beer1, "12.000" , 40,);
let prot2 = new Product(2,"TURBORG", "https://carlsbergvietnam.vn/media/24455/tuborg_4g_bottle_wet_rgb_low-res.png?height=440&mode=max", 23000 , 40,);
let prot3 = new Product(3,"FESTIVAL", "https://carlsbergvietnam.vn/media/40423/festival-bottle-330ml.png?height=440&mode=max",  23000, 40,);
let prot4 = new Product(4,"HUDA", "https://carlsbergvietnam.vn/media/24449/vi_huda.png?height=440&mode=max", 23000 , 40,);
let prot5 = new Product(5,"HUDA GOLD", "https://carlsbergvietnam.vn/media/40310/huda-gold2.png?height=440&mode=max", 23000 , 40,);
let prot6 = new Product(6,"HUDA ICE BLAST", "https://carlsbergvietnam.vn/media/24453/hudice_bottle.png?height=440&mode=max", 23000 , 40,);
let prot7 = new Product(7,"HALIDA", "https://carlsbergvietnam.vn/media/43386/halida-revamp-bottle.png?height=440&mode=max", 23000 , 40,);
let prot8 = new Product(8,"HALIDA DARK", "https://carlsbergvietnam.vn/media/40258/chai-halida-04.png?height=440&mode=max", 23000 , 40,);
let prot9 = new Product(9,"HALIDA EXPORT ALL MALT", "https://carlsbergvietnam.vn/media/40257/chai-halida-03.png?height=440&mode=max", 23000 , 40,);
let prot10 = new Product(10,"1664 BLANC", "https://carlsbergvietnam.vn/media/39506/1664_blanc_bottle_wcap_wet_lowres.png?height=440&mode=max", 23000 , 40,);

let prot = [prot1,prot2, prot3, prot4, prot5, prot6, prot7,prot8,prot9,prot10];
let cartItem = [];


// function showTable(){
//     let table = "";
//     let size = prot.length;
//     for (let i = 0; i < size ; i++){
//         table += `<tr>`
//         table+=`<td>${prot[i].id}</td>`
//         table+=`<td>${prot[i].name}</td>`
//         table+=`<td><img src=${prot[i].photo}/></td>`
//         table+=`<td><input type="number" id="soLuong${i}" value="${prot[i].quanlity}" disabled> </td>`
//         table+=`<td>${prot[i].price}</td>`
//         // table+=`<td><input type="number" required min="0" id="quanlityProduct${i}"> 
//         // <button onclick="add(${i})" >AddProduct</button></td>`
//     table += `</tr>`
//     }
//     document.getElementById('tbody').innerHTML=table;
// }
// (function(){
//     showTable(prot)
// })()

function showItem(prot){
    a = prot.map((prot)=>{
        return (
            `<div key=${prot.id} class="itemIndex">
                <table border="0">
                    <tr>
                        <td class="tdCart">
                            <p class="protName" style="font-weight: bold; text-align:center; font-size:24px;">${prot.name}</p> 
                            <div style="display: none">
                                <input type="text" id="addName${prot.id}" value="${prot.name}"/>
                            </div>
                            <div style="display: none">
                                <input type="number" id="addId${prot.id}" value="${prot.id}"/>
                            </div>
                            <img class="itemPhoto" style="width:200px; height:250px" src=${prot.photo}/>
                            <div style="display: none">
                                <input type="text" id="addPhoto${prot.id}" value="${prot.photo}"/>
                            </div>
                        
                            <div class="detail">
                                <div style="font-weight: bold; text-align:center; ">
                                    <input type="number" required min=0 id="addQuantity${prot.id}" /> 
                                </div>
                                <div style="display: none">
                                    <input type="text" id="addPrice${prot.id}" value="${prot.price}" />
                                </div >
                                <p class="price" style="font-weight: bold; text-align:center; font-size:18px;" > Price: ${prot.price} VND</p>
                                <p class="addPro" style="font-weight: bold; text-align:center;"> <button id="addCart" onclick="addItem(${prot.id})"> Thêm sản phẩm </button></p>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>`   
            
        )
    })
   
    document.getElementById('item').innerHTML=a.join("");
    

}

(function(){
    showItem(prot)
})()

function searchItem(){
    let keyword = document.getElementById('searchWord').value
    let resultSearch = prot.filter(function(searchProt,index){
        return searchProt.name.toLowerCase().indexOf(keyword.toLowerCase()) != -1;
    }) 
    showItem(resultSearch);
}


function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function cartTable(data){
    let cart="";
    let totalCart=0;
    let size = data.length;
    for (let i = 0; i < size ; i++){
        cart += 
                `<div class="cartTable">
                    <div style="font-weight: bold;" >${data[i].name}</div>
                    <div>
                        <img class"photoCart" src="${data[i].photo} style="width: px; height="100px"/>
                    </div>
                    <div>Đơn giá: ${data[i].price} VND</div>
                    <div >Số lượng:${data[i].quantity}</div>
                    <div>Thành tiền: ${data[i].totalItem} VND</div>
                    <button id="removeCart" onclick="remove()">Remove</button>
                </div>`
                totalCart += data[i].totalItem
    }
    cart+= `<div>
                <p>Tổng tiền: ${totalCart} VND </p>
            </div>`
    document.getElementById('addItem').innerHTML = cart;

}
function addItem(id) {  
    let index = document.getElementById(`addId${id}`).value
    let name = document.getElementById(`addName${id}`).value;
    let photo= document.getElementById(`addPhoto${id}`).value;
    let quantity = document.getElementById(`addQuantity${id}`).value;
    if (quantity==" " || quantity== 0 ){
        alert('Xin mời bạn nhập số lượng!!!')
        return;
    } 
    let price = document.getElementById(`addPrice${id}`).value;
    let totalItem = quantity * price;
    let cart = new Cart(index,name, photo,price,quantity,totalItem)
    cartItem.push(cart);
    cartTable(cartItem);
    document.getElementById(`addQuantity${id}`).value = "";
} 

function remove(id){
    let removeCart = document.getElementById('removeCart')
    document.getElementById(`addId${id}`).value="";
    document.getElementById(`addName${id}`).value="";
    document.getElementById(`addPhoto${id}`).value="";
    document.getElementById(`addQuantity${id}`).value="";
}


  

