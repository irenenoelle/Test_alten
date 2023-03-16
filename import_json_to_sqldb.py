import json
import pymysql
json_obj = json.load(open('./front/src/assets/products.json'))
con = pymysql.connect(host="db4free.net", user="noelledele", password="s!Hk25_pwWMi2Nh", db="databaseforalten")
cursor = con.cursor()

for item in json_obj['data']:
    id=item.get("id")
    code=item.get("code")
    name=item.get("name")
    description=item.get("description")
    image=item.get("image")
    price=item.get("price")
    category=item.get("category")
    quantity=item.get("quantity")
    inventoryStatus=item.get("inventoryStatus")
    rating=item.get("rating")
    cursor.execute("insert into products(id, code, name, description, image, price, category, quantity, inventoryStatus, rating) value(%s,%s,%s,%s,%s,%s,%s,%s,%s,%s)", (id, code, name, description, image, price, category, quantity, inventoryStatus, rating))
con.commit()
cursor.close()


