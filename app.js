
document.addEventListener('DOMContentLoaded', function () {

    document.getElementById("myForm").addEventListener("submit", saveData);

});

function saveData(){
    const form = document.getElementById('myForm');
    const db_id = form.elements['dbid'].value
    const key = form.elements['secret_key'].value

    db_id != "" && key != "" ? 
        chrome.storage.local.set({db_id:db_id, key: key}):
        alert('Fields cannot be empty')
}
