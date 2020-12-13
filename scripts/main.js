$(document).ready(function(){
    $("#RegisterEmail").click(() => {
        let email = document.getElementById('recipient-email').value;
        const settings = {
            body: JSON.stringify({email}),
            headers: new Headers({
                "content-type": "application/json",

            }),
            method: "POST"
        }
        fetch(`https://waitinglistserv.herokuapp.com/registerEmail`, settings)
        $("#subscribeModal").removeClass("show");
        $("#subcribeModal").css({
            "display": "none;"
        })
        $("subcribeModal").attr("aria-hidden","true");
        $("#top").removeClass("modal-open");
        $(".modal-backdrop").remove();
        document.getElementById('recipient-email').value = "";
    })
});