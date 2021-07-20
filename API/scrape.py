from requests import get
from bs4 import BeautifulSoup
import json


def extract_info(div):
    title = div.find('h2', {'class': 'sitename'}).text
    img = div.find('img')['src']
    alt = div.find('img')['alt']
    desc = div.find('div', {'class': 'site_desc'}).find('p').text
    return {'title': title, 'img': 'https://www.planetware.com'+img, 'alt': alt, 'desc': desc}


def fetch_india():
    url = 'https://www.planetware.com/tourist-attractions/india-ind.htm'
    page = get(url).content
    page = BeautifulSoup(page, "lxml")
    divs = page.findAll('div', {'class': 'article_block'})
    out = []
    for div in divs[1:]:
        try:
            out.append(extract_info(div))
        except:
            pass
    return {'data': out}


def fetch_location(location):
    url = 'https://www.holidify.com/places/'+location.replace(' ', '-')
    page = get(url)
    if page.status_code == 404:
        page = get('https://www.holidify.com/state/' +
                   location.replace(' ', '-'))
        page = BeautifulSoup(page.content, "lxml")
        title = page.findAll('div', {'class': 'd-flex'})[1].h1.text
    else:
        page = BeautifulSoup(page.content, "lxml")
        title = page.findAll('div')
        # print(title[32])
        title = title[32].find('li', {'class': 'first'}).text.strip()
    tagline = page.find('h3', {'class': 'tagline'}).text
    desc = page.find('div', {'class': 'readMoreText'}
                     ).text.replace('\nRead More\n', '')
    img = page.find('div', {'class': 'swipe-image'})['data-original']
    place_to_visit = page.findAll(
        'div', {'class': 'row no-gutters mb-50'})[1]
    places_to_visit = place_to_visit.findAll('div', {'class': 'ptv-item'})

    places = []
    for place in places_to_visit:
        place_image = place.find('img')['data-original']
        place_name = place.p.text
        places.append({'img': place_image, 'name': place_name})
    return json.dumps({'title': title, 'tagline': tagline, 'desc': desc, 'img': img, 'places_to_visit': places})


# print(fetch_location("Goa"))
# fetch_location("Assam")
# fetch_location("Kolkata")
# fetch_location("delhi")
