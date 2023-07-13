from datetime import datetime
# import locale
from tech_news.database import search_news

# www.mongodb.com/community/forums/t/case-insensitive-search-with-regex/120598
# https://rollbar.com/blog/throwing-exceptions-in-python/
# https://stackoverflow.com/questions/6288892/python-how-to-convert-datetime-format
# https://stackoverflow.com/questions/49246190/string-to-date-format-as-dd-mm-yyy-in-python-portuguese
# https://stackoverflow.com/questions/904928/python-strftime-date-without-leading-0


# Requisito 6
def search_by_title(title):
    noticias = []
    for n in search_news({"title": {"$regex": f"{title}", '$options': 'i'}}):
        noticias.append((n["title"], n["url"]))
    return noticias


# Requisito 7
def search_by_date(date):
    # locale.setlocale(locale.LC_ALL, 'pt_pt.UTF-8')
    noticias = []
    try:
        output = '%-d de %B de %Y'
        data_f = datetime.strptime(date, "%Y-%m-%d").strftime(output)
    except ValueError:
        raise ValueError("Data inválida")
    data_f = data_f.replace("April", "Abril")
    data_f = data_f.replace("May", "Maio")
    q = search_news({"timestamp": {"$regex": f"{data_f}", '$options': 'i'}})
    for n in q:
        noticias.append((n["title"], n["url"]))
    return noticias


# Requisito 8
def search_by_tag(tag):
    noticias = []
    for n in search_news({"tags": {"$regex": f"{tag}", '$options': 'i'}}):
        noticias.append((n["title"], n["url"]))
    return noticias


# Requisito 9
def search_by_category(category):
    noticias = []
    q = search_news({"category": {"$regex": f"{category}", '$options': 'i'}})
    for n in q:
        noticias.append((n["title"], n["url"]))
    return noticias
