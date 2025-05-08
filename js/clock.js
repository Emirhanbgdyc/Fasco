
document.addEventListener('DOMContentLoaded', function() {

    let targetDate;
    const savedDate = localStorage.getItem('countdownTargetDate');
    
    if (savedDate) {
     
      targetDate = new Date(parseInt(savedDate));
    
      if (targetDate <= new Date()) {
        createAndSaveNewTargetDate();
      }
    } else {
    
      createAndSaveNewTargetDate();
    }
    
    
    function createAndSaveNewTargetDate() {
      const now = new Date();
      targetDate = new Date();
      targetDate.setDate(now.getDate() + 2);
      targetDate.setHours(now.getHours() + 6);
      targetDate.setMinutes(now.getMinutes() + 5);
      targetDate.setSeconds(now.getSeconds() + 30);
    
      localStorage.setItem('countdownTargetDate', targetDate.getTime().toString());
    }
    
 
    const daysElement = document.querySelector('.days');
    const hoursElement = document.querySelector('.hours');
    const minutesElement = document.querySelector('.minutes');
    const secondsElement = document.querySelector('.seconds');
  

    window.setCustomTime = function(days, hours, minutes, seconds) {
      const now = new Date();
      targetDate = new Date(now);
      targetDate.setDate(now.getDate() + parseInt(days || 0));
      targetDate.setHours(now.getHours() + parseInt(hours || 0));
      targetDate.setMinutes(now.getMinutes() + parseInt(minutes || 0));
      targetDate.setSeconds(now.getSeconds() + parseInt(seconds || 0));
      
   
      localStorage.setItem('countdownTargetDate', targetDate.getTime().toString());
      
    
      updateCountdown();
      
      return "Zaman güncellendi!";
    };
  
 
    function updateCountdown() {
   
      const currentDate = new Date();
      
      
      const timeLeft = targetDate - currentDate;
      
  
      if (timeLeft <= 0) {
        daysElement.textContent = '00';
        hoursElement.textContent = '00';
        minutesElement.textContent = '00';
        secondsElement.textContent = '00';
        clearInterval(timerInterval);
        return;
      }
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      

      daysElement.textContent = days < 10 ? '0' + days : days;
      hoursElement.textContent = hours < 10 ? '0' + hours : hours;
      minutesElement.textContent = minutes < 10 ? '0' + minutes : minutes;
      secondsElement.textContent = seconds < 10 ? '0' + seconds : seconds;
    }
    
  
    updateCountdown();
    
    
    const timerInterval = setInterval(updateCountdown, 1000);

    window.setCustomTime(7, 5, 10, 30);

   
  });