from inventory_report.inventory.product import Product


def test_relatorio_produto():
    p = [
        1,
        "Caneca",
        "Trybe",
        "01/01/2020",
        "01/01/2023",
        "123",
        "sem quebrar"]

    report = Product(p[0], p[1], p[2], p[3], p[4], p[5], p[6])
    expected = (
        f"O produto {'Caneca'}"
        f" fabricado em {'01/01/2020'}"
        f" por {'Trybe'} com validade"
        f" até {'01/01/2023'}"
        f" precisa ser armazenado {'sem quebrar'}."
    )

    assert expected == str(report)
