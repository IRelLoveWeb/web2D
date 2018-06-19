import {
  Mesh,
  BoxGeometry, PlaneGeometry,
  MeshBasicMaterial,
  Color, DoubleSide
} from '../libs/three.js'

export class Box {
  constructor(){
    this.geometry = new BoxGeometry(1,1,1);
    this.geometry.translate(0, 0.5,0); 
    this.material = new MeshBasicMaterial({ color: new Color(0xff0000) }) ;
  }
  
  init(){
    return new Mesh(this.geometry, this.material)
  }
}

export class Plane{
  constructor(){
    this.geometry = new PlaneGeometry(10, 10,50,50);
    this.geometry.scale(10,10,1);
    this.geometry.rotateX(-Math.PI/2);

    this.material = new MeshBasicMaterial({ color: 0xff00ff, transparent: true, opacity: 0.6})
  }

  init(){
    return new Mesh(this.geometry,this.material);
  }
}