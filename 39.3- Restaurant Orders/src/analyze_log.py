from functools import lru_cache
import csv


def analyze_log(path_to_file):

    if not path_to_file.endswith(".csv"):
        raise FileNotFoundError(f"Extensão inválida: {path_to_file}")
    try:
        all_dishes = read_all(path_to_file, 1)
        maria_fav = most_repeated(read_filter(path_to_file, 1, "maria"))
        arnaldo_ord = read_filter(path_to_file, 1, "arnaldo")
        arnaldo_fav = [
            arnaldo_ord.count(dish)
            for dish in arnaldo_ord if dish == "hamburguer"
        ]
        joao_dishes = read_filter(path_to_file, 1, "joao")
        joao_days = read_filter(path_to_file, 2, "joao")
        all_days = read_all(path_to_file, 2)
        joao_no_ord = set(all_dishes).symmetric_difference(joao_dishes)
        joao_no_days = set(joao_days).symmetric_difference(all_days)
        # https://stackoverflow.com/questions/29947844/opposite-of-set-intersection-in-python
        write(
            "data/mkt_campaign.txt",
            maria_fav, arnaldo_fav, joao_no_ord, joao_no_days
        )
    except FileNotFoundError:
        raise FileNotFoundError(f"Arquivo inexistente: {path_to_file}")


@lru_cache
def read_filter(path, element, person):
    with open(path, "r") as f:
        data = csv.reader(f, delimiter=",", quotechar='"')
        return [row[element] for row in data if row[0] == person]


@lru_cache
def read_all(path, element):
    with open(path, "r") as f:
        data = csv.reader(f, delimiter=",", quotechar='"')
        return [row[element] for row in data]


def most_repeated(List):
    return max(set(List), key=List.count)


def write(path, maria, arnaldo, joao, joao_days):
    with open(path, "w") as f:
        f.write(f"{maria}\n{arnaldo[0]}\n{joao}\n{joao_days}\n")
