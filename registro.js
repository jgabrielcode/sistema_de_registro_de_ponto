let count = 0
        const botaoBaterPonto = document.getElementById("btn-bater-ponto");
        const entrada = document.querySelector("#entrada");
        const intervalo = document.querySelector("#intervalo");
        const retorno = document.querySelector("#retorno");
        const saida = document.querySelector("#saida");

      if (botaoBaterPonto) {
        
        
        botaoBaterPonto.addEventListener("click", () => {
          botaoBaterPonto.textContent = "Ponto registrado";
          botaoBaterPonto.classList.remove("btn-primary");
          botaoBaterPonto.classList.add("btn-success");
          botaoBaterPonto.disabled = true;

          setTimeout(() => {
            botaoBaterPonto.textContent = "Bater ponto";
            botaoBaterPonto.classList.remove("btn-success");
            botaoBaterPonto.classList.add("btn-primary");
            botaoBaterPonto.disabled = false;
          }, 1000);
          if(count == 0){
            entrada.textContent = "07:33"
            count++
        }else if(count == 1){
            intervalo.textContent = "12:39"
            count++
        }else if(count == 2){
            retorno.textContent = "13:51"
            count++
        }else if(count ==3){
            saida.textContent = "17:35"
        }
        
        });

        
      }