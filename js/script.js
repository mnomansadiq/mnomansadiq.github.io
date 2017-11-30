
function detectLang()
{
 var lang = getParameterValue("lang");
  if (lang==null || lang == "") 
    {
     $.get("https://ipinfo.io", function(response) {
        loaded(response.country.includes('es-MX')?'sp':'en');
}, "jsonp");
    } 
    else
    {
     loaded(lang) ;
    }
}

function loaded(lang) {   
 String.locale = lang;
 
    localizeHTMLTag("inclusive_banking_for_inspiring_people_text");
    localizeHTMLTag("first_circle_heading");
    localizeHTMLTag("first_circle_text");
    localizeHTMLTag("second_circle_heading");
    localizeHTMLTag("second_circle_text");
    localizeHTMLTag("third_circle_heading");
    localizeHTMLTag("third_circle_text");
    localizeHTMLTag("Vitae_phasellus_text");
    localizeHTMLTag("Cras_mattis_ante_fermentum_text");
    localizeHTMLTag("Sed_feugiat_lorem_text");
    localizeHTMLTag("Lorem_ipsum_dolor_sit_amet_text");
    localizeHTMLTag("Nisl_placerat_text");
    localizeHTMLTag("Lorem_ipsum_dolor_sit_amet_text2");
    localizeHTMLTag("Ante_fermentum_text");
    localizeHTMLTag("Lorem_ipsum_dolor_sit_amet_text3");
    localizeHTMLTag("Fusce_consequat_text");
    localizeHTMLTag("Lorem_ipsum_dolor_sit_amet_text4");
    localizeHTMLTag("Browse_All_text");
    localizeHTMLTag("we_soon_launching_text");
    localizeHTMLTag("sign_up_for_our_text");
    localizeHTMLTag("name_text");
    localizeHTMLTag("email_text");
    localizeHTMLTag("message_questions_text");
    localizeHTMLTag("contact_us_text");
    localizeHTMLTag("Crafted_with_text");
    localizeHTMLTag("we_are_still_working_text");
    localizeHTMLTag("menu_text");
    localizeHTMLTag("home_text");
    localizeHTMLTag("features_text");
    localizeHTMLTag("customer_text");
    localizeHTMLTag("about_text");
    localizeHTMLTag("join_us_wait_list_text");
    localizeHTMLTag("close_text");
localizeHTMLTag("learn_more_text_heading1");
localizeHTMLTag("learn_more_text_heading2");
localizeHTMLTag("learn_more_text_heading3");
localizeHTMLTag("learn_more_text_heading4");
localizeHTMLTag("learn_more_text_heading5");
 localizeHTMLTag("learn_more_text_heading6");
localizeHTMLTag("learn_more_text_heading7");
}
 
var _ = function (string) {
    return string.toLocaleString();
};

function localizeHTMLTag(tagId) {
if(tagId!=null){

    tag = document.getElementById(tagId);
    if(tag!=null)
    {
    var res=_(tag.innerHTML);
      tag.innerHTML = res;
    }
    }
}

function getParameterValue(parameter) {
    parameter = parameter.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + parameter + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.href);
    if (results == null)
        return "";
    else
        return results[1];
}


function sendEmail()
{
 var nameVal=document.getElementById("name").value;
 var emailVal=document.getElementById("email").value;
 var messageVal=document.getElementById("message").value;
 
 
 
emailjs.send("mnomansadiq_gmail_com","template_2PPBX4AU",{'name': nameVal,'email':emailVal, 'message': messageVal})
.then(function(response) {
document.getElementById("message-form").reset();
  
}, function(err) {
   console.log("FAILED. error=", err);
});
 
}

