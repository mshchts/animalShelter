$(document).on('ready page:load', tableLoad);

function tableLoad() {
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
}