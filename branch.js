function Branch(begin, end) {
  this.begin=begin;
  this.end=end;
  this.finished=false;

  this.show = function() {
    stroke(255);
    line(this.begin.x, this.begin.y, this.end.x, this.end.y);

  }

  this.branchA = function() {
    var direction = p5.Vector.sub(this.end, this.begin);
    direction.rotate(PI/6);
    direction.mult(.67);
    var newEndPoint = p5.Vector.add(this.end, direction);


    var a = new Branch(this.end, newEndPoint);
    return a;
  }
  this.branchB = function() {
    var direction = p5.Vector.sub(this.end, this.begin);
    direction.rotate(-PI/4);
    direction.mult(.67);
    var newEndPoint = p5.Vector.add(this.end, direction);


    var b = new Branch(this.end, newEndPoint);
    return b;
  }

}
