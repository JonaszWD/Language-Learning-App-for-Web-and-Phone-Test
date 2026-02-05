from postgres import Postgres
from psycopg2 import errors
from fastapi import APIRouter

router = APIRouter(prefix="/words", tags=["words"])

db = Postgres()

def create_known_words_db():
    try:
        db.run("CREATE TABLE KnownWords (word text, definition text, translation text)")
        return True
    except errors.DuplicateTable:
        return False

def add_words_to_known_words_db(word, definition, translation):
    create_known_words_db()
    try:
        db.all("SELECT * FROM KnownWords WHERE word=%s", word)
        return False
    except IndentationError:
        db.run("INSERT INTO KnownWords VALUES (%s, %s, %s)", (word, definition, translation))
        return True

@router.get("/get_definition_in_known_words_db")
def get_definition_in_known_words_db(word: str):
    try:
        definition = db.run("SELECT definition FROM KnownWords WHERE word=%s", word)
        return definition
    except IndentationError:
        return None

@router.get("/get_translation_in_known_words_db")
def get_translation_in_known_words_db(word: str):
    try:
        translation = db.run("SELECT translation FROM KnownWords WHERE word=%s", word)
        return translation
    except IndentationError:
        return None