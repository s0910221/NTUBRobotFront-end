import requests
from bs4 import BeautifulSoup

url = 'https://scsanctions.un.org/al-qaida/'
html = requests.get(url)
soup = BeautifulSoup(html.text, 'xml')

with open("./聯合國安理會BlackList.xml",'wb') as f:
    f.write(soup.encode())
    f.close()
    
    
import requests
from bs4 import BeautifulSoup

url = 'http://web.pcc.gov.tw/vms/rvlmd/QueryApproveRV.do?type=xml'
html = requests.get(url)
soup = BeautifulSoup(html.text, 'xml')

with open("./政府拒絕往來戶BlackList.xml",'wb') as f:
    f.write(soup.encode())
    f.close()