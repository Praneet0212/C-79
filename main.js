name_of_the_student_array= [];
function submit(){
    var name_1= document.getElementById("student_name_1").value;
    var name_2= document.getElementById("student_name_2").value;
    var name_3= document.getElementById("student_name_3").value;
    var name_4= document.getElementById("student_name_4").value;
    name_of_the_student_array.push(name_1);
    name_of_the_student_array.push(name_2);
    name_of_the_student_array.push(name_3);
    name_of_the_student_array.push(name_4);
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML= name_of_the_student_array;
    document.getElementById("button_submit").style.display= "none";
    document.getElementById("sort_button").style.display = "inline-block";
    document.getElementById("button_back").style.display = "inline-block";
}
function sorting(){
    name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
    document.getElementById("display_name").innerHTML= name_of_the_student_array;
}
function back(){
    name_of_the_student_array=[];
    document.getElementById("button_submit").style.display= "inline-block";
    document.getElementById("sort_button").style.display = "none";
    document.getElementById("button_back").style.display = "none";
    document.getElementById("student_name_1").value= "";
    document.getElementById("student_name_2").value= "";
    document.getElementById("student_name_3").value= "";
    document.getElementById("student_name_4").value= "";
    document.getElementById("display_name").innerHTML= "";
}