import requests
import socket
import sys
import json
import time


s = socket.socket(socket.AF_INET6, socket.SOCK_STREAM)
try:
    s.connect(("localhost", 8080))
except Exception as e:
    print('Server not found or not open', e)
    sys.exit()


Base_api = f"https://match.yuanrenxue.cn/api/match/6"
proxy = "127.0.0.1:7890"
proxies = {
    "http": "http://" + proxy,
    "https": "http://" + proxy
}


def get_data(t, page):
    msg = json.dumps({'t': t, 'page': page})
    s.sendall(msg.encode())
    data = s.recv(1024)
    print('Received tcp_data: ', data.decode())
    return data.decode()


def every_page(page, session, q):
    count = 0
    t = int(time.time()) * 1000
    tcpData = json.loads(get_data(t, page))
    q += f'{page}-{t}|'
    params = {
        'page': page,
        'm': tcpData['m'],
        'q': q
    }
    response = session.get(url = Base_api, params=params, proxies = proxies)
    print(response.json())
    data = response.json()["data"]
    for d in data:
        count += d["value"] * 24
    print(count)
    return count


def crawl():
    count = 0
    q = ''
    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36 Edg/116.0.1938.69', 
        'Cookie': 'sessionid=f361r96pkphoqqfiw7bjrxz6xqoil9rp'
    }
    session = requests.session()
    session.headers= headers
    for i in range(5):
        time.sleep(5)
        count += every_page(i + 1, session, q)
    print(count)
    s.close()


if __name__ == '__main__':
    crawl()