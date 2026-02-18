from google import genai
from postgres import Postgres
from psycopg2 import errors
db = Postgres()
#client = genai.Client(api_key="API_KEY")

def create_next():
    response = client.models.generate_content(
        model="gemini-3-flash-preview", contents="Create only a 100 word short story at B1 level spanish without any of the extras"
    )
    return response.text

def create_stories_db():
    try:
        db.run("CREATE TABLE stories (ID int, title text, story text)")
        return True
    except errors.DuplicateTable:
        return False

def add_story_to_stories_db(title, content):
    if create_stories_db():
        maxID = 1
    else:
        maxID = db.all("SELECT MAX(id) FROM stories")[0] + 1

    db.run("INSERT INTO stories (ID, title, story) VALUES (%s, %s, %s)", (maxID, title, content))
    print("Story has bin introduced with the MaxID:", maxID)
