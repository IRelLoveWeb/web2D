import './libs/weapp-adapter'
import './libs/symbol'

import { GUI} from './libs/dat.gui.min.js'
import { Scene, WebGLRenderer, PerspectiveCamera,Color} from './libs/three.js'
import { Box, Plane} from './elements/elements.js'


export default class Main{
  constructor(){
    //gui
    this.gui = new GUI();
    this.guiconfigs = {x:0}

    // scene
    this.scene = new Scene();
    // render
    this.renderer = new WebGLRenderer({ canvas: canvas })
    this.renderer.setClearColor(new Color(0xeee),0.8);
    //camera
    this.camera = new PerspectiveCamera(45, canvas.width / canvas.height, 1, 1000);
    this.camera.position.set(2, 10, 2);
    this.camera.up.set(0, 1, 0);
    this.camera.lookAt(0, 0, 0);
    //light


    this.start();
  }

  start(){
    //plane
    this.scene.add(new Plane().init());
    //first box
    this.scene.add(new Box().init());

    this.gui.add(this.guiconfigs,'x',-5,5).name('camera x').onChange(e =>{
      this.camera.position.x = e;
    })

    this.loop();
  }

  update(){}

  render(){
    this.renderer.render(this.scene, this.camera);
  }

  loop(){
    this.render();

    requestAnimationFrame(this.loop.bind(this));
  }
}