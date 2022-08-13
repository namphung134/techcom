$(document).ready(function() {
    $('#loginModal').modal('show');
    $(function() {
        $('[data-toggle="tooltip"]').tooltip()
    })
});


function openSearch() {
    document.getElementById("search-display").style.display = "block";
}

function closeSearch() {
    document.getElementById("search-display").style.display = "none";
}