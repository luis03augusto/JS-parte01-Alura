class NegociacoesView{

    constructor(elemento){
        this._elemento = elemento;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }

    _template(model){
        console.log(model);
        
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            <tbody>
                ${model.negociacoes.map(n => {
                    return `
                    <tr>
                        <td>${DataHelper.dataParaTexto(n.data)}</td>
                        <td>${n.quantidade}</td>
                        <td>${n.valor}</td>
                        <td>${n.valume}</td>
                    </tr>
                    `
                }).join('')}
            </tbody>
            <tfoot>
                <td colspan='3'></td>
                <td>${(function(){                       
                        model.negociacoes.foreach(n => n.volume);
                        return total;})()}
                </td>
            </tfoot>
        </table>
        `;
    }
}