from ting_file_management.queue import Queue


def exists_word(word: str, instance: Queue):
    for line in instance._data:
        if word.lower() not in line:
            return []


def search_by_word(word, instance):
    for line in instance._data:
        if word.lower() not in line:
            return []
