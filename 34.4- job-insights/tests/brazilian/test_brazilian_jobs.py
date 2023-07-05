from src.brazilian_jobs import read_brazilian_file


def test_brazilian_jobs():

    result = read_brazilian_file("tests/mocks/brazilians_jobs.csv")
    maquinista = {'title': 'Maquinista', 'salary': '2000', 'type': 'trainee'}
    assist_administrativo = {'title': 'Assistente administrativo', 
                             'salary': '1700', 'type': ' full time'}
    analista_contabil = {'title': 'Analista Contábil',
                         'salary': '1400', 'type': ' full time'}

    assert result[0] == maquinista
    assert result[3] == assist_administrativo
    assert result[7] == analista_contabil
