from src.counter import count_ocurrences


def test_counter():
    result = count_ocurrences("src/jobs.csv", "salesforce")
    assert result == 646
