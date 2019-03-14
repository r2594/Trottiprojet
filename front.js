$.get('http://localhost:3000/products.html',function (response){
    response.forEach(function (prod){
        new Product(prod.product_name, prod.product_img, prod.product_price);
    })
});

function send(){
    var comment_name = document.querySelector('#com1').value;
    console.log(comment_name);
    $.post('http://localhost:3000/comment', {comment_name : comment_name}, function(response){
        console.log(response);
    })
}

$.get('http://localhost:3000/comment', function (response){
    response.forEach(function (com){
        new Comment(com.comment_name);
    })
});

var comments = [];

class Comment {
    constructor(name){
        this.name = name;
        this.parent = document.getElementById('containerCom');
        this.create();
        this.setAttr();
        this.append();
        this.fill();
        comments.push(this);
    }

    create(){
        this.container = document.createElement('div');
        this.com = document.createElement('p');
    }

    setAttr(){
        this.container.setAttribute('id', 'comSec');
        this.com.setAttribute('id', 'leCom');
    }

    append(){
        this.parent.appendChild(this.container);
        this.container.appendChild(this.com);
    }

    fill(){
        this.com.innerHTML = '" '+this.name+' "';
    }

}

var products = [];

class Product{

        constructor(name, image, price){
            this.name = name;
            this.image = image;
            this.price = price;
            this.parent = document.getElementById('zone');
            this.create();
            this.setAttr();
            this.append();
            this.fill();
            products.push(this);
        }

        create(){
            this.container1 = document.createElement('div');
            this.nom = document.createElement('h2');
            this.img = document.createElement('img');
            this.prc = document.createElement('p');
            this.button = document.createElement('button');
        }

        setAttr(){
            this.container1.setAttribute('id', 'container1');
            this.img.setAttribute('src', this.image);
            
        }
        
        append(){
           this.parent.appendChild(this.container1);
           this.container1.appendChild(this.nom);
           this.container1.appendChild(this.img);
           this.container1.appendChild(this.prc);
           this.container1.appendChild(this.button);
        }

        fill(){
            this.nom.innerHTML = this.name;
            this.img.innerHTML = this.image;
            this.prc.innerHTML = this.price;
            this.button.innerHTML = "Buy";
        }
}