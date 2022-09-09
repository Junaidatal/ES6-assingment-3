let obj, i, x = "";

obj = {

    name : "Muhammad Junaid",
    course : [{"categoryname" : "Website Development" , "coursename" : ["PHP" , "ASP.NET","Node JS"]} ,
             {"categoryname" : "Mobile and App Development" , "coursename" : ["Android" , "Flutter" , "Dark"]},
             {"categoryname" : "Digital Marketing" , "coursename" : ["SEO" , "SEM" , "SMO"]}]
};

for(i in obj.course){
    x += "<h2>"+ obj.course[i].categoryname+"</h2>";
    for(j in obj.course[i].coursename)
    {
        x+= obj.course[i].coursename[j]+"</br>";
    }
}

document.getElementById("myid").innerHTML=x;