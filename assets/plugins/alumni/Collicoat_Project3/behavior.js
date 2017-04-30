//      Data Elements



var years = [2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015];

var shortYears = ["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15"];

var total2000 = 0;
var total2001 = 0;
var total2002 = 0;
var total2003 = 0;
var total2004 = 0;
var total2005 = 0;
var total2006 = 0;
var total2007 = 0;
var total2008 = 0;
var total2009 = 0;
var total2010 = 0;
var total2011 = 0;
var total2012 = 0;
var total2013 = 0;
var total2014 = 0;
var total2015 = 0;

var totalMale2000 = 0;
var totalFemale2000 = 0;
var totalMale2001 = 0;
var totalFemale2001 = 0;
var totalMale2002 = 0;
var totalFemale2002 = 0;
var totalMale2003 = 0;
var totalFemale2003 = 0;
var totalMale2004 = 0;
var totalFemale2004 = 0;
var totalMale2005 = 0;
var totalFemale2005 = 0;
var totalMale2006 = 0;
var totalFemale2006 = 0;
var totalMale2007 = 0;
var totalFemale2007 = 0;
var totalMale2008 = 0;
var totalFemale2008 = 0;
var totalMale2009 = 0;
var totalFemale2009 = 0;
var totalMale2010 = 0;
var totalFemale2010 = 0;
var totalMale2011 = 0;
var totalFemale2011 = 0;
var totalMale2012 = 0;
var totalFemale2012 = 0;
var totalMale2013 = 0;
var totalFemale2013 = 0;
var totalMale2014 = 0;
var totalFemale2014 = 0;
var totalMale2015 = 0;
var totalFemale2015 = 0;

var genderBarsMale;
var genderBarsFemale;

var totalPrint2000 = 0;
var totalScreen2000 = 0;
var totalTangible2000 = 0;
var totalPhoto2000 = 0;
var totalPrint2001 = 0;
var totalScreen2001 = 0;
var totalTangible2001 = 0;
var totalPhoto2001 = 0;
var totalPrint2002 = 0;
var totalScreen2002 = 0;
var totalTangible2002 = 0;
var totalPhoto2002 = 0;
var totalPrint2003 = 0;
var totalScreen2003 = 0;
var totalTangible2003 = 0;
var totalPhoto2003 = 0;
var totalPrint2004 = 0;
var totalScreen2004 = 0;
var totalTangible2004 = 0;
var totalPhoto2004 = 0;
var totalPrint2005 = 0;
var totalScreen2005 = 0;
var totalTangible2005 = 0;
var totalPhoto2005 = 0;
var totalPrint2006 = 0;
var totalScreen2006 = 0;
var totalTangible2006 = 0;
var totalPhoto2006 = 0;
var totalPrint2007 = 0;
var totalScreen2007 = 0;
var totalTangible2007 = 0;
var totalPhoto2007 = 0;
var totalPrint2008 = 0;
var totalScreen2008 = 0;
var totalTangible2008 = 0;
var totalPhoto2008 = 0;
var totalPrint2009 = 0;
var totalScreen2009 = 0;
var totalTangible2009 = 0;
var totalPhoto2009 = 0;
var totalPrint2010 = 0;
var totalScreen2010 = 0;
var totalTangible2010 = 0;
var totalPhoto2010 = 0;
var totalPrint2011 = 0;
var totalScreen2011 = 0;
var totalTangible2011 = 0;
var totalPhoto2011 = 0;
var totalPrint2012 = 0;
var totalScreen2012 = 0;
var totalTangible2012 = 0;
var totalPhoto2012 = 0;
var totalPrint2013 = 0;
var totalScreen2013 = 0;
var totalTangible2013 = 0;
var totalPhoto2013 = 0;
var totalPrint2014 = 0;
var totalScreen2014 = 0;
var totalTangible2014 = 0;
var totalPhoto2014 = 0;
var totalPrint2015 = 0;
var totalScreen2015 = 0;
var totalTangible2015 = 0;
var totalPhoto2015 = 0;

var disciplineBarsPrint;
var disciplineBarsScreen;
var disciplineBarsTangible;
var disciplineBarsPhoto;

var states = ["AZ","CA","CO","FL","HI","ID","IL","MA","NV","NY","OR","TX","VA","WA","INT"];

var stateList2000 = [];
var stateList2001 = [];
var stateList2002 = [];
var stateList2003 = [];
var stateList2004 = [];
var stateList2005 = [];
var stateList2006 = [];
var stateList2007 = [];
var stateList2008 = [];
var stateList2009 = [];
var stateList2010 = [];
var stateList2011 = [];
var stateList2012 = [];
var stateList2013 = [];
var stateList2014 = [];
var stateList2015 = [];

var stateNumbers2000 = [];
var stateNumbers2001 = [];
var stateNumbers2002 = [];
var stateNumbers2003 = [];
var stateNumbers2004 = [];
var stateNumbers2005 = [];
var stateNumbers2006 = [];
var stateNumbers2007 = [];
var stateNumbers2008 = [];
var stateNumbers2009 = [];
var stateNumbers2010 = [];
var stateNumbers2011 = [];
var stateNumbers2012 = [];
var stateNumbers2013 = [];
var stateNumbers2014 = [];
var stateNumbers2015 = [];

var stateValues2000 = [];
var stateValues2001 = [];
var stateValues2002 = [];
var stateValues2003 = [];
var stateValues2004 = [];
var stateValues2005 = [];
var stateValues2006 = [];
var stateValues2007 = [];
var stateValues2008 = [];
var stateValues2009 = [];
var stateValues2010 = [];
var stateValues2011 = [];
var stateValues2012 = [];
var stateValues2013 = [];
var stateValues2014 = [];
var stateValues2015 = [];

var stateLabels2000 = [];
var stateLabels2001 = [];
var stateLabels2002 = [];
var stateLabels2003 = [];
var stateLabels2004 = [];
var stateLabels2005 = [];
var stateLabels2006 = [];
var stateLabels2007 = [];
var stateLabels2008 = [];
var stateLabels2009 = [];
var stateLabels2010 = [];
var stateLabels2011 = [];
var stateLabels2012 = [];
var stateLabels2013 = [];
var stateLabels2014 = [];
var stateLabels2015 = [];

var stateValuesSmall2000 = [];
var stateValuesSmall2001 = [];
var stateValuesSmall2002 = [];
var stateValuesSmall2003 = [];
var stateValuesSmall2004 = [];
var stateValuesSmall2005 = [];
var stateValuesSmall2006 = [];
var stateValuesSmall2007 = [];
var stateValuesSmall2008 = [];
var stateValuesSmall2009 = [];
var stateValuesSmall2010 = [];
var stateValuesSmall2011 = [];
var stateValuesSmall2012 = [];
var stateValuesSmall2013 = [];
var stateValuesSmall2014 = [];
var stateValuesSmall2015 = [];

var graphh = 100;



//      Dynamic Elements



function calcGenders() {
    for(var year = 0; year < alumni.length; year++) {
        if(alumni[year][12] == 2000 && alumni[year][2] == "M") {totalMale2000++;}
        if(alumni[year][12] == 2000 && alumni[year][2] == "F") {totalFemale2000++;}
        if(alumni[year][12] == 2001 && alumni[year][2] == "M") {totalMale2001++;}
        if(alumni[year][12] == 2001 && alumni[year][2] == "F") {totalFemale2001++;}
        if(alumni[year][12] == 2002 && alumni[year][2] == "M") {totalMale2002++;}
        if(alumni[year][12] == 2002 && alumni[year][2] == "F") {totalFemale2002++;}
        if(alumni[year][12] == 2003 && alumni[year][2] == "M") {totalMale2003++;}
        if(alumni[year][12] == 2003 && alumni[year][2] == "F") {totalFemale2003++;}
        if(alumni[year][12] == 2004 && alumni[year][2] == "M") {totalMale2004++;}
        if(alumni[year][12] == 2004 && alumni[year][2] == "F") {totalFemale2004++;}
        if(alumni[year][12] == 2005 && alumni[year][2] == "M") {totalMale2005++;}
        if(alumni[year][12] == 2005 && alumni[year][2] == "F") {totalFemale2005++;}
        if(alumni[year][12] == 2006 && alumni[year][2] == "M") {totalMale2006++;}
        if(alumni[year][12] == 2006 && alumni[year][2] == "F") {totalFemale2006++;}
        if(alumni[year][12] == 2007 && alumni[year][2] == "M") {totalMale2007++;}
        if(alumni[year][12] == 2007 && alumni[year][2] == "F") {totalFemale2007++;}
        if(alumni[year][12] == 2008 && alumni[year][2] == "M") {totalMale2008++;}
        if(alumni[year][12] == 2008 && alumni[year][2] == "F") {totalFemale2008++;}
        if(alumni[year][12] == 2009 && alumni[year][2] == "M") {totalMale2009++;}
        if(alumni[year][12] == 2009 && alumni[year][2] == "F") {totalFemale2009++;}
        if(alumni[year][12] == 2010 && alumni[year][2] == "M") {totalMale2010++;}
        if(alumni[year][12] == 2010 && alumni[year][2] == "F") {totalFemale2010++;}
        if(alumni[year][12] == 2011 && alumni[year][2] == "M") {totalMale2011++;}
        if(alumni[year][12] == 2011 && alumni[year][2] == "F") {totalFemale2011++;}
        if(alumni[year][12] == 2012 && alumni[year][2] == "M") {totalMale2012++;}
        if(alumni[year][12] == 2012 && alumni[year][2] == "F") {totalFemale2012++;}
        if(alumni[year][12] == 2013 && alumni[year][2] == "M") {totalMale2013++;}
        if(alumni[year][12] == 2013 && alumni[year][2] == "F") {totalFemale2013++;}
        if(alumni[year][12] == 2014 && alumni[year][2] == "M") {totalMale2014++;}
        if(alumni[year][12] == 2014 && alumni[year][2] == "F") {totalFemale2014++;}
        if(alumni[year][12] == 2015 && alumni[year][2] == "M") {totalMale2015++;}
        if(alumni[year][12] == 2015 && alumni[year][2] == "F") {totalFemale2015++;}
    }
    genderBarsMale = [totalMale2000, totalMale2001, totalMale2002, totalMale2003, totalMale2004, totalMale2005, totalMale2006, totalMale2007, totalMale2008, totalMale2009, totalMale2010, totalMale2011, totalMale2012, totalMale2013, totalMale2014, totalMale2015];
    genderBarsFemale = [totalFemale2000, totalFemale2001, totalFemale2002, totalFemale2003, totalFemale2004, totalFemale2005, totalFemale2006, totalFemale2007, totalFemale2008, totalFemale2009, totalFemale2010, totalFemale2011, totalFemale2012, totalFemale2013, totalFemale2014, totalFemale2015];
    drawGenderGraph();
}

function drawGenderGraph() {
    
    //      Gender Key
    
    d3.select("#svg")
        .append("rect")
        .attr("class","genderkey")
        .attr("width","30px")
        .attr("height","30px")
        .attr("x","40%")
        .attr("y","180px")
        .style("fill","#00a4e0")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.selectAll(".malebars")
            .style("fill","#00a4e0")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".malelabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".malevalues")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.selectAll(".malebars")
            .style("fill","#cccccc")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".malelabels")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".malevalues")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    d3.select("#svg")
        .append("text")
        .text("M")
        .attr("class","genderkey")
        .attr("x","40%")
        .attr("y","195px")
        .attr("text-anchor","middle")
        .style("transform","translate(15px,5px)")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
    d3.select("svg")
        .append("text")
        .text("= Male")
        .attr("class","genderkey")
        .attr("x","40%")
        .attr("y","195px")
        .attr("text-anchor","left")
        .style("transform","translate(35px,5px)")
        .style("fill","#000000")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
    
    d3.select("#svg")
        .append("rect")
        .attr("class","genderkey")
        .attr("width","30px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","180px")
        .style("fill","#ff00c4")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.selectAll(".femalebars")
            .style("fill","#ff00c4")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".femalelabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".femalevalues")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.selectAll(".femalebars")
            .style("fill","#cccccc")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".femalelabels")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".femalevalues")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    d3.select("#svg")
        .append("text")
        .text("F")
        .attr("class","genderkey")
        .attr("x","50%")
        .attr("y","195px")
        .attr("text-anchor","middle")
        .style("transform","translate(15px,5px)")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
    d3.select("svg")
        .append("text")
        .text("= Female")
        .attr("class","genderkey")
        .attr("x","50%")
        .attr("y","195px")
        .attr("text-anchor","left")
        .style("transform","translate(35px,5px)")
        .style("fill","#000000")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
    
    //      Gender Container
    
    var genderGraph = d3.select("#svg")
        .append("svg:g")
        .attr("class","gendergraph")
    
    //      Male Bars
    
    genderGraph.selectAll("bars")
        .data(genderBarsMale)
        .enter()
        .append("rect")
        .attr("class","malebars")
        .attr("id",function(d,i) {
            return ("malebar" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d * 10 + 480);
        })
        .attr("width","3%")
        .attr("height",function(d,i) {
            return (d * 10); 
        })
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#00a4e0")
            .style("transition","fill 0.1s ease")
            d3.select("#malelabel" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#malevalue" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            d3.selectAll("#malelabel" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#malevalue" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    genderGraph.selectAll("malelabels")
        .data(genderBarsMale)
        .enter()
        .append("text")
        .text(function(d,i) {
            if (d < 2) {return null}
            else {return "M"}
        })
        .attr("class","genderlabels1 malelabels")
        .attr("id",function(d,i) {
            return ("malelabel" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487);
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
    
    genderGraph.selectAll("malevalues")
        .data(genderBarsMale)
        .enter()
        .append("text")
        .text(function(d,i) {
            return (d);
        })
        .attr("class","genderlabels2 malevalues")
        .attr("id",function(d,i) {
            return ("malevalue" + i);
        })
        .attr("x",function(d,i) {
            if (d > 1) {return (3.125 + i * 6.25 + "%")}
            else {return (5.5 + i * 6.25 + "%")};
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487);
        })
        .attr("text-anchor","middle")
        .style("fill",function(d,i) {
            if (d < 2) {return "#000000"}
            else {return "#f3f3f3"}
        })
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    //      Female Bars
    
    genderGraph.selectAll("bars")
        .data(genderBarsFemale)
        .enter()
        .append("rect")
        .attr("class","femalebars")
        .attr("id",function(d,i) {
            return ("femalebar" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d * 10 + 480 - genderBarsMale[i] * 10);
        })
        .attr("width","3%")
        .attr("height",function(d,i) {
            return (d * 10); 
        })
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#ff00c4")
            .style("transition","fill 0.1s ease")
            d3.select("#femalelabel" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#femalevalue" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            d3.select("#femalelabel" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll("#femalevalue" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    genderGraph.selectAll("femalelabels")
        .data(genderBarsFemale)
        .enter()
        .append("text")
        .text(function(d,i) {
            if (d < 2) {return null}
            else {return "F"}
        })
        .attr("class","genderlabels1 femalelabels")
        .attr("id",function(d,i) {
            return ("femalelabel" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487 - genderBarsMale[i] * 10);
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
    
    genderGraph.selectAll("femalevalues")
        .data(genderBarsFemale)
        .enter()
        .append("text")
        .text(function(d,i) {
            return (d);
        })
        .attr("class","genderlabels2 femalevalues")
        .attr("id",function(d,i) {
            return ("femalevalue" + i);
        })
        .attr("x",function(d,i) {
            if (d > 1) {return (3.125 + i * 6.25 + "%")}
            else {return (5.5 + i * 6.25 + "%")};
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487 - genderBarsMale[i] * 10);
        })
        .attr("text-anchor","middle")
        .style("fill",function(d,i) {
            if (d < 2) {return "#000000"}
            else {return "#f3f3f3"}
        })
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
}

function calcDisciplines() {
    for(var year = 0; year < alumni.length; year++) {
        if(alumni[year][12] == 2000 && alumni[year][3] == "Print") {totalPrint2000++;}
        if(alumni[year][12] == 2000 && alumni[year][3] == "Screen") {totalScreen2000++;}
        if(alumni[year][12] == 2000 && alumni[year][3] == "Tangible") {totalTangible2000++;}
        if(alumni[year][12] == 2000 && alumni[year][3] == "Photography") {totalPhoto2000++;}
        if(alumni[year][12] == 2001 && alumni[year][3] == "Print") {totalPrint2001++;}
        if(alumni[year][12] == 2001 && alumni[year][3] == "Screen") {totalScreen2001++;}
        if(alumni[year][12] == 2001 && alumni[year][3] == "Tangible") {totalTangible2001++;}
        if(alumni[year][12] == 2001 && alumni[year][3] == "Photography") {totalPhoto2001++;}
        if(alumni[year][12] == 2002 && alumni[year][3] == "Print") {totalPrint2002++;}
        if(alumni[year][12] == 2002 && alumni[year][3] == "Screen") {totalScreen2002++;}
        if(alumni[year][12] == 2002 && alumni[year][3] == "Tangible") {totalTangible2002++;}
        if(alumni[year][12] == 2002 && alumni[year][3] == "Photography") {totalPhoto2002++;}
        if(alumni[year][12] == 2003 && alumni[year][3] == "Print") {totalPrint2003++;}
        if(alumni[year][12] == 2003 && alumni[year][3] == "Screen") {totalScreen2003++;}
        if(alumni[year][12] == 2003 && alumni[year][3] == "Tangible") {totalTangible2003++;}
        if(alumni[year][12] == 2003 && alumni[year][3] == "Photography") {totalPhoto2003++;}
        if(alumni[year][12] == 2004 && alumni[year][3] == "Print") {totalPrint2004++;}
        if(alumni[year][12] == 2004 && alumni[year][3] == "Screen") {totalScreen2004++;}
        if(alumni[year][12] == 2004 && alumni[year][3] == "Tangible") {totalTangible2004++;}
        if(alumni[year][12] == 2004 && alumni[year][3] == "Photography") {totalPhoto2004++;}
        if(alumni[year][12] == 2005 && alumni[year][3] == "Print") {totalPrint2005++;}
        if(alumni[year][12] == 2005 && alumni[year][3] == "Screen") {totalScreen2005++;}
        if(alumni[year][12] == 2005 && alumni[year][3] == "Tangible") {totalTangible2005++;}
        if(alumni[year][12] == 2005 && alumni[year][3] == "Photography") {totalPhoto2005++;}
        if(alumni[year][12] == 2006 && alumni[year][3] == "Print") {totalPrint2006++;}
        if(alumni[year][12] == 2006 && alumni[year][3] == "Screen") {totalScreen2006++;}
        if(alumni[year][12] == 2006 && alumni[year][3] == "Tangible") {totalTangible2006++;}
        if(alumni[year][12] == 2006 && alumni[year][3] == "Photography") {totalPhoto2006++;}
        if(alumni[year][12] == 2007 && alumni[year][3] == "Print") {totalPrint2007++;}
        if(alumni[year][12] == 2007 && alumni[year][3] == "Screen") {totalScreen2007++;}
        if(alumni[year][12] == 2007 && alumni[year][3] == "Tangible") {totalTangible2007++;}
        if(alumni[year][12] == 2007 && alumni[year][3] == "Photography") {totalPhoto2007++;}
        if(alumni[year][12] == 2008 && alumni[year][3] == "Print") {totalPrint2008++;}
        if(alumni[year][12] == 2008 && alumni[year][3] == "Screen") {totalScreen2008++;}
        if(alumni[year][12] == 2008 && alumni[year][3] == "Tangible") {totalTangible2008++;}
        if(alumni[year][12] == 2008 && alumni[year][3] == "Photography") {totalPhoto2008++;}
        if(alumni[year][12] == 2009 && alumni[year][3] == "Print") {totalPrint2009++;}
        if(alumni[year][12] == 2009 && alumni[year][3] == "Screen") {totalScreen2009++;}
        if(alumni[year][12] == 2009 && alumni[year][3] == "Tangible") {totalTangible2009++;}
        if(alumni[year][12] == 2009 && alumni[year][3] == "Photography") {totalPhoto2009++;}
        if(alumni[year][12] == 2010 && alumni[year][3] == "Print") {totalPrint2010++;}
        if(alumni[year][12] == 2010 && alumni[year][3] == "Screen") {totalScreen2010++;}
        if(alumni[year][12] == 2010 && alumni[year][3] == "Tangible") {totalTangible2010++;}
        if(alumni[year][12] == 2010 && alumni[year][3] == "Photography") {totalPhoto2010++;}
        if(alumni[year][12] == 2011 && alumni[year][3] == "Print") {totalPrint2011++;}
        if(alumni[year][12] == 2011 && alumni[year][3] == "Screen") {totalScreen2011++;}
        if(alumni[year][12] == 2011 && alumni[year][3] == "Tangible") {totalTangible2011++;}
        if(alumni[year][12] == 2011 && alumni[year][3] == "Photography") {totalPhoto2011++;}
        if(alumni[year][12] == 2012 && alumni[year][3] == "Print") {totalPrint2012++;}
        if(alumni[year][12] == 2012 && alumni[year][3] == "Screen") {totalScreen2012++;}
        if(alumni[year][12] == 2012 && alumni[year][3] == "Tangible") {totalTangible2012++;}
        if(alumni[year][12] == 2012 && alumni[year][3] == "Photography") {totalPhoto2012++;}
        if(alumni[year][12] == 2013 && alumni[year][3] == "Print") {totalPrint2013++;}
        if(alumni[year][12] == 2013 && alumni[year][3] == "Screen") {totalScreen2013++;}
        if(alumni[year][12] == 2013 && alumni[year][3] == "Tangible") {totalTangible2013++;}
        if(alumni[year][12] == 2013 && alumni[year][3] == "Photography") {totalPhoto2013++;}
        if(alumni[year][12] == 2014 && alumni[year][3] == "Print") {totalPrint2014++;}
        if(alumni[year][12] == 2014 && alumni[year][3] == "Screen") {totalScreen2014++;}
        if(alumni[year][12] == 2014 && alumni[year][3] == "Tangible") {totalTangible2014++;}
        if(alumni[year][12] == 2014 && alumni[year][3] == "Photography") {totalPhoto2014++;}
        if(alumni[year][12] == 2015 && alumni[year][3] == "Print") {totalPrint2015++;}
        if(alumni[year][12] == 2015 && alumni[year][3] == "Screen") {totalScreen2015++;}
        if(alumni[year][12] == 2015 && alumni[year][3] == "Tangible") {totalTangible2015++;}
        if(alumni[year][12] == 2015 && alumni[year][3] == "Photography") {totalPhoto2015++;}
    }
    disciplineBarsPrint = [totalPrint2000, totalPrint2001, totalPrint2002, totalPrint2003, totalPrint2004, totalPrint2005, totalPrint2006, totalPrint2007, totalPrint2008, totalPrint2009, totalPrint2010, totalPrint2011, totalPrint2012, totalPrint2013, totalPrint2014, totalPrint2015]
    disciplineBarsScreen = [totalScreen2000, totalScreen2001, totalScreen2002, totalScreen2003, totalScreen2004, totalScreen2005, totalScreen2006, totalScreen2007, totalScreen2008, totalScreen2009, totalScreen2010, totalScreen2011, totalScreen2012, totalScreen2013, totalScreen2014, totalScreen2015]
    disciplineBarsTangible = [totalTangible2000, totalTangible2001, totalTangible2002, totalTangible2003, totalTangible2004, totalTangible2005, totalTangible2006, totalTangible2007, totalTangible2008, totalTangible2009, totalTangible2010, totalTangible2011, totalTangible2012, totalTangible2013, totalTangible2014, totalTangible2015]
    disciplineBarsPhoto = [totalPhoto2000, totalPhoto2001, totalPhoto2002, totalPhoto2003, totalPhoto2004, totalPhoto2005, totalPhoto2006, totalPhoto2007, totalPhoto2008, totalPhoto2009, totalPhoto2010, totalPhoto2011, totalPhoto2012, totalPhoto2013, totalPhoto2014, totalPhoto2015]
    drawDisciplineGraph();
}

function drawDisciplineGraph() {
    
    //      Discipline Key
    
    d3.select("#svg")
        .append("rect")
        .attr("class","disciplinekey")
        .attr("width","30px")
        .attr("height","30px")
        .attr("x","30%")
        .attr("y","180px")
        .style("fill","#d47200")
        .style("opacity","0.0")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.selectAll(".printbars")
            .style("fill","#d47200")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".printlabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".printvalues")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.selectAll(".printbars")
            .style("fill","#cccccc")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".printlabels")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".printvalues")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    d3.select("#svg")
        .append("text")
        .text("Pr")
        .attr("class","disciplinekey")
        .attr("x","30%")
        .attr("y","195px")
        .attr("text-anchor","middle")
        .style("transform","translate(15px,5px)")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    d3.select("svg")
        .append("text")
        .text("= Print")
        .attr("class","disciplinekey")
        .attr("x","30%")
        .attr("y","195px")
        .attr("text-anchor","left")
        .style("transform","translate(35px,5px)")
        .style("fill","#000000")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    d3.select("#svg")
        .append("rect")
        .attr("class","disciplinekey")
        .attr("width","30px")
        .attr("height","30px")
        .attr("x","40%")
        .attr("y","180px")
        .style("fill","#5f00e0")
        .style("opacity","0.0")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.selectAll(".screenbars")
            .style("fill","#5f00e0")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".screenlabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".screenvalues")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.selectAll(".screenbars")
            .style("fill","#cccccc")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".screenlabels")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".screenvalues")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    d3.select("#svg")
        .append("text")
        .text("Sc")
        .attr("class","disciplinekey")
        .attr("x","40%")
        .attr("y","195px")
        .attr("text-anchor","middle")
        .style("transform","translate(15px,5px)")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    d3.select("svg")
        .append("text")
        .text("= Screen")
        .attr("class","disciplinekey")
        .attr("x","40%")
        .attr("y","195px")
        .attr("text-anchor","left")
        .style("transform","translate(35px,5px)")
        .style("fill","#000000")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    d3.select("#svg")
        .append("rect")
        .attr("class","disciplinekey")
        .attr("width","30px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","180px")
        .style("fill","#3ec900")
        .style("opacity","0.0")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.selectAll(".tangiblebars")
            .style("fill","#3ec900")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".tangiblelabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".tangiblevalues")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.selectAll(".tangiblebars")
            .style("fill","#cccccc")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".tangiblelabels")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".tangiblevalues")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    d3.select("#svg")
        .append("text")
        .text("Ta")
        .attr("class","disciplinekey")
        .attr("x","50%")
        .attr("y","195px")
        .attr("text-anchor","middle")
        .style("transform","translate(15px,5px)")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    d3.select("svg")
        .append("text")
        .text("= Tangible")
        .attr("class","disciplinekey")
        .attr("x","50%")
        .attr("y","195px")
        .attr("text-anchor","left")
        .style("transform","translate(35px,5px)")
        .style("fill","#000000")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    d3.select("#svg")
        .append("rect")
        .attr("class","disciplinekey")
        .attr("width","30px")
        .attr("height","30px")
        .attr("x","60%")
        .attr("y","180px")
        .style("fill","#d00000")
        .style("opacity","0.0")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.selectAll(".photobars")
            .style("fill","#d00000")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".photolabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".photovalues")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.selectAll(".photobars")
            .style("fill","#cccccc")
            .style("transition","fill 0.3s ease")
            d3.selectAll(".photolabels")
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".photovalues")
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    d3.select("#svg")
        .append("text")
        .text("Ph")
        .attr("class","disciplinekey")
        .attr("x","60%")
        .attr("y","195px")
        .attr("text-anchor","middle")
        .style("transform","translate(15px,5px)")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    d3.select("svg")
        .append("text")
        .text("= Photography")
        .attr("class","disciplinekey")
        .attr("x","60%")
        .attr("y","195px")
        .attr("text-anchor","left")
        .style("transform","translate(35px,5px)")
        .style("fill","#000000")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    //      disciplineGraph Container
    
    var disciplineGraph = d3.select("#svg")
        .append("svg:g")
        .attr("class","disciplinegraph")
    
    //      Print Bars
    
    disciplineGraph.selectAll("bars")
        .data(disciplineBarsPrint)
        .enter()
        .append("rect")
        .attr("class","printbars")
        .attr("id",function(d,i) {
            return ("printbar" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + i * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#d47200")
            .style("transition","fill 0.1s ease")
            d3.select("#printlabel" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#printvalue" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            d3.select("#printlabel" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll("#printvalue" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    disciplineGraph.selectAll("printlabels")
        .data(disciplineBarsPrint)
        .enter()
        .append("text")
        .text(function(d,i) {
            if (d < 2) {return null}
            else {return "Pr"};
        })
        .attr("class","disciplinelabels1 printlabels")
        .attr("id",function(d,i) {
            return ("printlabel" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487);
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    disciplineGraph.selectAll("printvalues")
        .data(disciplineBarsPrint)
        .enter()
        .append("text")
        .text(function(d,i) {
            return (d);
        })
        .attr("class","disciplinelabels2 printvalues")
        .attr("id",function(d,i) {
            return ("printvalue" + i);
        })
        .attr("x",function(d,i) {
            if (d > 1) {return (3.125 + i * 6.25 + "%")}
            else {return (5.5 + i * 6.25 + "%")};
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487);
        })
        .attr("text-anchor","middle")
        .style("fill",function(d) {
            if (d < 2) {return ("#000000")}
            else {return ("#f3f3f3")}
        })
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    //      Screen Bars
    
    disciplineGraph.selectAll("bars")
        .data(disciplineBarsScreen)
        .enter()
        .append("rect")
        .attr("class","screenbars")
        .attr("id",function(d,i) {
            return ("screenbar" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + i * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#5f00e0")
            .style("transition","fill 0.1s ease")
            d3.select("#screenlabel" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#screenvalue" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            d3.select("#screenlabel" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll("#screenvalue" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    disciplineGraph.selectAll("screenlabels")
        .data(disciplineBarsScreen)
        .enter()
        .append("text")
        .text(function(d,i) {
            if (d < 2) {return null}
            else {return "Sc"}
        })
        .attr("class","disciplinelabels1 screenlabels")
        .attr("id",function(d,i) {
            return ("screenlabel" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487 - disciplineBarsPrint[i] * 10);
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    disciplineGraph.selectAll("screenvalues")
        .data(disciplineBarsScreen)
        .enter()
        .append("text")
        .text(function(d,i) {
            return (d);
        })
        .attr("class","disciplinelabels2 screenvalues")
        .attr("id",function(d,i) {
            return ("screenvalue" + i);
        })
        .attr("x",function(d,i) {
            if (d > 1) {return (3.125 + i * 6.25 + "%")}
            else {return (5.5 + i * 6.25 + "%")};
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487 - disciplineBarsPrint[i] * 10);
        })
        .attr("text-anchor","middle")
        .style("fill",function(d) {
            if (d < 2) {return ("#000000")}
            else {return ("#f3f3f3")}
        })
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    //      Tangible Bars
    
    disciplineGraph.selectAll("bars")
        .data(disciplineBarsTangible)
        .enter()
        .append("rect")
        .attr("class","tangiblebars")
        .attr("id",function(d,i) {
            return ("tangiblebar" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + i * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#3ec900")
            .style("transition","fill 0.1s ease")
            d3.select("#tangiblelabel" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#tangiblevalue" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            d3.select("#tangiblelabel" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll("#tangiblevalue" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    disciplineGraph.selectAll("tangiblelabels")
        .data(disciplineBarsTangible)
        .enter()
        .append("text")
        .text(function(d,i) {
            if (d < 2) {return null}
            else {return "Ta"}
        })
        .attr("class","disciplinelabels1 tangiblelabels")
        .attr("id",function(d,i) {
            return ("tangiblelabel" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487  - disciplineBarsPrint[i] * 10 - disciplineBarsScreen[i] * 10);
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    disciplineGraph.selectAll("tangiblevalues")
        .data(disciplineBarsTangible)
        .enter()
        .append("text")
        .text(function(d,i) {
            return (d);
        })
        .attr("class","disciplinelabels2 tangiblevalues")
        .attr("id",function(d,i) {
            return ("tangiblevalue" + i);
        })
        .attr("x",function(d,i) {
            if (d > 1) {return (3.125 + i * 6.25 + "%")}
            else {return (5.5 + i * 6.25 + "%")};
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487 - disciplineBarsPrint[i] * 10 - disciplineBarsScreen[i] * 10)
        })
        .attr("text-anchor","middle")
        .style("fill",function(d) {
            if (d < 2) {return ("#000000")}
            else {return ("#f3f3f3")}
        })
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    //      Photography Bars
    
    disciplineGraph.selectAll("bars")
        .data(disciplineBarsPhoto)
        .enter()
        .append("rect")
        .attr("class","photobars")
        .attr("id",function(d,i) {
            return ("photobar" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + i * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#d00000")
            .style("transition","fill 0.1s ease")
            d3.select("#photolabel" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#photovalue" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            d3.select("#photolabel" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll("#photovalue" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    disciplineGraph.selectAll("photolabels")
        .data(disciplineBarsPhoto)
        .enter()
        .append("text")
        .text(function(d,i) {
            if (d < 2) {return null}
            else {return "Ph"}
        })
        .attr("class","disciplinelabels1 photolabels")
        .attr("id",function(d,i) {
            return ("photolabel" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + i * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487  - disciplineBarsPrint[i] * 10 - disciplineBarsScreen[i] * 10 - disciplineBarsTangible[i] * 10);
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
    
    disciplineGraph.selectAll("photovalues")
        .data(disciplineBarsPhoto)
        .enter()
        .append("text")
        .text(function(d,i) {
            return (d);
        })
        .attr("class","disciplinelabels2 photovalues")
        .attr("id",function(d,i) {
            return ("photovalue" + i);
        })
        .attr("x",function(d,i) {
            if (d > 1) {return (3.125 + i * 6.25 + "%")}
            else {return (5.5 + i * 6.25 + "%")};
        })
        .attr("y",function(d,i) {
            return (graphh - d / 2 * 10 + 487 - disciplineBarsPrint[i] * 10 - disciplineBarsScreen[i] * 10 - disciplineBarsTangible[i] * 10)
        })
        .attr("text-anchor","middle")
        .style("fill",function(d,i) {
            if (d < 2) {return ("#000000")}
            else {return ("#f3f3f3")}
        })
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("opacity","0.0")
        .style("pointer-events","none")
}

function calcStates() {
    for(var year = 0; year < alumni.length; year++) {
        if(alumni[year][12] == 2000) {stateList2000.push(alumni[year][10]);}
        if(alumni[year][12] == 2001) {stateList2001.push(alumni[year][10]);}
        if(alumni[year][12] == 2002) {stateList2002.push(alumni[year][10]);}
        if(alumni[year][12] == 2003) {stateList2003.push(alumni[year][10]);}
        if(alumni[year][12] == 2004) {stateList2004.push(alumni[year][10]);}
        if(alumni[year][12] == 2005) {stateList2005.push(alumni[year][10]);}
        if(alumni[year][12] == 2006) {stateList2006.push(alumni[year][10]);}
        if(alumni[year][12] == 2007) {stateList2007.push(alumni[year][10]);}
        if(alumni[year][12] == 2008) {stateList2008.push(alumni[year][10]);}
        if(alumni[year][12] == 2009) {stateList2009.push(alumni[year][10]);}
        if(alumni[year][12] == 2010) {stateList2010.push(alumni[year][10]);}
        if(alumni[year][12] == 2011) {stateList2011.push(alumni[year][10]);}
        if(alumni[year][12] == 2012) {stateList2012.push(alumni[year][10]);}
        if(alumni[year][12] == 2013) {stateList2013.push(alumni[year][10]);}
        if(alumni[year][12] == 2014) {stateList2014.push(alumni[year][10]);}
        if(alumni[year][12] == 2015) {stateList2015.push(alumni[year][10]);}
    }
    
    for(var i = 0; i < stateList2000.length; i++) {
        if(!stateNumbers2000[stateList2000[i]])
            stateNumbers2000[stateList2000[i]] = 0;
        stateNumbers2000[stateList2000[i]]++;
    }
    for(var i = 0; i < stateList2001.length; i++) {
        if(!stateNumbers2001[stateList2001[i]])
            stateNumbers2001[stateList2001[i]] = 0;
        stateNumbers2001[stateList2001[i]]++;
    }
    for(var i = 0; i < stateList2002.length; i++) {
        if(!stateNumbers2002[stateList2002[i]])
            stateNumbers2002[stateList2002[i]] = 0;
        stateNumbers2002[stateList2002[i]]++;
    }
    for(var i = 0; i < stateList2003.length; i++) {
        if(!stateNumbers2003[stateList2003[i]])
            stateNumbers2003[stateList2003[i]] = 0;
        stateNumbers2003[stateList2003[i]]++;
    }
    for(var i = 0; i < stateList2004.length; i++) {
        if(!stateNumbers2004[stateList2004[i]])
            stateNumbers2004[stateList2004[i]] = 0;
        stateNumbers2004[stateList2004[i]]++;
    }
    for(var i = 0; i < stateList2005.length; i++) {
        if(!stateNumbers2005[stateList2005[i]])
            stateNumbers2005[stateList2005[i]] = 0;
        stateNumbers2005[stateList2005[i]]++;
    }
    for(var i = 0; i < stateList2006.length; i++) {
        if(!stateNumbers2006[stateList2006[i]])
            stateNumbers2006[stateList2006[i]] = 0;
        stateNumbers2006[stateList2006[i]]++;
    }
    for(var i = 0; i < stateList2007.length; i++) {
        if(!stateNumbers2007[stateList2007[i]])
            stateNumbers2007[stateList2007[i]] = 0;
        stateNumbers2007[stateList2007[i]]++;
    }
    for(var i = 0; i < stateList2008.length; i++) {
        if(!stateNumbers2008[stateList2008[i]])
            stateNumbers2008[stateList2008[i]] = 0;
        stateNumbers2008[stateList2008[i]]++;
    }
    for(var i = 0; i < stateList2009.length; i++) {
        if(!stateNumbers2009[stateList2009[i]])
            stateNumbers2009[stateList2009[i]] = 0;
        stateNumbers2009[stateList2009[i]]++;
    }
    for(var i = 0; i < stateList2010.length; i++) {
        if(!stateNumbers2010[stateList2010[i]])
            stateNumbers2010[stateList2010[i]] = 0;
        stateNumbers2010[stateList2010[i]]++;
    }
    for(var i = 0; i < stateList2011.length; i++) {
        if(!stateNumbers2011[stateList2011[i]])
            stateNumbers2011[stateList2011[i]] = 0;
        stateNumbers2011[stateList2011[i]]++;
    }
    for(var i = 0; i < stateList2012.length; i++) {
        if(!stateNumbers2012[stateList2012[i]])
            stateNumbers2012[stateList2012[i]] = 0;
        stateNumbers2012[stateList2012[i]]++;
    }
    for(var i = 0; i < stateList2013.length; i++) {
        if(!stateNumbers2013[stateList2013[i]])
            stateNumbers2013[stateList2013[i]] = 0;
        stateNumbers2013[stateList2013[i]]++;
    }
    for(var i = 0; i < stateList2014.length; i++) {
        if(!stateNumbers2014[stateList2014[i]])
            stateNumbers2014[stateList2014[i]] = 0;
        stateNumbers2014[stateList2014[i]]++;
    }
    for(var i = 0; i < stateList2015.length; i++) {
        if(!stateNumbers2015[stateList2015[i]])
            stateNumbers2015[stateList2015[i]] = 0;
        stateNumbers2015[stateList2015[i]]++;
    }
    
    stateValues2000 = Object.keys(stateNumbers2000).map(function (key) {return stateNumbers2000[key]});
    stateValues2001 = Object.keys(stateNumbers2001).map(function (key) {return stateNumbers2001[key]});
    stateValues2002 = Object.keys(stateNumbers2002).map(function (key) {return stateNumbers2002[key]});
    stateValues2003 = Object.keys(stateNumbers2003).map(function (key) {return stateNumbers2003[key]});
    stateValues2004 = Object.keys(stateNumbers2004).map(function (key) {return stateNumbers2004[key]});
    stateValues2005 = Object.keys(stateNumbers2005).map(function (key) {return stateNumbers2005[key]});
    stateValues2006 = Object.keys(stateNumbers2006).map(function (key) {return stateNumbers2006[key]});
    stateValues2007 = Object.keys(stateNumbers2007).map(function (key) {return stateNumbers2007[key]});
    stateValues2008 = Object.keys(stateNumbers2008).map(function (key) {return stateNumbers2008[key]});
    stateValues2009 = Object.keys(stateNumbers2009).map(function (key) {return stateNumbers2009[key]});
    stateValues2010 = Object.keys(stateNumbers2010).map(function (key) {return stateNumbers2010[key]});
    stateValues2011 = Object.keys(stateNumbers2011).map(function (key) {return stateNumbers2011[key]});
    stateValues2012 = Object.keys(stateNumbers2012).map(function (key) {return stateNumbers2012[key]});
    stateValues2013 = Object.keys(stateNumbers2013).map(function (key) {return stateNumbers2013[key]});
    stateValues2014 = Object.keys(stateNumbers2014).map(function (key) {return stateNumbers2014[key]});
    stateValues2015 = Object.keys(stateNumbers2015).map(function (key) {return stateNumbers2015[key]});
    
    for(var key in stateNumbers2000) {stateLabels2000.push(key)};
    for(var key in stateNumbers2001) {stateLabels2001.push(key)};
    for(var key in stateNumbers2002) {stateLabels2002.push(key)};
    for(var key in stateNumbers2003) {stateLabels2003.push(key)};
    for(var key in stateNumbers2004) {stateLabels2004.push(key)};
    for(var key in stateNumbers2005) {stateLabels2005.push(key)};
    for(var key in stateNumbers2006) {stateLabels2006.push(key)};
    for(var key in stateNumbers2007) {stateLabels2007.push(key)};
    for(var key in stateNumbers2008) {stateLabels2008.push(key)};
    for(var key in stateNumbers2009) {stateLabels2009.push(key)};
    for(var key in stateNumbers2010) {stateLabels2010.push(key)};
    for(var key in stateNumbers2011) {stateLabels2011.push(key)};
    for(var key in stateNumbers2012) {stateLabels2012.push(key)};
    for(var key in stateNumbers2013) {stateLabels2013.push(key)};
    for(var key in stateNumbers2014) {stateLabels2014.push(key)};
    for(var key in stateNumbers2015) {stateLabels2015.push(key)};
    
    drawStateGraph();
}

function drawStateGraph() {
    
    //      stateGraph Container
    
    var stateGraph = d3.select("#svg")
        .append("svg:g")
        .attr("class","stategraph")
    
    //      2000 States
    
    stateGraph.selectAll("states2000")
        .data(stateValues2000)
        .enter()
        .append("rect")
        .attr("class","statebars2000")
        .attr("id",function(d,i) {
            return ("statebar2000_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 0 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2000_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2000_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2000_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2000_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2000_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2000_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2000_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2000_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2000labels")
        .data(stateLabels2000)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2000 = stateValues2000[i];
            if(stateValue2000 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2000_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 0 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2000 = stateValues2000[i];
            if(i == 0) {return (graphh - stateValue2000 / 2 * 10 + 480)}
            var prevState2000 = stateValues2000.slice(0, i);
            var barStack2000 = prevState2000.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2000 / 2 * 10 + 480 - barStack2000 * 10 + stateValue2000 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2000values")
        .data(stateValues2000)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2000[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2000_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 0 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2000 = stateValues2000[i];
            if(i == 0) {return (graphh - stateValue2000 / 2 * 10 + 480)}
            var prevState2000 = stateValues2000.slice(0, i);
            var barStack2000 = prevState2000.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2000 / 2 * 10 + 500 - barStack2000 * 10 + stateValue2000 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2000 / 2 * 10 + 480 - barStack2000 * 10 + stateValue2000 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2001 States
    
    stateGraph.selectAll("states2001")
        .data(stateValues2001)
        .enter()
        .append("rect")
        .attr("class","statebars2001")
        .attr("id",function(d,i) {
            return ("statebar2001_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 1 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2001_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2001_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2001_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2001_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2001_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2001_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2001_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2001_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2001labels")
        .data(stateLabels2001)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2001 = stateValues2001[i];
            if(stateValue2001 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2001_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 1 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2001 = stateValues2001[i];
            if(i == 0) {return (graphh - stateValue2001 / 2 * 10 + 480)}
            var prevState2001 = stateValues2001.slice(0, i);
            var barStack2001 = prevState2001.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2001 / 2 * 10 + 480 - barStack2001 * 10 + stateValue2001 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2001values")
        .data(stateValues2001)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2001[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2001_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 1 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2001 = stateValues2001[i];
            if(i == 0) {return (graphh - stateValue2001 / 2 * 10 + 480)}
            var prevState2001 = stateValues2001.slice(0, i);
            var barStack2001 = prevState2001.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2001 / 2 * 10 + 500 - barStack2001 * 10 + stateValue2001 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2001 / 2 * 10 + 480 - barStack2001 * 10 + stateValue2001 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2002 States
    
    stateGraph.selectAll("states2002")
        .data(stateValues2002)
        .enter()
        .append("rect")
        .attr("class","statebars2002")
        .attr("id",function(d,i) {
            return ("statebar2002_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 2 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2002_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2002_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2002_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2002_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2002_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2002_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2002_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2002_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2002labels")
        .data(stateLabels2002)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2002 = stateValues2002[i];
            if(stateValue2002 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2002_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 2 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2002 = stateValues2002[i];
            if(i == 0) {return (graphh - stateValue2002 / 2 * 10 + 480)}
            var prevState2002 = stateValues2002.slice(0, i);
            var barStack2002 = prevState2002.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2002 / 2 * 10 + 480 - barStack2002 * 10 + stateValue2002 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2002values")
        .data(stateValues2002)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2002[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2002_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 2 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2002 = stateValues2002[i];
            if(i == 0) {return (graphh - stateValue2002 / 2 * 10 + 480)}
            var prevState2002 = stateValues2002.slice(0, i);
            var barStack2002 = prevState2002.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2002 / 2 * 10 + 500 - barStack2002 * 10 + stateValue2002 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2002 / 2 * 10 + 480 - barStack2002 * 10 + stateValue2002 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2003 States
    
    stateGraph.selectAll("states2003")
        .data(stateValues2003)
        .enter()
        .append("rect")
        .attr("class","statebars2003")
        .attr("id",function(d,i) {
            return ("statebar2003_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 3 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2003_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2003_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2003_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2003_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2003_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2003_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2003_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2003_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2003labels")
        .data(stateLabels2003)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2003 = stateValues2003[i];
            if(stateValue2003 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2003_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 3 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2003 = stateValues2003[i];
            if(i == 0) {return (graphh - stateValue2003 / 2 * 10 + 480)}
            var prevState2003 = stateValues2003.slice(0, i);
            var barStack2003 = prevState2003.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2003 / 2 * 10 + 480 - barStack2003 * 10 + stateValue2003 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2003values")
        .data(stateValues2003)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2003[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2003_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 3 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2003 = stateValues2003[i];
            if(i == 0) {return (graphh - stateValue2003 / 2 * 10 + 480)}
            var prevState2003 = stateValues2003.slice(0, i);
            var barStack2003 = prevState2003.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2003 / 2 * 10 + 500 - barStack2003 * 10 + stateValue2003 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2003 / 2 * 10 + 480 - barStack2003 * 10 + stateValue2003 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2004 States
    
    stateGraph.selectAll("states2004")
        .data(stateValues2004)
        .enter()
        .append("rect")
        .attr("class","statebars2004")
        .attr("id",function(d,i) {
            return ("statebar2004_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 4 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2004_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2004_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2004_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2004_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2004_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2004_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2004_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2004_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2004labels")
        .data(stateLabels2004)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2004 = stateValues2004[i];
            if(stateValue2004 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2004_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 4 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2004 = stateValues2004[i];
            if(i == 0) {return (graphh - stateValue2004 / 2 * 10 + 480)}
            var prevState2004 = stateValues2004.slice(0, i);
            var barStack2004 = prevState2004.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2004 / 2 * 10 + 480 - barStack2004 * 10 + stateValue2004 / 2 * 4)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2004values")
        .data(stateValues2004)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2004[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2004_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 4 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2004 = stateValues2004[i];
            if(i == 0) {return (graphh - stateValue2004 / 2 * 10 + 480)}
            var prevState2004 = stateValues2004.slice(0, i);
            var barStack2004 = prevState2004.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2004 / 2 * 10 + 500 - barStack2004 * 10 + stateValue2004 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2004 / 2 * 10 + 480 - barStack2004 * 10 + stateValue2004 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2005 States
    
    stateGraph.selectAll("states2005")
        .data(stateValues2005)
        .enter()
        .append("rect")
        .attr("class","statebars2005")
        .attr("id",function(d,i) {
            return ("statebar2005_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 5 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2005_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2005_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2005_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2005_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2005_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2005_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2005_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2005_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2005labels")
        .data(stateLabels2005)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2005 = stateValues2005[i];
            if(stateValue2005 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2005_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 5 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2005 = stateValues2005[i];
            if(i == 0) {return (graphh - stateValue2005 / 2 * 10 + 480)}
            var prevState2005 = stateValues2005.slice(0, i);
            var barStack2005 = prevState2005.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2005 / 2 * 10 + 480 - barStack2005 * 10 + stateValue2005 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2005values")
        .data(stateValues2005)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2005[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2005_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 5 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2005 = stateValues2005[i];
            if(i == 0) {return (graphh - stateValue2005 / 2 * 10 + 480)}
            var prevState2005 = stateValues2005.slice(0, i);
            var barStack2005 = prevState2005.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2005 / 2 * 10 + 500 - barStack2005 * 10 + stateValue2005 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2005 / 2 * 10 + 480 - barStack2005 * 10 + stateValue2005 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2006 States
    
    stateGraph.selectAll("states2006")
        .data(stateValues2006)
        .enter()
        .append("rect")
        .attr("class","statebars2006")
        .attr("id",function(d,i) {
            return ("statebar2006_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 6 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2006_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2006_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2006_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2006_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2006_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2006_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2006_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2006_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2006labels")
        .data(stateLabels2006)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2006 = stateValues2006[i];
            if(stateValue2006 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2006_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 6 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2006 = stateValues2006[i];
            if(i == 0) {return (graphh - stateValue2006 / 2 * 10 + 480)}
            var prevState2006 = stateValues2006.slice(0, i);
            var barStack2006 = prevState2006.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2006 / 2 * 10 + 480 - barStack2006 * 10 + stateValue2006 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2006values")
        .data(stateValues2006)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2006[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2006_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 6 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2006 = stateValues2006[i];
            if(i == 0) {return (graphh - stateValue2006 / 2 * 10 + 480)}
            var prevState2006 = stateValues2006.slice(0, i);
            var barStack2006 = prevState2006.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2006 / 2 * 10 + 500 - barStack2006 * 10 + stateValue2006 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2006 / 2 * 10 + 480 - barStack2006 * 10 + stateValue2006 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2007 States
    
    stateGraph.selectAll("states2007")
        .data(stateValues2007)
        .enter()
        .append("rect")
        .attr("class","statebars2007")
        .attr("id",function(d,i) {
            return ("statebar2007_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 7 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2007_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2007_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2007_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2007_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2007_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2007_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2007_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2007_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2007labels")
        .data(stateLabels2007)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2007 = stateValues2007[i];
            if(stateValue2007 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2007_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 7 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2007 = stateValues2007[i];
            if(i == 0) {return (graphh - stateValue2007 / 2 * 10 + 480)}
            var prevState2007 = stateValues2007.slice(0, i);
            var barStack2007 = prevState2007.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2007 / 2 * 10 + 480 - barStack2007 * 10 + stateValue2007 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2007values")
        .data(stateValues2007)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2007[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2007_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 7 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2007 = stateValues2007[i];
            if(i == 0) {return (graphh - stateValue2007 / 2 * 10 + 480)}
            var prevState2007 = stateValues2007.slice(0, i);
            var barStack2007 = prevState2007.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2007 / 2 * 10 + 500 - barStack2007 * 10 + stateValue2007 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2007 / 2 * 10 + 480 - barStack2007 * 10 + stateValue2007 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2008 States
    
    stateGraph.selectAll("states2008")
        .data(stateValues2008)
        .enter()
        .append("rect")
        .attr("class","statebars2008")
        .attr("id",function(d,i) {
            return ("statebar2008_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 8 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2008_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2008_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2008_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2008_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2008_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2008_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2008_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2008_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2008labels")
        .data(stateLabels2008)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2008 = stateValues2008[i];
            if(stateValue2008 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2008_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 8 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2008 = stateValues2008[i];
            if(i == 0) {return (graphh - stateValue2008 / 2 * 10 + 480)}
            var prevState2008 = stateValues2008.slice(0, i);
            var barStack2008 = prevState2008.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2008 / 2 * 10 + 480 - barStack2008 * 10 + stateValue2008 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2008values")
        .data(stateValues2008)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2008[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2008_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 8 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2008 = stateValues2008[i];
            if(i == 0) {return (graphh - stateValue2008 / 2 * 10 + 480)}
            var prevState2008 = stateValues2008.slice(0, i);
            var barStack2008 = prevState2008.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2008 / 2 * 10 + 500 - barStack2008 * 10 + stateValue2008 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2008 / 2 * 10 + 480 - barStack2008 * 10 + stateValue2008 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2009 States
    
    stateGraph.selectAll("states2009")
        .data(stateValues2009)
        .enter()
        .append("rect")
        .attr("class","statebars2009")
        .attr("id",function(d,i) {
            return ("statebar2009_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 9 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2009_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2009_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2009_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2009_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2009_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2009_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2009_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2009_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2009labels")
        .data(stateLabels2009)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2009 = stateValues2009[i];
            if(stateValue2009 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2009_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 9 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2009 = stateValues2009[i];
            if(i == 0) {return (graphh - stateValue2009 / 2 * 10 + 480)}
            var prevState2009 = stateValues2009.slice(0, i);
            var barStack2009 = prevState2009.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2009 / 2 * 10 + 480 - barStack2009 * 10 + stateValue2009 / 2 * 4)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2009values")
        .data(stateValues2009)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2009[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2009_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 9 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2009 = stateValues2009[i];
            if(i == 0) {return (graphh - stateValue2009 / 2 * 10 + 480)}
            var prevState2009 = stateValues2009.slice(0, i);
            var barStack2009 = prevState2009.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2009 / 2 * 10 + 500 - barStack2009 * 10 + stateValue2009 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2009 / 2 * 10 + 480 - barStack2009 * 10 + stateValue2009 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2010 States
    
    stateGraph.selectAll("states2010")
        .data(stateValues2010)
        .enter()
        .append("rect")
        .attr("class","statebars2010")
        .attr("id",function(d,i) {
            return ("statebar2010_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 10 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2010_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2010_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2010_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2010_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2010_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2010_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2010_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2010_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2010labels")
        .data(stateLabels2010)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2010 = stateValues2010[i];
            if(stateValue2010 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2010_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 10 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2010 = stateValues2010[i];
            if(i == 0) {return (graphh - stateValue2010 / 2 * 10 + 480)}
            var prevState2010 = stateValues2010.slice(0, i);
            var barStack2010 = prevState2010.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2010 / 2 * 10 + 480 - barStack2010 * 10 + stateValue2010 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2010values")
        .data(stateValues2010)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2010[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2010_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 10 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2010 = stateValues2010[i];
            if(i == 0) {return (graphh - stateValue2010 / 2 * 10 + 480)}
            var prevState2010 = stateValues2010.slice(0, i);
            var barStack2010 = prevState2010.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2010 / 2 * 10 + 500 - barStack2010 * 10 + stateValue2010 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2010 / 2 * 10 + 480 - barStack2010 * 10 + stateValue2010 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2011 States
    
    stateGraph.selectAll("states2011")
        .data(stateValues2011)
        .enter()
        .append("rect")
        .attr("class","statebars2011")
        .attr("id",function(d,i) {
            return ("statebar2011_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 11 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2011_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2011_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2011_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2011_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2011_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2011_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2011_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2011_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2011labels")
        .data(stateLabels2011)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2011 = stateValues2011[i];
            if(stateValue2011 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2011_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 11 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2011 = stateValues2011[i];
            if(i == 0) {return (graphh - stateValue2011 / 2 * 10 + 480)}
            var prevState2011 = stateValues2011.slice(0, i);
            var barStack2011 = prevState2011.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2011 / 2 * 10 + 480 - barStack2011 * 10 + stateValue2011 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2011values")
        .data(stateValues2011)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2011[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2011_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 11 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2011 = stateValues2011[i];
            if(i == 0) {return (graphh - stateValue2011 / 2 * 10 + 480)}
            var prevState2011 = stateValues2011.slice(0, i);
            var barStack2011 = prevState2011.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2011 / 2 * 10 + 500 - barStack2011 * 10 + stateValue2011 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2011 / 2 * 10 + 480 - barStack2011 * 10 + stateValue2011 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2012 States
    
    stateGraph.selectAll("states2012")
        .data(stateValues2012)
        .enter()
        .append("rect")
        .attr("class","statebars2012")
        .attr("id",function(d,i) {
            return ("statebar2012_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 12 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2012_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2012_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2012_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2012_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2012_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2012_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2012_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2012_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2012labels")
        .data(stateLabels2012)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2012 = stateValues2012[i];
            if(stateValue2012 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2012_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 12 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2012 = stateValues2012[i];
            if(i == 0) {return (graphh - stateValue2012 / 2 * 10 + 480)}
            var prevState2012 = stateValues2012.slice(0, i);
            var barStack2012 = prevState2012.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2012 / 2 * 10 + 480 - barStack2012 * 10 + stateValue2012 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2012values")
        .data(stateValues2012)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2012[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2012_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 12 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2012 = stateValues2012[i];
            if(i == 0) {return (graphh - stateValue2012 / 2 * 10 + 480)}
            var prevState2012 = stateValues2012.slice(0, i);
            var barStack2012 = prevState2012.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2012 / 2 * 10 + 500 - barStack2012 * 10 + stateValue2012 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2012 / 2 * 10 + 480 - barStack2012 * 10 + stateValue2012 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2013 States
    
    stateGraph.selectAll("states2013")
        .data(stateValues2013)
        .enter()
        .append("rect")
        .attr("class","statebars2013")
        .attr("id",function(d,i) {
            return ("statebar2013_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 13 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2013_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2013_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2013_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2013_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2013_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2013_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2013_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2013_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2013labels")
        .data(stateLabels2013)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2013 = stateValues2013[i];
            if(stateValue2013 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2013_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 13 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2013 = stateValues2013[i];
            if(i == 0) {return (graphh - stateValue2013 / 2 * 10 + 480)}
            var prevState2013 = stateValues2013.slice(0, i);
            var barStack2013 = prevState2013.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2013 / 2 * 10 + 480 - barStack2013 * 10 + stateValue2013 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2013values")
        .data(stateValues2013)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2013[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2013_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 13 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2013 = stateValues2013[i];
            if(i == 0) {return (graphh - stateValue2013 / 2 * 10 + 480)}
            var prevState2013 = stateValues2013.slice(0, i);
            var barStack2013 = prevState2013.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2013 / 2 * 10 + 500 - barStack2013 * 10 + stateValue2013 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2013 / 2 * 10 + 480 - barStack2013 * 10 + stateValue2013 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2014 States
    
    stateGraph.selectAll("states2014")
        .data(stateValues2014)
        .enter()
        .append("rect")
        .attr("class","statebars2014")
        .attr("id",function(d,i) {
            return ("statebar2014_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 14 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2014_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2014_" + [i-1])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2014_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2014_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2014_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2014_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2014_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2014_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2014labels")
        .data(stateLabels2014)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2014 = stateValues2014[i];
            if(stateValue2014 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2014_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 14 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2014 = stateValues2014[i];
            if(i == 0) {return (graphh - stateValue2014 / 2 * 10 + 480)}
            var prevState2014 = stateValues2014.slice(0, i);
            var barStack2014 = prevState2014.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2014 / 2 * 10 + 480 - barStack2014 * 10 + stateValue2014 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2014values")
        .data(stateValues2014)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2014[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2014_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 14 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2014 = stateValues2014[i];
            if(i == 0) {return (graphh - stateValue2014 / 2 * 10 + 480)}
            var prevState2014 = stateValues2014.slice(0, i);
            var barStack2014 = prevState2014.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2014 / 2 * 10 + 500 - barStack2014 * 10 + stateValue2014 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2014 / 2 * 10 + 480 - barStack2014 * 10 + stateValue2014 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    //      2015 States
    
    stateGraph.selectAll("states2015")
        .data(stateValues2015)
        .enter()
        .append("rect")
        .attr("class","statebars2015")
        .attr("id",function(d,i) {
            return ("statebar2015_" + i);
        })
        .attr("x",function(d,i) {
            return (1.5625 + 15 * 6.25 + "%");
        })
        .attr("y","580px")
        .attr("width","3%")
        .attr("height","0px")
        .style("fill","#cccccc")
        .style("stroke","#f3f3f3")
        .style("stroke-width","1px")
        .style("cursor","pointer")
        .style("pointer-events","none")
        .on("mouseover",function(d,i) {
            d3.select(this)
            .style("fill","#c05641")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                if(d == 1) {return ("50px")}
                else {return d * 10};
            })
            d3.select("#statelabel2015_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2015_" + [i-1])
            .style("opacity","0.0")
            d3.select("#statelabel2015_" + [i-2])
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2015_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
        })
        .on("mouseout",function(d,i) {
            d3.select(this)
            .style("fill","#cccccc")
            .style("transition","fill 0.1s ease")
            .transition()
            .duration(300)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            d3.select("#statelabel2015_" + i)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2015_" + [i-1])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statelabel2015_" + [i-2])
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.select("#statevalue2015_" + i)
            .style("opacity","0.0")
            .style("transition","opacity 0.1s ease")
        })
    
    stateGraph.selectAll("states2015labels")
        .data(stateLabels2015)
        .enter()
        .append("text")
        .text(function(d,i) {
            var stateValue2015 = stateValues2015[i];
            if(stateValue2015 < 2) {return null}
            else {return (d)};
        })
        .attr("class","statelabels")
        .attr("id",function(d,i) {
            return ("statelabel2015_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 15 * 6.25 + "%");
        })
        .attr("y",function(d,i) {
            var stateValue2015 = stateValues2015[i];
            if(i == 0) {return (graphh - stateValue2015 / 2 * 10 + 480)}
            var prevState2015 = stateValues2015.slice(0, i);
            var barStack2015 = prevState2015.reduce(function(a,b) {return a+ b;}, 0);
            if(i >= 1) {return (graphh - stateValue2015 / 2 * 10 + 480 - barStack2015 * 10 + stateValue2015 / 2 * 5)};
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
    stateGraph.selectAll("state2015values")
        .data(stateValues2015)
        .enter()
        .append("text")
        .text(function(d,i) {
            var state = stateLabels2015[i];
            if(d == 1) {return (d + " " + state)}
            else {return (d)};
        })
        .attr("class","statevalues")
        .attr("id",function(d,i) {
            return ("statevalue2015_" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + 15 * 6.25 + "%")
        })
        .attr("y",function(d,i) {
            var stateValue2015 = stateValues2015[i];
            if(i == 0) {return (graphh - stateValue2015 / 2 * 10 + 480)}
            var prevState2015 = stateValues2015.slice(0, i);
            var barStack2015 = prevState2015.reduce(function(a,b) {return a+ b;}, 0);
            if(d == 1) {return (graphh - stateValue2015 / 2 * 10 + 500 - barStack2015 * 10 + stateValue2015 / 2 * 5)}
            if(i >= 1) {return (graphh - stateValue2015 / 2 * 10 + 480 - barStack2015 * 10 + stateValue2015 / 2 * 5)}
        })
        .attr("text-anchor","middle")
        .style("fill","#f3f3f3")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("pointer-events","none")
        .style("opacity","0.0")
    
}



//      Static Elements



function drawTitle() {
    d3.select("#svg")
	    .append("text")
 	    .text("Chico State Alumni")
        .attr("id","title")
        .attr("x","50%")
        .attr("y","100px")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","36px")
        .style("text-anchor","middle")
        .style("fill","#000000")
}

function drawGraphChanger() {
    
    //   Gender Button
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle")
        .attr("id","gendertoggle")
        .attr("width","120px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(-200px,0px)")
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.select("#gendertoggle2")
            .transition()
            .duration(200)
            .attr("width","120px")
        })
        .on("mouseout",function(d,i) {
            d3.select("#gendertoggle2")
            .transition()
            .duration(200)
            .attr("width","0px")
        })
        .on("click",function(d,i) {
            d3.select("#gendertoggle3")
            .transition()
            .duration(200)
            .attr("width","120px")
            d3.selectAll("#disciplinetoggle3, #statetoggle3")
            .transition()
            .duration(200)
            .attr("width","0px")
            d3.selectAll(".disciplinekey, .disciplinelabels1, .statelabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.5s ease")
            .transition()
            .delay(500)
            .style("display","none")
            d3.selectAll(".genderkey, .genderlabels1")
            .style("display","block")
            .transition()
            .delay(1000)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".printbars, .screenbars, .tangiblebars, .photobars, .statebars2000, .statebars2001, .statebars2002, .statebars2003, .statebars2004, .statebars2005, .statebars2006, .statebars2007, .statebars2008, .statebars2009, .statebars2010, .statebars2011, .statebars2012, .statebars2013, .statebars2014, .statebars2015")
            .transition()
            .duration(500)
            .attr("height","0px")
            .attr("y","580px")
            d3.selectAll(".statebars2000, .statebars2001, .statebars2002, .statebars2003, .statebars2004, .statebars2005, .statebars2006, .statebars2007, .statebars2008, .statebars2009, .statebars2010, .statebars2011, .statebars2012, .statebars2013, .statebars2014, .statebars2015")
            .style("pointer-events","none")
            d3.selectAll(".malebars")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                return (graphh - d * 10 + 480);
            })
            d3.selectAll(".femalebars")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10)
            })
            .attr("y",function(d,i) {
                return (graphh - d * 10 + 480 - genderBarsMale[i] * 10);
            })
        })
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle2")
        .attr("id","gendertoggle2")
        .attr("width","0px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(-200px,0px)")
        .style("fill","#aaaaaa")
        .style("cursor","pointer")
        .attr("pointer-events","none")
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle3")
        .attr("id","gendertoggle3")
        .attr("width","120px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(-200px,0px)")
        .style("fill","#000000")
        .style("cursor","pointer")
        .attr("pointer-events","none")
    
    d3.select("#svg")
        .append("text")
        .text("Gender")
        .attr("id","gendertext")
	    .attr("x","50%")
        .attr("y","160px")
        .style("transform","translate(-190px,0px)")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("text-anchor","left")
        .style("fill","#f3f3f3")
        .style("pointer-events","none")
    
    //   Discipline Button
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle")
        .attr("id","disciplinetoggle")
        .attr("width","120px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(-60px,0px)")
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.select("#disciplinetoggle2")
            .transition()
            .duration(200)
            .attr("width","120px")
        })
        .on("mouseout",function(d,i) {
            d3.select("#disciplinetoggle2")
            .transition()
            .duration(200)
            .attr("width","0px")
        })
        .on("click",function(d,i) {
            d3.select("#disciplinetoggle3")
            .transition()
            .duration(200)
            .attr("width","120px")
            d3.selectAll("#gendertoggle3, #statetoggle3")
            .transition()
            .duration(200)
            .attr("width","0px")
            d3.selectAll(".genderkey, .genderlabels1, .statelabels")
            .style("opacity","0.0")
            .style("transition","opacity 0.5s ease")
            .transition()
            .delay(500)
            .style("display","none")
            d3.selectAll(".disciplinekey, .disciplinelabels1")
            .style("display","block")
            .transition()
            .delay(1000)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".malebars, .femalebars, .statebars2000, .statebars2001, .statebars2002, .statebars2003, .statebars2004, .statebars2005, .statebars2006, .statebars2007, .statebars2008, .statebars2009, .statebars2010, .statebars2011, .statebars2012, .statebars2013, .statebars2014, .statebars2015")
            .transition()
            .duration(500)
            .attr("height","0px")
            .attr("y","580px")
            d3.selectAll(".statebars2000, .statebars2001, .statebars2002, .statebars2003, .statebars2004, .statebars2005, .statebars2006, .statebars2007, .statebars2008, .statebars2009, .statebars2010, .statebars2011, .statebars2012, .statebars2013, .statebars2014, .statebars2015")
            .style("pointer-events","none")
            d3.selectAll(".printbars")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                return (graphh - d * 10 + 480);
            })
            d3.selectAll(".screenbars")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                return (graphh - d * 10 + 480 - disciplineBarsPrint[i] * 10);
            })
            d3.selectAll(".tangiblebars")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                return (graphh - d * 10 + 480 - disciplineBarsPrint[i] * 10 - disciplineBarsScreen[i] * 10);
            })
            d3.selectAll(".photobars")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                return (graphh - d * 10 + 480 - disciplineBarsPrint[i] * 10 - disciplineBarsScreen[i] * 10 - disciplineBarsTangible[i] * 10);
            })
        })
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle2")
        .attr("id","disciplinetoggle2")
        .attr("width","0px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(-60px,0px)")
        .style("fill","#aaaaaa")
        .style("cursor","pointer")
        .attr("pointer-events","none")
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle3")
        .attr("id","disciplinetoggle3")
        .attr("width","0px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(-60px,0px)")
        .style("fill","#000000")
        .style("cursor","pointer")
        .attr("pointer-events","none")
    
    d3.select("#svg")
        .append("text")
        .text("Discipline")
        .attr("id","gendertext")
	    .attr("x","50%")
        .attr("y","160px")
        .style("transform","translate(-50px,0px)")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("text-anchor","left")
        .style("fill","#f3f3f3")
        .style("pointer-events","none")
    
    //   State Button
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle")
        .attr("id","disciplinetoggle")
        .attr("width","120px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(80px,0px)")
        .style("fill","#cccccc")
        .style("cursor","pointer")
        .on("mouseover",function(d,i) {
            d3.select("#statetoggle2")
            .transition()
            .duration(200)
            .attr("width","120px")
        })
        .on("mouseout",function(d,i) {
            d3.select("#statetoggle2")
            .transition()
            .duration(200)
            .attr("width","0px")
        })
        .on("click",function(d,i) {
            d3.select("#statetoggle3")
            .transition()
            .duration(200)
            .attr("width","120px")
            d3.selectAll("#gendertoggle3, #disciplinetoggle3")
            .transition()
            .duration(200)
            .attr("width","0px")
            d3.selectAll(".genderkey, .genderlabels1, .disciplinekey, .disciplinelabels1")
            .style("opacity","0.0")
            .style("transition","opacity 0.5s ease")
            .transition()
            .delay(500)
            .style("display","none")
            d3.selectAll(".malebars, .femalebars, .printbars, .screenbars, .tangiblebars, .photobars")
            .transition()
            .duration(500)
            .attr("height","0px")
            .attr("y","580px")
            d3.selectAll(".statelabels")
            .style("display","block")
            .transition()
            .delay(1000)
            .style("opacity","1.0")
            .style("transition","opacity 0.1s ease")
            d3.selectAll(".statebars2000")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2000 = stateValues2000.slice(0, i);
                var barStack2000 = prevState2000.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2000 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2001")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2001 = stateValues2001.slice(0, i);
                var barStack2001 = prevState2001.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2001 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2002")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2002 = stateValues2002.slice(0, i);
                var barStack2002 = prevState2002.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2002 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2003")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2003 = stateValues2003.slice(0, i);
                var barStack2003 = prevState2003.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2003 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2004")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2004 = stateValues2004.slice(0, i);
                var barStack2004 = prevState2004.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2004 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2005")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2005 = stateValues2005.slice(0, i);
                var barStack2005 = prevState2005.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2005 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2006")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2006 = stateValues2006.slice(0, i);
                var barStack2006 = prevState2006.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2006 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2007")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2007 = stateValues2007.slice(0, i);
                var barStack2007 = prevState2007.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2007 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2008")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2008 = stateValues2008.slice(0, i);
                var barStack2008 = prevState2008.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2008 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2009")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2009 = stateValues2009.slice(0, i);
                var barStack2009 = prevState2009.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2009 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2010")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2010 = stateValues2010.slice(0, i);
                var barStack2010 = prevState2010.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2010 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2011")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2011 = stateValues2011.slice(0, i);
                var barStack2011 = prevState2011.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2011 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2012")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2012 = stateValues2012.slice(0, i);
                var barStack2012 = prevState2012.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2012 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2013")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2013 = stateValues2013.slice(0, i);
                var barStack2013 = prevState2013.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2013 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2014")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2014 = stateValues2014.slice(0, i);
                var barStack2014 = prevState2014.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2014 * 10)};
            })
            .style("pointer-events","auto")
            d3.selectAll(".statebars2015")
            .transition()
            .delay(500)
            .duration(500)
            .attr("height",function(d,i) {
                return (d * 10);
            })
            .attr("y",function(d,i) {
                if(i == 0) {return (graphh - d * 10 + 480)}
                var prevState2015 = stateValues2015.slice(0, i);
                var barStack2015 = prevState2015.reduce(function(a,b) {return a+ b;}, 0);
                if(i >= 1) {return (graphh - d * 10 + 480 - barStack2015 * 10)};
            })
        })
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle2")
        .attr("id","statetoggle2")
        .attr("width","0px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(80px,0px)")
        .style("fill","#aaaaaa")
        .style("cursor","pointer")
        .attr("pointer-events","none")
    
    d3.select("#svg")
        .append("rect")
        .attr("class","graphtoggle3")
        .attr("id","statetoggle3")
        .attr("width","0px")
        .attr("height","30px")
        .attr("x","50%")
        .attr("y","140px")
        .style("transform","translate(80px,0px)")
        .style("fill","#000000")
        .style("cursor","pointer")
        .attr("pointer-events","none")
    
    d3.select("#svg")
        .append("text")
        .text("State")
        .attr("id","gendertext")
	    .attr("x","50%")
        .attr("y","160px")
        .style("transform","translate(90px,0px)")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
        .style("text-anchor","left")
        .style("fill","#f3f3f3")
        .style("pointer-events","none")
}

function drawGraphYears() {
    var graphYears = d3.select("#svg")
        .append("svg:g")
        .attr("class","graphyears")
    
    graphYears.selectAll("years")
        .data(shortYears)
        .enter()
        .append("text")
        .text(function(d,i) {
            return (d);
        })
        .attr("id",function(d,i) {
            return ("graphyear" + i);
        })
        .attr("x",function(d,i) {
            return (3.125 + i * 6.25 + "%")
        })
        .attr("y","600px")
        .attr("text-anchor","middle")
        .style("fill","#cccccc")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
    
    d3.select("#svg")
        .append("text")
        .text("Graduation Years")
        .attr("x","50%")
        .attr("y","620px")
        .attr("text-anchor","middle")
        .style("fill","#cccccc")
        .style("font-family","montserrat")
        .style("font-weight","400")
        .style("font-size","1.2em")
}



//      Load Functions



window.onload = function() {
    drawTitle();
    drawGraphChanger();
    calcGenders();
    calcDisciplines();
    calcStates();
    drawGraphYears();
}

 