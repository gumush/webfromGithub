from fastapi import FastAPI ,Request
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates
from fastapi.responses import HTMLResponse, FileResponse

app = FastAPI()

templates = Jinja2Templates(directory="templates")

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def show_test(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/home")
async def show_test(request: Request):
    return FileResponse('static/index.html', media_type='text/html')
