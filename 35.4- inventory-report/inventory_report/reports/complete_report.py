from .simple_report import SimpleReport


class CompleteReport(SimpleReport):
    def __init__(self, generate):
        super().__init__(generate)

        self.generate = generate

    def generate(produtos):
        simple_report = SimpleReport.generate(produtos)
        l_emp = list()
        for produto in produtos:
            l_emp.append(produto['nome_da_empresa'])
        qtd_emp = {emp: l_emp.count(emp) for emp in l_emp}
        asc_qtd_emp = sorted(qtd_emp.items(), key=lambda x: x[1], reverse=True)
        qtd_por_emp = ""
        for k, v in asc_qtd_emp:
            qtd_por_emp += f"- {k}: {v}\n"
        return (
          f"{simple_report}\n"
          f"Produtos estocados por empresa:\n"
          f"{qtd_por_emp}"
        )
