$(document).on('ready page:load', pageLoad);

<!--This is to control the Other Pet Types Select menu-->
<script language="JavaScript" type="text/javascript">	
        // US-53: When clicking back after submitting a search for an 'other' animal,
        // make sure to trigger the click action on the form select element
        // so that we show the correct search form and previous search values
        jQuery(window).load(function() {
            var otherOptionVal = $("option[name='other']").val();
            if ( $('select#other_select').val() != otherOptionVal ) {
                $("select#other_select").change();
            }
        });
jQuery(document).ready(function(){
		jQuery('ul.sf-menu').superfish({
		delay: false,
		cssArrows:  false
		});
		$(".nourl").click(function(event){
            event.preventDefault();
            // Click code here...
        });

        $("select#other_select").change(function() {
            show_other_pet_form(this);
        });

        // preload tab if query contains search type
        // All of this logic depends on a tmpl_var set
        // when building the page in perl. Because
        // of this, we have to keep this code in a template
        // file and not in an external JS file. We
        // could use tmpl_include to pull it in,
        // but for now we'll just embed it directly into
        // the page.
        var selectedTab = 'shelter';
        if (selectedTab.length > 0) {
            if (selectedTab == 'dog'){
                    $("#tabs").tabs({selected: 0});
            } else if (selectedTab == 'cat') {
                    $("#tabs").tabs({selected: 1});
            } else if (selectedTab == 'other' ||
                       selectedTab == 'bird'  ||
                       selectedTab == 'small_animal' ||
                       selectedTab == 'reptile' ||
                       selectedTab == 'horse'   ||
                       selectedTab == 'farm_animal' ||
                       selectedTab == 'rabbit') {
                    $("#tabs").tabs({selected: 2});
                    var otherSelectValToSet = $("option[name='"+selectedTab+"']").val();

                    // If just loading the 'other' tab without a preselected species, skip setting the select option
                    if ( selectedTab != 'other' ) {
                        $("select#other_select").val(otherSelectValToSet).change();
                    }
             } else if (selectedTab == 'shelter') {
                    $("#tabs").tabs({selected: 3});
             } else {
                    $("#tabs").tabs();
            }
        }
        else {
            $("#tabs").tabs();
        }
        $.getUrlParam = function(paramName){
            var value = new RegExp('[\\?&amp;]' + paramName + '=([^&amp;#]*)').exec(window.location.href);
            if (value != null && value.length > 0) {
                return value[1] || 0;
            }
            return 0;
        };

        var prefillOtherClanSelect = $.getUrlParam('prefillOtherClan');
        if (prefillOtherClanSelect.length > 0 ) {
            $('select#other_select').val(prefillOtherClanSelect).change();
        }

        // We add a jQuery UI combobox overtop of the various breed fields on the search form.
        // In order to show an error with the field, we need to give the combobox a red border.
        // The combobox is not part of the template, so adding that error class when loading 
        // a page (if errors exist for that field) has to be done outside of the jquery.sap.search_form_validate.js
        // error handling.

        var maybe_family_id_err = '';
        var maybe_family_name_err = '';
        if (maybe_family_id_err.length > 0 || maybe_family_name_err.length > 0) {
            $('form#search_'+selectedTab+'s').find("span[name='family_id_label']").addClass('ajax_search_error_label');
            $('form#search_'+selectedTab+'s').find('input.ui-autocomplete-input').addClass('ajax_search_error_input');
        }

        // Error reporting for geo_range
        var maybe_geo_range_err = '';
        if (maybe_geo_range_err.length > 0) {
            $('form#search_'+selectedTab+'s').find("span[name='geo_range_label']").addClass('ajax_search_error_label');
            $('form#search_'+selectedTab+'s').find("select[name='geo_range']").addClass('ajax_search_error_input');

            // Select the largest range by default if returning an error for geo_range
            $('form#search_'+selectedTab+'s').find("select[name='geo_range'] option:last-child").attr('selected', 'selected');
        }

    });
function show_other_pet_form(obj) {
    no = obj.options[obj.selectedIndex].value;
    count = obj.options.length;
    for(i=1;i<=count;i++)
        document.getElementById('PetType'+i).style.display = 'none';
    if(no>0)
        document.getElementById('PetType'+no).style.display = 'block';
}
