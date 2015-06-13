$(document).on('ready page:load', pageLoad);

function pageLoad() {
    //datatable
    if ($('.data_table')) {
        $('.data_table').dataTable({
            paging: true
        });
    }
    // data picker
    if ($('.datetimepicker')) {
        $('.datetimepicker').datetimepicker({
            format: 'DD/MM/YYYY'
        });
    };
    function applyFilter ( filter, filterClass, animals ) {
            if(filter){
                var newAnimalsList = [];
                for(var i=0; i < animals.length; i++){
                    var checkedValue = $(animals[i]).find(filterClass).text();
                    if(checkedValue !== filter){
                        $(animals[i]).hide()
                    } else {
                        newAnimalsList.push(animals[i])
                    }
                }
                return newAnimalsList;
            } else {
               return animals
            }
            
    }
    $('.search-button').click( function () {
        var animalType = $('#animal-type-select').val(),
            sex = $('#sex-select').val(),
            age = $('#age-select').val(),
            size = $('#size-select').val(),
            sex = $('#sex-select').val(),
            sterile = $('#sterile-select').val();
            animalsList = $('.animal'),
            animalsFilteredByType = applyFilter(animalType, '.animal-type', animalsList),
            animalsFilteredByAge = applyFilter(age, '.age',animalsFilteredByType);
            animalsFilteredBySize = applyFilter(size, '.size', animalsFilteredByAge);
            animalsFilteredBySterile = applyFilter(sterile, '.sterile', animalsFilteredBySize);
            animalsFiltered = applyFilter(sex, '.sex', animalsFilteredBySterile);
        for ( var i = 0; i< animalsFiltered.length; i++){
            $(animalsFiltered[i]).show();
        }
        console.log(animalsFiltered)
    })
}
