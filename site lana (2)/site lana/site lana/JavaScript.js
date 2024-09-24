document.addEventListener("DOMContentLoaded", function() {
    const carouselImages = document.querySelectorAll('.carousel-images img');
    const images = document.querySelectorAll('#carousel-images img');
    let counter = 0;
    const intervalTime = 900; // Intervalo de tempo em milissegundos
    let slideInterval;

    const nextSlide = () => {
      counter++;
      if (counter >= 3) {
        counter = 0;
      }
      carouselImages.style.transform = `translateX(-${counter * 100}%)`;
    };
  
    slideInterval = setInterval(nextSlide, intervalTime);
  
    // Pause o carrossel quando o mouse estiver sobre ele
    carouselImages.addEventListener('mouseenter', () => {
      clearInterval(slideInterval);
    });
  
    // Retome o carrossel quando o mouse sair dele
    carouselImages.addEventListener('mouseleave', () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    });
  });


  function adicionarProduto() {
    var productList = document.getElementById("product-list");
  
    var novoProduto = document.createElement("li");
    novoProduto.className = "product-item";
  
    var imagemProduto = document.createElement("img");
    imagemProduto.src = "imagem/180493-400-400.png"; // Substitua pelo caminho da nova imagem
    imagemProduto.alt = "Novo Produto";
  
    var tituloProduto = document.createElement("h3");
    tituloProduto.textContent = "Novo Produto";
  
    var descricaoProduto = document.createElement("p");
    descricaoProduto.textContent = "Descrição do Novo Produto";
  
    var precoProduto = document.createElement("span");
    precoProduto.className = "price";
    precoProduto.textContent = "$19.99"; // Substitua pelo preço do novo produto
  
    novoProduto.appendChild(imagemProduto);
    novoProduto.appendChild(tituloProduto);
    novoProduto.appendChild(descricaoProduto);
    novoProduto.appendChild(precoProduto);
  
    productList.appendChild(novoProduto);
  }