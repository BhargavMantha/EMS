$(function () {
    let count=0;
    $("#addemployee").click(function () {
        $("#switch").load("Add.html");
        $('div.hidden').fadeIn(3000).removeClass('hidden');
    });
    $("#showemp").click(function () {
        $("#switch").load("ShowEmployees.html");
    });
    $("#updateemp").click(function(){
        $("#switch").load("UpdateEmployee.html");
        $('div.hidden').fadeIn(3000).removeClass('hidden');
    });
    $("#deleteemp").click(function(){
        $("#switch").load("DeleteEmployee.html");
        $('div.hidden').fadeIn(3000).removeClass('hidden');
    });
    $("#paddemployee").hover(function () {
        $("#paddemployee").toggleClass("pulse");
        count++;
    });
    $("#pshow").hover(function () {
        $("#pshow").toggleClass("pulse");
        count++;
    });
    $("#pupdate").hover(function(){
        $("#pupdate").toggleClass("pulse")
        count++;
    })
    $("#pdeleteemp").hover(function(){
        $("#pdeleteemp").toggleClass("pulse")
        count++;
    })
    $("#psetting").hover(function () {
        if(count%2==0){
            $("#psetting").addClass("pulse");
            count++;
        }   
        else
        {
            $("#psetting").removeClass("pulse");
            count++;
        }
        
    });
    console.log(count);
});