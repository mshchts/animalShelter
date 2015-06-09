$(document).on('ready page:load', pageLoad);

function pageLoad() {
    //datatable
    if ($('.data_table')) {
        $('.data_table').dataTable({
            paging: true,
            dom: 'Rlfrtip',
            "order": [
                [1, "desc"],
                [2, 'asc']
            ],
            "aoColumnDefs": [{
                "bSortable": false,
                "aTargets": [-1, -2]
            }]
        });
    }
    // data picker
    if ($('.datetimepicker')) {
        $('.datetimepicker').datetimepicker({
            format: 'YYYY/MM/DD hh:mm'
        });
    };
}
