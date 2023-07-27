import sys


def txt_importer(path_file):
    if path_file.endswith(".txt"):
        return open_file(path_file)
    return sys.stderr.write("Formato inválido\n")


def open_file(file):
    try:
        with open(file, "r") as f:
            # https://www.w3schools.com/python/ref_string_splitlines.asp
            return f.read().splitlines()
    except FileNotFoundError:
        return sys.stderr.write(f"Arquivo {file} não encontrado\n")
