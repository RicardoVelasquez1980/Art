//Ricardo Velasquez
//ART 1

//Start Class Tri##########
class Tri extends p5.Vector{
  constructor(){
    super(random(width), random(height));//Random Pos#####
    this.vel = p5.Vector.random2D();//Random Vel#####
    this.acc = p5.Vector.random2D();//Random Acc#####
    this.angle = random(TWO_PI);//Random Angle#####
    this.angleTheta = random(TWO_PI);//Random Change Of Angle#####
    this.sz = random(16);//Random Size#####
    this.ignore = random(255);
    // this.mainClr = color(this.ignore, this.ignore, this.ignore, random(255));//Random GrayScale Shade#####
    this.mainClr = color(245, 212, 29, random(255));
    this.tempClr = color(10, 150, 10, random(255));//A Splash Of Color#####
    this.usedClr = this.mainClr;//ReAssigned In this.checkBoxCollision#####

  }

  run(){
    this.render();
    this.updatePos();
    this.updateAng();
    this.checkEdges();
    this.usedClr = this.checkBoxCollision();

  }

  render(){
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    fill(this.usedClr);
    noStroke();
    triangle(0, 0, 0, this.sz, this.sz, 0);
    pop();

  }

  updatePos(){
    this.vel.limit(4);
    this.vel.add(this.acc);
    this.add(this.vel);

  }

  updateAng(){
    this.angle += this.angleTheta;

  }

  checkEdges(){
    if (this.x + this.sz > width){//If Box Reaches Right Edge#####
      this.x = this.sz + 0.001;//Tp To Opposite Side#####
    } else if (this.x - this.sz < 0){//If Box Reaches Left Edge#####
      this.x = width - this.sz - 0.001;//Tp To Opposite Side#####
    }

    if (this.y + this.sz > height){//If Box Reaches Bottom Edge#####
      this.y = this.sz + 0.001;//Tp To Opposite Side#####
    } else if (this.y - this.sz < 0){//If Box Reaches Top Edge#####
      this.y = height - this.sz - 0.001;//Tp To Opposite Side#####
    }

  }

  checkBoxCollision(){
    let distance = 0;
    for (let i = 0; i < tris.length; i++){
      if (tris[i] !== this){//If The Object In Boxes Isnt THIS Same Object#####
        let distance = dist(this.x, this.y, tris[i].x, tris[i].y);//Calc The Dist For Every Other Box#####

        if (distance < this.sz * 4){//If Dist Is Within A Certain Range#####
          return this.tempClr;
        } else {
          return this.mainClr;
        }

      }
    }

  }

}
//End Class Tri##########

//Start Function loadTri##########
function loadTri(qty){
  for (let i = 0; i < qty; i++){
    tris.push(new Tri());//Pushed New Triangle To Tris Array#####
  }
}
//End Function loadTri##########

//Start Function runTri##########
function runTri(){
  for (let i = 0; i < tris.length; i++){
    tris[i].run();//Run All Tris In Array#####
  }
}
//End Function runTri##########
