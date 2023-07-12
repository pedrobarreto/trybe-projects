from inventory_report.inventory.product import Product


def test_cria_produto():

    product = Product(1,
                      "Caneca",
                      "Trybe",
                      "01/01/2021",
                      "01/01/2024",
                      "123456789",
                      "Não quebrar")

    assert (1,
            "Caneca",
            "Trybe",
            "01/01/2021",
            "01/01/2024",
            "123456789",
            "Não quebrar"
            ) == (
                product.id,
                product.nome_do_produto,
                product.nome_da_empresa,
                product.data_de_fabricacao,
                product.data_de_validade,
                product.numero_de_serie,
                product.instrucoes_de_armazenamento,
                )
