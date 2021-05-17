window.onload = () => {
    let input = document.querySelector('#input');

    input.oninput = function() {
        
        let value = this.value.toLowerCase().trim();
        let list = document.querySelectorAll('.list li');

        value
          ? list.forEach( elem => {
              elem.innerText.toLowerCase().search(value) == -1 
                ? elem.classList.add('hide')
                : elem.classList.remove('hide')
          })

          : list.forEach( elem => {
              elem.classList.remove('hide')
          });
    };
};