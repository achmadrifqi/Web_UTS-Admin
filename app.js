function modelUpdate(title) {
    document.getElementById('title-modal').innerHTML = "Update -" + title;
}

function confirmDelete(title) {
    if (confirm("Do you want to delete " + title)) {
        window.alert('Success delete ' + title);
    } else {
        window.alert('Failed delete ' + title);
    }
}