/**
 * Created by raphael on 31/05/14.
 */
$(document).on('ready page:load',function () {
    $('table.table').not('.fc-header').dataTable({
        "aoColumnDefs": [ {
            "aTargets": [-1],
            "bSortable": false,
            "bSearchable": false
        } ]
    });
    $('.selectpicker').selectBoxIt();

    $('.select2').select2();

    $(".date-time-picker").datetimepicker({format: "dd/mm/yyyy hh:ii"});

    $('.main').fadeIn(200);
});