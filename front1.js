$.get('http://localhost:3000/accessories.html',function (response){
    response.forEach(function (acce){
        new Accessorie(acce.accessorie_name, acce.accessorie_img, acce.accessorie_price);
    })
});

var accessories = [];

class Accessorie{

        constructor(name, image, price){
            this.name = name;
            this.image = image;
            this.price = price;
            this.parent = document.getElementById('zone');
            this.create();
            this.setAttr();
            this.append();
            this.fill();
            accessories.push(this);
        }

        create(){
            this.container2 = document.createElement('div');
            this.nom = document.createElement('h2');
            this.img = document.createElement('img');
            this.prc = document.createElement('button');

        }

        setAttr(){
            this.container2.setAttribute('id', 'container2');
            this.img.setAttribute('src', this.image);
            
        }
        
        append(){
           this.parent.appendChild(this.container2);
           this.container2.appendChild(this.nom);
           this.container2.appendChild(this.img);
           this.container2.appendChild(this.prc);
        }

        fill(){
            this.nom.innerHTML = this.name;
            this.img.innerHTML = this.image;
            this.prc.innerHTML = this.price;
        }
}