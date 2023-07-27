import sys
from ting_file_management.file_management import txt_importer
from ting_file_management.queue import Queue


def process(path_file, instance: Queue):

    output = dict()
    loaded_file = txt_importer(path_file)
    output["nome_do_arquivo"] = path_file
    output["qtd_linhas"] = len(loaded_file)
    output["linhas_do_arquivo"] = loaded_file

    instance.enqueue(output)

    sys.stdout.write(str(output))


def remove(instance: Queue):
    if instance.is_empty():
        return sys.stdout.write("Não há elementos\n")

    removed_file = instance.dequeue()
    sys.stdout.write(
        f"Arquivo {removed_file['nome_do_arquivo']} removido com sucesso\n"
    )


def file_metadata(instance: Queue, position):
    try:
        searched_file = instance.search(position)
        sys.stdout.write(str(searched_file))
    except IndexError:
        sys.stderr.write("Posição inválida\n")
