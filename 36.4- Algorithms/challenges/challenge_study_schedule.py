def study_schedule(permanence_period, target_time):
    students = 0
    for entrada, saida in permanence_period:
        if(not int_check(entrada) or not int_check(saida) or not target_time):
            return None

        if(entrada <= target_time <= saida):
            students += 1
    return students


def int_check(value):
    return (type(value) is int)
