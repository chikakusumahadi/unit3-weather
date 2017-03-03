/*  Original Code by Jaap de Maat & Sion Fletcher - CSM GCD BA Y1 Unit 3 - Jan 2017
    edited by Chiquita Kusumahadi - ADD DATA
*/


function setup() {
  //set Canvas to size of window
  createCanvas(windowWidth, windowHeight);

  
  //Introduction Page
    background(255);

  // the weather pie title
    textSize(35);
    textFont("futura");
    textAlign(CENTER, BASELINE);
    fill(80);
    text("The Weather Pie", windowWidth/2, windowHeight /9)
  //how to make title show up after button is pressed?

    
  //create Button object 1 (London)
  button1 = createButton('London');
  button1.position(windowWidth/2, windowHeight/7.5);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22london%2C%20united%20kingdom%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (New York)
  button2 = createButton('New York');
  button2.position(windowWidth/2-200, windowHeight/7.5);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22new%20york%2C%20united%20states%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (Tokyo)
  button3 = createButton('Tokyo');
  button3.position(windowWidth/2+100, windowHeight/7.5);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22tokyo%2C%20japan%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (Paris)
  button4 = createButton('Paris');
  button4.position(windowWidth/2-90, windowHeight/7.5);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22paris%2C%20france%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (Jakarta)
  button5 = createButton('Jakarta');
  button5.position(windowWidth/2+190, windowHeight/7.5);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22jakarta%2C%20indonesia%22)%20and%20u%3D'c'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  var date = data.query.results.channel.item.condition.date;

  
  //condition forecast
  var conCode = data.query.results.channel.item.condition.code; //condition codes
  //print(int(conCode));
  var conText = data.query.results.channel.item.condition.text; //textual description of condition code
  //print(conText);

  //event that occur based on conditioncode.js 
  //DOESNT WORK--WHY?
  //var eventStorm = (conCode == storm);
  //var eventShower = (conCode == shower);
  //var eventSnow = (conCode == snow);
  //var eventCloudy = (conCode == cloudy);
  //var eventSunny = (conCode == sunny);
  //var eventWindy = (conCode == windy);
  //var eventFog = (conCode == fog);
  //var eventNA = (conCode == nA); //when data not available
  
  //astronomy
  //var sunriseTime = data.query.results.channel.astronomy.sunrise;
  //var sunsetTime = data.query.results.channel.astronomy.sunset;
  
  //forecast data
  //var tempD2H = data.query.results.channel.item.forecast[0].high;
  //var tempD2L = data.query.results.channel.item.forecast[0].low;

 
  background(255);

  //add data info in bottom of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(12);
  textFont("gillsans");
  textAlign(CENTER);
    fill(0);
    text(date, windowWidth / 2, windowHeight - 110);
    
    // Wind speed data 
    fill('rgba(247,217,187,1)')
    text(windSpeed, windowWidth / 2-10, windowHeight - 90);
    fill('rgba(247,217,187,1)')
    text("km/h", windowWidth / 2+20, windowHeight - 90);
    
    //Forecast text
    fill('rgba(35, 19, 119, 0.8)');
    text(conText, windowWidth / 2, windowHeight - 70);
    
    //Temperature data
    var tempCol = map(temp, 0, 35, 220, 0); 
    noStroke();
    fill(tempCol); 
    text(temp, windowWidth / 2-5, windowHeight - 50);
    fill(tempCol);
    text("°C", windowWidth / 2+8, windowHeight - 50);
    
    //Wind direction data
    fill(165, 41, 28);
    text(windDirection, windowWidth / 2-2, windowHeight - 30);
    fill(165, 41, 28);
    text("°", windowWidth / 2+10, windowHeight - 30);
  
  
  //create ellipse and set color of the ellipse to temp data
  //grayscale: whiter= colder temp, darker= hotter temp
  noStroke();
  fill(tempCol); 
  ellipse(windowWidth / 2, windowHeight / 2, 100, 100);
  
  
  //create arc1 and set height and width to windSpeed data
  //translate(windowWidth/2, windowHeight/2);
  fill('rgba(247,217,187,1)');
  noStroke();
  angleMode(DEGREES);
  arc(windowWidth / 2, windowHeight / 2, windSpeed * 10, windSpeed * 10, 90, 270);
  //HOW to set min + max arc size to stop from growing too big?


  //create arc2
  //HOW to place animation loop based on forecast data inside the arc?
  //'IF' STATEMENT w/ CONDITION CODES?
  fill('rgba(0, 8, 86, 0.8)');
  noStroke();
  angleMode(DEGREES);
  arc(windowWidth / 2, windowHeight / 2, 250,  250, 0, 180);

  //create arc3 and set size based on duration of daylight
  //var daylight = map(sunrise, 0, 35, 220, 0);
  //noFill();
  //stroke('rgba(255,255,0, 0.5)');
  //strokeWeight(5);
  //strokeCap (ROUND);
  //angleMode(DEGREES);
  //arc(windowWidth / 2, windowHeight / 2, 200,  200, 300, 50);
  
  //stroke('rgba(0, 8, 86, 0.8)');
  //strokeWeight(10);
  //strokeCap (SQUARE)
  
  //create rectangle and set rotation of rect to windDirection
  translate(windowWidth / 2, windowHeight / 2);
  fill(165, 41, 28);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  rect(0, 0, 150, 6);
  

}
