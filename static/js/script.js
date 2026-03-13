function updateTime(){
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, "0");
        const minutes = String(currentTime.getMinutes()).padStart(2, "0");
        document.querySelector('.time').textContent = hours + ':' + minutes;
    }
    updateTime();
    setInterval(updateTime, 1000);

const photoInput = document.querySelectorAll('.photo input');

photoInput.forEach(function(input) {
    input.addEventListener('change', function() {
        const file = input.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                const preview = input.parentElement.querySelector('.photo-preview');
                const chosen = input.parentElement.querySelector(".file-input");
                preview.src = e.target.result;
                preview.style.display = 'block';
                if (chosen) {
                    chosen.style.display = 'none';
                }
                preview.addEventListener('contextmenu', function() {
                    e.preventDefault();
                    preview.src = '';
                    preview.style.display = 'none';
                    input.value = '';
                    if (chosen) {
                        chosen.style.display = '';
                    }
                });
            };
            reader.readAsDataURL(file);
        }
    });
});