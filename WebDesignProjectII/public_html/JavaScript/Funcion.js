$(function()
{
    $("#btnIniciarSesion").bind("click", function()
    {
        var vectorUsuariosLogin = JSON.parse(localStorage.getItem('Usuario'));
        debugger;
        if (vectorUsuariosLogin === null)
        {
            alert('No hay datos registrados en la base de datos');
        } else {
            var $txtCedulaLogin = $('#txtCedulaLogin');
            var $txtContrasenna = $('#txtContrasennaLogin');
            var existe;
            var strCedulaLogin = $.trim($txtCedulaLogin.val());
            var strContrasenna = $.trim($txtContrasenna.val());
            for (var pos = 0; pos < vectorUsuariosLogin.length; pos++) {
                debugger;
                if ((vectorUsuariosLogin[pos].cedulaUsuario === strCedulaLogin) && (vectorUsuariosLogin[pos].contrasennaUsuario === strContrasenna))
                {
                    $(location).attr('href', 'DashBoard.html');
                    break;
                } else
                {
                    existe = 0;
                }
            }
            if (existe === 0) {
                alert('No existe un usuario registrado con los datos ingresados');
            }
        }
    });
});