from .jobs import read


def get_unique_job_types(path):
    jobs_read = read(path)
    job_types = set()
    for row in jobs_read:
        if(row["job_type"]):
            job_types.add(row["job_type"])
    return list(job_types)


def filter_by_job_type(jobs, job_type):
    job_list = list()
    for key in jobs:
        if(key["job_type"] == job_type):
            job_list.append(key)

    return job_list


def get_unique_industries(path):
    jobs_read = read(path)
    job_industries = set()
    for row in jobs_read:
        if(row["industry"]):
            job_industries.add(row["industry"])

    return list(job_industries)


def filter_by_industry(jobs, industry):
    job_list = list()
    for key in jobs:
        if(key["industry"] == industry):
            job_list.append(key)

    return job_list


def string_to_int(salary):
    try:
        if(isinstance(salary, str) is True and salary != ""):
            return int(salary)
        if(isinstance(salary, int) is True):
            return int(salary)
    except Exception:
        return False


def get_max_salary(path):
    jobs_read = read(path)
    salary_set = set()
    max_salary = 0
    salary_list = []
    for row in jobs_read:
        if(row["max_salary"]):
            salary_int = string_to_int(row["max_salary"])
            salary_set.add(salary_int)
            salary_list = list(salary_set)

    max_salary = max(salary_list)

    return max_salary


pass


def get_min_salary(path):
    jobs_read = read(path)
    salary_set = set()
    min_salary = 0
    salary_list = []
    for row in jobs_read:
        if(row["min_salary"]):
            salary_int = string_to_int(row["min_salary"])
            salary_set.add(salary_int)
            salary_list = list(salary_set)

    min_salary = min([value for value in salary_list if value > 0])

    return min_salary

    pass


def matches_salary_range(job, salary):

    salary_filter = string_to_int(salary)

    if("min_salary" not in job or "max_salary" not in job):
        raise ValueError("Falta informação de salário")

    min_salary = string_to_int(job["min_salary"])
    max_salary = string_to_int(job["max_salary"])

    if(min_salary is None or max_salary is None or salary_filter is None):
        raise ValueError("Salário inválido")

    if(min_salary > max_salary):
        raise ValueError("Salário mínimo maior que máximo")

    if ((min_salary <= salary_filter <= max_salary)):
        return True

    return False


def filter_by_salary_range(jobs, salary):
    jobs_read = list(jobs)
    job_list = list()

    try:
        salary_filter = string_to_int(salary)
        for key in jobs_read:

            min_salary = string_to_int(key["min_salary"])
            max_salary = string_to_int(key["max_salary"])

            if ((min_salary <= salary_filter <= max_salary)):
                job_list.append(key)

        return job_list

    except Exception:
        return []
