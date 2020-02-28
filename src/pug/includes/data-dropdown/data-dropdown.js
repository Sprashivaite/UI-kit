$(function() {
    $('#data-dropdown-1').datepicker({    
        onSelect: function (fd, d, picker) { 
            $("#data-dropdown-1").val(fd.split("-")[0]);
            $("#data-dropdown-2").val(fd.split("-")[1]);
        }
    })
    
});


// onSelect: (formattedDate) => {
//             if (formattedDate.length > 1) {
//             $('#data-dropdown-1').val(formattedDate.split(",")[0]);
//             $('#data-dropdown-2').val(formattedDate.split(",")[1]);
            
//             this.applyButton.style.color = this.colorPurple;
//             this.selectedDates = formattedDate;
//             }
//             }    