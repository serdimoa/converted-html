$(document).ready(function() {
    
    var jsondb = $.getJSON("public/database/data.json",function(data){
    $('#my-ajax-table').dynatable({
        dataset: {
        records: data
        }
    });
    });
    
    
   $(".menu").affix({
        offset: { 
            top: 80 
     	}
    });
    
    $.dynatableSetup({
    features: {
    paginate: true,
    pushState: true,
    search: true,
    recordCount: false,
    perPageSelect: false
    },
         inputs: {
             paginationPrev: "Предыдущая",
    paginationNext: 'Следующая',
         }
    });
    


});

 