function updateTime(){
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, "0");
        const minutes = String(currentTime.getMinutes()).padStart(2, "0");
        document.querySelector('.time').textContent = hours + ':' + minutes;
    }
    updateTime();
    setInterval(updateTime, 1000);