const btnNext=document.getElementById("next");
const Name=document.getElementById("InputName");
const Phone=document.getElementById("InputPhone");
const Mail=document.getElementById("InputEmail1");
const Adress=document.getElementById("inputAddress");

$(document).ready(function(){

    $(".sec2").hide();
    $("#uniDiv").addClass("col-12");
    $("#facultyDiv").addClass("col-12");
    var validName = false;
    var validNum = false;
    var validEmail = false;


    // Validating name
    // Makes sure it contains only letters
    $("#InputName").blur(function(){

        if($(this).val().length == 0) {
            document.getElementById("nam").textContent="This field is required";
            Name.classList.add("is-invalid");
            validName = false; 
        }
        //This supports both AR and EN
        else if (/^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$/.test(Name.value)) {
            document.getElementById("nam").textContent="";
            if(Name.classList.contains("is-invalid")){Name.classList.remove("is-invalid");}
            Name.classList.add("is-valid");
            validName = true;    
        }
        else{
            document.getElementById("nam").textContent="The Name should include only Letters";
            Name.classList.add("is-invalid");
            validName = false; 
        }
    });

    // Validating phone number
    $("#InputPhone").blur(function(){

        if($(this).val().length == 0) {
            document.getElementById("phone").textContent="This field is required";
            Phone.classList.add("is-invalid");
            validNum = false;
        }
        else if(Phone.value.slice(0,2) != 01 || Phone.value.length != 11 || /[^0-9]/.test(Phone.value)){
            document.getElementById("phone").textContent="Please enter a valid number";
            Phone.classList.add("is-invalid");
            validNum = false;
        }
        else{
            document.getElementById("phone").textContent="";
            if(Phone.classList.contains("is-invalid")){Phone.classList.remove("is-invalid");}
            Phone.classList.add("is-valid");
            validNum = true;
        }
    });

    // Validating Email
    $("#InputEmail1").blur(function(){

        if($(this).val().length == 0) {
            $("#mail").text("This field is required");
            Mail.classList.add("is-invalid");
            validEmail = false;
        }
        else if(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.value)){
            if(Mail.classList.contains("is-invalid")){Mail.classList.remove("is-invalid");}
            $("#mail").text("");
            Mail.classList.add("is-valid");
            validEmail = true;
        }
        else{
            $("#mail").text("Please enter a valid e-mail");
            Mail.classList.add("is-invalid");
            validEmail = false;
        }
    });

    // Address input
    $("#inputAddress").blur(function(){
        if(Adress.value.length != 0){
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
            $("#address").text("");
        }
        else {
            this.classList.add("is-invalid");
            $("#address").text("This field is required");            
        }
    });

    // Removing the chosen 1st preference from the 2nd preference options
    $("#first").change(function(){
        var selectedPref = $("#first option:selected").val();
        var value = $('#second option[value="'+selectedPref+'"]')
        value.attr("disabled", true);
        $("#pref1").text("");

        // Make sure all other options are shown
        $("#second, .eng, .management").not(value).removeAttr('disabled');
    });

    // Removing the  chosen 2nd preference from the 1st preference options
    $("#second").change(function(){
        var selectedPref = $("#second option:selected").val();
        var value = $('#first option[value="'+selectedPref+'"]')
        value.attr("disabled", true);
        $("#pref2").text("");


        // Make sure all other options are shown
        $("#first, .eng, .management").not(value).removeAttr('disabled');
    });

    // for removing the error msg after selecting an option
    $("#first").blur(function(){
        if(!($("#first option:selected").val() === "0")){
            $("#pref1").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#pref1").text("This field is required");
            this.classList.add("is-invalid");
        }
    });

    $("#second").blur(function(){
        if(!($("#second option:selected").val() === "0")){
            $("#pref2").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#pref2").text("This field is required");
            this.classList.add("is-invalid");
        }
    });

    // Next button
    $("#next").click(function(){
        var choseMang = $("#first option:selected").hasClass("management");
        var firstPref = $("#first option:selected").val();
        var secondPref = $("#second option:selected").val();
        
        // Check if there is any empty or invalid field
        if(!validName){
            document.getElementById("nam").textContent="This field is required";
            Name.classList.add("is-invalid");
        }
        if(!validEmail){
            $("#mail").text("This field is required");
            Mail.classList.add("is-invalid");

        }
        if(!validNum){
            document.getElementById("phone").textContent="This field is required";
            Phone.classList.add("is-invalid");
        }
        if($("#inputAddress").val().length == 0)
        {
            $("#address").text("This field is required");
            document.getElementById("inputAddress").classList.add("is-invalid");
        }
        if(firstPref === "0"){
            $("#pref1").text("This field is required");
            document.getElementById("first").classList.add("is-invalid");
        }
        if(secondPref === "0"){
            $("#pref2").text("This field is required");
            document.getElementById("second").classList.add("is-invalid");
        }


        if(!validName || !validEmail || !validNum || $("#inputAddress").val().length == 0 || firstPref === "0" || secondPref === "0")
        {
            $("#check").text("Please complete the required data");
        }
        else{
            $("#check").text("");
            $(".sec1").hide();
            $(".sec2").show();

            if(choseMang){
                $("#over").show();
            }
            else{ 
                $("#over").hide() 
            }
        }
    });


    // Back Button
    $("#back").click(function(){
        $(".sec2").hide();
        $(".sec1").show();
    });

    var validDep = false;

    // Department (letters only)
    $("#Inputdepartment").blur(function(){
        if ($(this).val().length == 0){
            $("#department").text("This field is required");
            this.classList.add("is-invalid");
        }
        else if (/^[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z]+[\u0600-\u065F\u066A-\u06EF\u06FA-\u06FFa-zA-Z ]*$/.test(this.value)) {
            $("#department").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
            validDep = true;  
        }
        else{
            $("#department").show();
            $("#department").text("This should include only Letters");
            this.classList.add("is-invalid");
            validDep = false; 
        }
    });

    // Intializing
    var validUni = false;
    var validFaculty = false;

    // University select
    $("#university").change(function(){

        // When selected option is other, resize columns and display input block
        if($("#university option:selected").val() === "1"){
            if(window.innerWidth>770){
            $("#uniDiv").removeClass("col-12");
            $("#uniDiv").addClass("col-4");
            }
            else{
                $("#uni").removeClass("top-m");
            }
            $("#uni").css("display", "block");
            validUni = false;
        }
        else {
            $("#uni").css("display", "none");
            // if($("#uniDiv").hasClass("col-4"))
            // {
                $("#uniDiv").removeClass("col-4");
                $("#uniDiv").addClass("col-12");
                $("#uni").addClass("top-m");
            //}
            validUni = true;
        }
    });

    // for removing the error msg after selecting an option (uni)
    $("#university").blur(function(){
        if(validUni){
            $("#uniSelect").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else if ($("#university option:selected").val() === "1"){
            $("#uniSelect").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#uniSelect").text("This field is required");
            this.classList.add("is-invalid");    
        }
    });

    // input for "other" universities
    $("#uni").blur(function(){
        if($("#uni").val().length != 0){
            validUni = true;
            $("#uniSelect").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#uniSelect").text("This field is required");
            this.classList.add("is-invalid");    
        }
    });

    // Faculty select
    $("#faculty").change(function(){
        if($("#faculty option:selected").val() === "1"){
            if(window.innerWidth>770){
            $("#facultyDiv").removeClass("col-12");
            $("#facultyDiv").addClass("col-4");
            }
            else{
                $("#facultyInput").removeClass("top-m");
            }
            $("#facultyInput").css("display", "block");
            validFaculty = false;
        }
        else {
            $("#facultyInput").css("display", "none");
            //if($("#facultyDiv").hasClass("col-4"))
            //{
                $("#facultyDiv").removeClass("col-4");
                $("#facultyDiv").addClass("col-12");
                $("#facultyInput").addClass("top-m");
            //}
            validFaculty = true;
        }
    });

    // for removing the error msg after selecting an option (faculty)
    $("#faculty").blur(function(){
        if(validFaculty){
            $("#facultySelect").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else if ($("#faculty option:selected").val() === "1"){
            $("#facultySelect").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#facultySelect").text("This field is required");
            this.classList.add("is-invalid");    
        }
    });

    // input for "other" faculties
    $("#facultyInput").blur(function(){
        if($("#facultyInput").val().length != 0){
            validFaculty = true;
            $("#facultySelect").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#facultySelect").text("This field is required");
            this.classList.add("is-invalid");    
        }
    });

    // for removing the error msg after selecting an option (grad year)
    $("#year").blur(function(){
        if($("#year option:selected").val() != 0){
            $("#yearSelect").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#yearSelect").text("This field is required");
            this.classList.add("is-invalid");    
        }
    });

    // for removing the error msg after typing reason for applying
    $("#formGroupExampleInput4").blur(function(){
        if($(this).val().length != 0){
            $("#reason").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#reason").text("This field is required");
            this.classList.add("is-invalid");    
        }
    });

    // for removing the error msg after answering mangement question 1
    $("#Q1").blur(function(){
        if($("#Q1").val().length != 0){
            $("#mangQ1").text("");
            if(this.classList.contains("is-invalid")){this.classList.remove("is-invalid");}
            this.classList.add("is-valid");
        }
        else{
            $("#mangQ1").text("This field is required");
            this.classList.add("is-invalid");    
        }
    });


    $("input, textarea, select").blur(function(){
        var firstPref = $("#first option:selected").val();
        var secondPref = $("#second option:selected").val();
        if(!(!validName || !validEmail || !validNum || $("#inputAddress").val().length == 0 || firstPref === "0" || secondPref === "0"))
        {
            $("#check").text("");
        }
        var choseMang = $("#first option:selected").hasClass("management");
        var uni = $("#university option:selected").val();
        var faculty = $("#faculty option:selected").val();
        var year = $("#year option:selected").val();
        var reason = $("#formGroupExampleInput4").val();
        var validSubmission = !(uni === "0") && validUni && !(faculty === "0") && validFaculty && !(year === "0") && $("#Inputdepartment").val().length != 0 && validDep && reason.length != 0;

        if(choseMang){
            if(validSubmission && $("#Q1").val().length != 0){
                $("#submitCheck").text("");
            }
        }
        else {
            if(validSubmission){
                $("#submitCheck").text("");
            }
        }
    });

    
    // Submit button
    $("#submit").click(function(){
        var choseMang = $("#first option:selected").hasClass("management");
        var uni = $("#university option:selected").val();
        var faculty = $("#faculty option:selected").val();
        var year = $("#year option:selected").val();
        var reason = $("#formGroupExampleInput4").val();
        
        // Check if there is any empty or invalid field
        var validSubmission = !(uni === "0") && validUni && !(faculty === "0") && validFaculty && !(year === "0") && $("#Inputdepartment").val().length != 0 && validDep && reason.length != 0;

        if(uni === "0" || !validUni){
            $("#uniSelect").text("This field is required");
            $("#university").addClass("is-invalid");
        }
        if(faculty === "0" || !validFaculty){
            $("#facultySelect").text("This field is required");
            $("#faculty").addClass("is-invalid");
        }
        if($("#Inputdepartment").val().length == 0 || !validDep){
            $("#department").text("This field is required");
            $("#Inputdepartment").addClass("is-invalid");
        }
        if(year === "0"){
            $("#yearSelect").text("This field is required");
            $("#year").addClass("is-invalid");
        }
        if(reason.length == 0){
            $("#reason").text("This field is required");
            $("#formGroupExampleInput4").addClass("is-invalid");
        }


        // For mangement preferences 
        if(choseMang){
            if($("#Q1").val().length == 0){
                $("#mangQ1").text("This field is required");
                $("#Q1").addClass("is-invalid");
            }
            if(validSubmission && $("#Q1").val().length != 0){
                //submit successfully
                $("#submitCheck").text("");
                $(this).attr("type","submit");
            }
            else {
                $("#submitCheck").text("Please complete the required data");
            }
        } 

        // For engineering preferences
        else {
            if(validSubmission){
                //submit successfully
                $("#submitCheck").text("");
                $(this).attr("type","submit");
            }
            else {
                $("#submitCheck").text("Please complete the required data");            
            }
        }
    });

});


