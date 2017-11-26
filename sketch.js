var tree = [];
var leaves = [];
var count = 0;

function setup(){
  createCanvas(400,400);
  //angle = degrees(random(.4,.45));
  //console.log(angle);
  //angleSlider = createSlider(.3,.5,.4, .01);
  //lengthSlider = createSlider(50,200,100,10);
  var a = createVector(width/2, height);
  var b = createVector(width/2, height - 100);
  root = new Branch(a, b);

  tree[0] = root;


}

function mousePressed(){
for (var i = tree.length-1; i >=0; i--){
  if (!tree[i].finished){
    tree.push(tree[i].branchA());
    tree.push(tree[i].branchB());
    tree[i].finished=true;
    }
  }

    count ++;
    //console.log(count)
    if (count ===6){
      for (var i = 0; i < tree.length; i++){
          if (!tree[i].finished){
            var leaf = tree[i].end.copy();
            leaves.push(leaf);

          }
      }
    }

}

function draw(){
  background(51);
  root.show();
  for (var i = 0; i<tree.length; i++) {
    tree[i].show();
  }
  for (var i = 0; i<leaves.length; i++) {
    fill(76,187,23, 100);
    noStroke();
    ellipse(leaves[i].x, leaves[i].y, 8, 8);
    leaves[i].y += random(0,1);

  //angle = angleSlider.value();
}

}