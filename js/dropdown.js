// Event listener untuk dropdown
document.getElementById('filter-mobile').addEventListener('change', function() {
    var filterValue = this.value;
    // Terapkan filter sesuai dengan nilai yang dipilih
    $('#portfolio-items').isotope({ filter: filterValue });
});

$('#portfolio-filter #filter a').click(function () { 
    var selector = $(this).attr('data-filter');
    
    $(this).parent().parent().find('a').removeClass('current');
    $(this).addClass('current');
    
    container.isotope( { 
        filter : selector 
    });
    
    setTimeout(function () { 
        reArrangeProjects();
    }, 300);
    
    
    return false;
});