
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(0)
  textFont('Helvetica'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);

/*
  let bar_spacing = height / 10;
  let bar_height = width / 12;
  let bar_pos_x = width / 2;
*/

let heights = [];

let barHeight = [vocal, (vocal * 6 + drum) / 7, (vocal * 5 + drum * 2) / 7, (vocal * 4 + drum * 3) / 7, (vocal * 3 + drum * 4) / 7, (vocal * 2 + drum * 5) / 7, (vocal + drum * 6) / 7, drum, (drum * 6 + bass) / 7, (drum * 5 + bass * 2) / 7, (drum * 4 + bass * 3) / 7, (drum * 3 + bass * 4) / 7, (drum * 2 + bass * 5) / 7, (drum + bass * 6) / 7,bass, (bass * 6 + other) / 7, (bass * 5 + other * 2) / 7, (bass * 4 + other * 3) / 7, (bass * 3 + other * 4) / 7, (bass * 2 + other * 5) / 7, (bass + other * 6) / 7, other];
heights.push(barHeight);
//console.log(barHeight)

let barWidth = (canvasWidth/22)-30;
console.log(barWidth);

for (let i = 0; i < 22; i++) {
  let x = 160 + (i * barWidth);
  let currentHeight = barHeight[i];
  //let colorValue = color(random(100, 200), random(100, 200), random(200, 255));
 // console.log(barHeight[i]);
  
  //for (let j = 0; j < 10; j++) {
   // fill(colorValue);
    rect(x, height - 725, barWidth, currentHeight*5);
    x += barWidth;
  //}
}



/*
   let barStartingX = 200;
   let barStartingY = 1075;
   let totalBarWidth = 800;
   let numberOfBars = 12;
   let barWidth = width/(numberOfBars*2);

   let f = [vocal, (vocal*2+drum)/3, (vocal+drum*2)/3, drum, (drum*2+bass)/3, (drum+bass*2)/3, bass, (bass*2+other)/3, (bass+other*2)/3, other];
   fill(200, 200, 200);
   textAlign(CENTER);
   for(i<0; i<f.length;i++){
    let intArray = parseInt(f.length[i]);
    text(intArray, width/2, 50 + i * 30);
   }

 

   // vocal bar is red
   fill(200, 0, 0);
   rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
   fill(0);
   text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
   // drum bar is green
   fill(0, 200, 0);
   rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
   fill(0);
   text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
   // bass bar is blue
   fill(50, 50, 240);
   rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
   fill(0);
   text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
   // other bar is white
   fill(200, 200, 200);
   rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
   fill(0);
   text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
   fill(255, 255, 0);
 

   fill(200, 0, 0);
   rect(height/2+1*bar_spacing-325, bar_pos_x+50, bar_height, 16*vocal);
   fill(255, 255, 255);
   rect(height/2+1*bar_spacing-325, bar_pos_x+90, bar_height, 60);
   fill(0);
   text("vocals", height/2+1*bar_spacing-325, bar_pos_x+100);

   fill(0, 200, 0);
   rect(height/2+3*bar_spacing-325, bar_pos_x+50, bar_height, 16*drum);
   fill(255, 255, 255);
   rect(height/2+3*bar_spacing-325, bar_pos_x+90, bar_height, 60);
   fill(0);
   text("drums", height/2+3*bar_spacing-325, bar_pos_x+100);
 
   fill(50, 50, 200);
   rect(height/2+5*bar_spacing-325, bar_pos_x+50, bar_height, 16*bass);
   fill(255, 255, 255);
   rect(height/2+5*bar_spacing-325, bar_pos_x+90, bar_height, 60);
   fill(0);
   text("bass", height/2+5*bar_spacing-325, bar_pos_x+100);

   fill(200, 200, 200);
   rect(height/2+7*bar_spacing-325, bar_pos_x+50, bar_height, 16*other);
   fill(255, 255, 255);
   rect(height/2+7*bar_spacing-325, bar_pos_x+90, bar_height, 60);
   fill(0);
   text("other", height/2+7*bar_spacing-325, bar_pos_x+100);
 
   // display "words"
   fill(0);
   textAlign(CENTER);
   textSize(vocal);
   text(words, width/3, height/4);

  fill(200, 200, 0);
  for (i = 0; i < numberOfBars; i++) {
    rect(barStartingX, barStartingY, barWidth, vocal*10);
    barStartingX = barStartingX + gapBetweenBars;


  }*/
}