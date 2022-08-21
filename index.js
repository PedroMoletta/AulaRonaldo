$(function() {
    console.log( "ready!" );

    $("#btn_entrar").click(function() {
        const login = $("#login").val();
        const senha = $("#senha").val();

        console.log("login: " + login)
        console.log("senha: " + senha)
    });
});