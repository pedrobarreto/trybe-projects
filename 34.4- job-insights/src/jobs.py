from functools import lru_cache
import csv


@lru_cache
def read(path):
    with open(path, 'r') as f:
        jobs = csv.reader(f, delimiter=",", quotechar='"')
        header, *data = jobs
        return [dict(zip(header, row)) for row in data]
