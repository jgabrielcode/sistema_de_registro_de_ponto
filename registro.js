
        const botaoBaterPonto = document.getElementById("btn-bater-ponto");
        const entrada = document.querySelector("#entrada");
        const intervalo = document.querySelector("#intervalo");
        const retorno = document.querySelector("#retorno");
        const saida = document.querySelector("#saida");

        let count = 0;

        
      if (botaoBaterPonto) {
      
        
        botaoBaterPonto.addEventListener("click", () => {
          botaoBaterPonto.textContent = "Ponto registrado";
          botaoBaterPonto.classList.remove("btn-primary");
          botaoBaterPonto.classList.add("btn-success");
          botaoBaterPonto.disabled = true;

        if (count > 3) {
          alert("teste");
          return;
        }


          

          const data = new Date()
          const hora = String(data.getHours()).padStart(2, "0");
          const minutos = String(data.getMinutes()).padStart(2, "0");
          

          setTimeout(() => {
            botaoBaterPonto.textContent = "Bater ponto";
            botaoBaterPonto.classList.remove("btn-success");
            botaoBaterPonto.classList.add("btn-primary");
            botaoBaterPonto.disabled = false;

          }, 1000);

          

          if(count == 0){
            entrada.textContent = `${hora}:${minutos}`;
            count++;
        }else if(count == 1){
            intervalo.textContent = `${hora}:${minutos}`
            count++;
        }else if(count == 2){
            retorno.textContent = `${hora}:${minutos}`
            count++;
        }else if(count ==3){
            saida.textContent = `${hora}:${minutos}`
            count++
        }
      });

        
      }