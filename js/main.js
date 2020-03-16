'use strict';

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['Daikichi', 'Chukichi', 'Kyo', 'Suekichi'];
    // const n = Math.floor(Math.random() * results.length);
    // btn.textContent = results[n];

    const n = Math.random();
    if (n < 0.05) {
      btn.textContent = 'Daikichi';
    } else if (n < 0.2){
      btn.textContent = 'Chukichi';
    } else {
      btn.textContent = 'Kyo'
    }

  });

}
