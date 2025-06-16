

const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoCarta = carta.dataset.preco;

        const temFiltroDeCategoria = categoriaSelecionada !== '';
        const temFiltroDePreco = precoMaximoSelecionado !== '';

        const cartaNaoBateComFiltroDeCategoria =
            categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        const cartaNaoBateComFiltroDePreco =
            temFiltroDePreco && Number(precoCarta) > Number(precoMaximoSelecionado);

        const mostrarCarta = !(
            (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) ||
            cartaNaoBateComFiltroDePreco
        );

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }
    });
});
