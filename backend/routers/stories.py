from postgres import Postgres
import psycopg2
from fastapi import APIRouter, Query

db = Postgres()
router = APIRouter(prefix="/words", tags=["words"])

# getter Functions to allow access to SQL for React through python
@router.get("/get_story")
def get_story(ID: int):
    conn = psycopg2.connect(
        host="127.0.0.1",
        port=5432,
        dbname="postgres",
        user="jojo",
    )

    cur = conn.cursor()

    cur.execute(
        """
        SELECT id, story
        FROM stories
        WHERE id = %s
        """,
        ID
    )

    rows = cur.fetchall()

    cur.close()
    conn.close()

    return [{"id": r[0], "story": r[1]} for r in rows]

#@router.get("/get_title")
'''
def get_title(ID: int = 0):
    try:
        rows = db.all(f"SELECT id, title FROM stories WHERE ID = %s ORDER BY title DESC", ID)
        return [{"id": r["id"], "title": r["title"]} for r in rows]
    except IndentationError:
        return None
'''

@router.get("/get_title")
def get_title(title: str = Query(default="")):
    conn = psycopg2.connect(
        host="127.0.0.1",
        port=5432,
        dbname="postgres",
        user="jojo",
    )

    cur = conn.cursor()

    cur.execute(
        """
        SELECT id, title
        FROM stories
        WHERE title ILIKE %s
        ORDER BY title DESC
        """,
        (f"%{title}%",)
    )

    rows = cur.fetchall()

    cur.close()
    conn.close()

    return [{"id": r[0], "title": r[1]} for r in rows]