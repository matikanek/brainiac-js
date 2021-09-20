document.addEventListener("DOMContentLoaded", () => {
  var forms = document.querySelectorAll('.needs-validation');

  Array.prototype.slice.call(forms).forEach(function(form){
    form.addEventListener('submit', function(event){
      event.preventDefault();
      event.stopPropagation();
      if(!form.checkValidity())
        form.classList.add('was-validated');
      else {
        form.classList.remove('was-validated');
        onSaveBrainiac();
        $("#userModal").modal('hide');
      }
    }, false);
  });
});