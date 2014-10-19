/**
 * Created by raphael on 31/05/14.
 */
$(document).on('ready page:load', function () {
    $('table.data-table').not('.fc-header').dataTable({
        "aoColumnDefs": [
            {
                "aTargets": [-1],
                "bSortable": false,
                "bSearchable": false
            }
        ]
    });
    $('.selectpicker').selectBoxIt();

    $('.select2').select2();

    $(".date-time-picker").datetimepicker({format: "dd/mm/yyyy hh:ii"});

    $('.main').fadeIn(200);
});

function icheck() {
    if ($(".icheck-me").length > 0) {
        $(".icheck-me").each(function () {
            var $el = $(this);
            var skin = ($el.attr('data-skin') !== undefined) ? "_" + $el.attr('data-skin') : "",
                color = ($el.attr('data-color') !== undefined) ? "-" + $el.attr('data-color') : "";
            var opt = {
                checkboxClass: 'icheckbox' + skin + color,
                radioClass: 'iradio' + skin + color,
            }
            $el.iCheck(opt);
        });
    }
}

$(window).on("ready page:load", icheck);
$(document).on("ready page:load", icheck);

