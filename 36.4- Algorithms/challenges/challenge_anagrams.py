def is_anagram(first_string, second_string):
    if str_check(first_string) or str_check(second_string):
        str1 = list(first_string.lower())
        str2 = list(second_string.lower())
        return merge_sort(str1) == merge_sort(str2)


# escolhi o merge_sort por ser o mais eficiente.
# https://coderslegacy.com/python/merge-sort-algorithm/

def merge_sort(str_list):
    if len(str_list) < 2:
        return str_list

    result = []
    mid = int(len(str_list) / 2)

    first_half = merge_sort(str_list[:mid])
    second_half = merge_sort(str_list[mid:])
    pos1 = 0
    pos2 = 0
    while pos1 < len(first_half) and pos2 < len(second_half):
        if first_half[pos1] > second_half[pos2]:
            result.append(second_half[pos2])
            pos2 += 1
        else:
            result.append(first_half[pos1])
            pos1 += 1
    result += first_half[pos1:]
    result += second_half[pos2:]
    return result


def str_check(value):
    return value != '' and type(value) is str
