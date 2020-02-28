$(function() {
    $('#data-dropdown-1').datepicker({    
        onSelect: function (fd) { 
            $("#data-dropdown-1").val(fd.split("-")[0]);
            $("#data-dropdown-2").val(fd.split("-")[1]);
        }
    })
    
});
