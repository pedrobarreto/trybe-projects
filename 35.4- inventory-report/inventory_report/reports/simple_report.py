class SimpleReport():

    def generate(produtos):
        l_emp = list()
        l_fabricacao = list()
        l_validade = list()
        for produto in produtos:
            l_emp.append(produto['nome_da_empresa'])
            l_fabricacao.append(produto['data_de_fabricacao'])
            l_validade.append(produto['data_de_validade'])

        empresa_mais_produtos = max(set(l_emp), key=l_emp.count)

        return (
                f"Data de fabricação mais antiga: {min(l_fabricacao)}\n"
                f"Data de validade mais próxima: {min(l_validade)}\n"
                f"Empresa com mais produtos: {empresa_mais_produtos}"
        )
