$(function() {
    console.log( "ready!" );

    $("#btn_entrar").click(function() {
        const login = $("#login").val();
        const senha = $("#senha").val();

        $.ajax({
            url: "http://localhost:3000/usuarios/login",
            type: "POST",
            data: {
                login: login,
                senha: senha
            },
            success: function(data) {
                window.location.href = "http://localhost:3000/home";
            },
            error: function(data) {
                console.log("Erro ao logar");
            }
        });
    });
});