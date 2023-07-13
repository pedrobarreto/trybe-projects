import re
import requests
from parsel import Selector
from tech_news.database import create_news
import time

# https://stackoverflow.com/questions/11339210/how-to-get-integer-values-from-a-string-in-python


# Requisito 1
def fetch(url):
    for _ in range(15):
        try:
            response = requests.get(url,
                                    headers={"user-agent": "Fake user-agent"},
                                    timeout=3)
            time.sleep(1)
            if(response.status_code == 200):
                return response.text
            return None

        except requests.ReadTimeout:
            return None


# Requisito 2
def scrape_novidades(html_content):

    selector = Selector(text=html_content)
    location = 'header.entry-header .entry-title a::attr(href)'
    links = selector.css(location).getall()
    return links


# Requisito 3
def scrape_next_page_link(html_content):
    next_page_url = "https://blog.betrybe.com/page/1/"
    while next_page_url:
        selector = Selector(text=html_content)
        next_page_url = selector.css("a.next.page-numbers::attr(href)").get()
        return next_page_url

    return None


# Requisito 4
def scrape_noticia(html_content):
    noticia = dict()
    selector = Selector(text=html_content)
    summary = selector.css('.entry-content p').get()
    remove_html = re.compile('<.*?>')
    clean_summary = re.sub(remove_html, '', summary)
    clean_summary = clean_summary.replace('&amp;', '&')
    comments = selector.css('div#comments  .title-block::text').get()
    if comments:
        comments = int(re.search(r'\d+', comments).group())
    else:
        comments = 0
    noticia["url"] = selector.css("link[rel='canonical']::attr(href)").get()
    noticia["title"] = selector.css('.entry-title::text').get()
    noticia["timestamp"] = selector.css('li.meta-date::text').get()
    noticia["writer"] = selector.css('.author a::text').get()
    noticia["comments_count"] = comments
    noticia["summary"] = clean_summary
    noticia["tags"] = selector.css('.post-tags  ul li a::text').getall()
    noticia["category"] = selector.css('.label::text').get()

    return noticia


# Requisito 5
def get_tech_news(amount):
    base_url = "https://blog.betrybe.com/"
    noticias = []
    noticias_texto = []
    while len(noticias) < amount:
        response = fetch(base_url)
        link_noticias = scrape_novidades(response)
        noticias.extend(link_noticias[0:amount])
        base_url = scrape_next_page_link(response)
    for noticia in noticias:
        parsed_noticia = scrape_noticia(fetch(noticia))
        noticias_texto.append(parsed_noticia)
    create_news(noticias_texto)
    return noticias_texto
