from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import json
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText



app = FastAPI()

smtp_server = 'smtp.zoho.com'
smtp_port = 587
smtp_username = 'copiadeseguridad@creacionesnadar.com'
smtp_password = 'Git_pel66'


app.add_middleware(
    CORSMiddleware,
    allow_origins=["creacionesnadar.com:7022"], 
    allow_credentials=True,
    allow_methods=["POST"], 
    allow_headers=["*"], 
)

try:
    with open("./datos.json", "r") as file:
        json_data = json.load(file)
except FileNotFoundError:
    json_data = []

class InputData(BaseModel):
    nombre: str
    centro_comercial: str
    descipcion: str

@app.get("/obtener_json")
def obtener_json():
    return json_data

@app.post("/procesar_informacion")
def procesar_informacion(input_data: InputData):
    try:
        nueva_informacion = input_data.dict()

        json_data.append(nueva_informacion)

        Subject = ('PQR PUNTOS DE VENTA')
        msg = MIMEMultipart()
        msg['From'] = 'copiadeseguridad@creacionesnadar.com'
        msg['To'] = 'jduque@nadar.com.co'
        msg['Subject'] = Subject
        msg['CC'] = 'mmartinez@nadar.com.co'

        body = (f"""
¡Saludos!,

Esta es una reclamación de {input_data.nombre} en el centro comercial {input_data.centro_comercial}.

queja: {input_data.descipcion}
        """)
        msg.attach(MIMEText(body, 'plain'))

        server = smtplib.SMTP(smtp_server, smtp_port)
        server.starttls()
        server.login(smtp_username, smtp_password)

        server.send_message(msg)
        server.quit()

        with open("datos.json", "w") as file:
            json.dump(json_data, file, indent=2)


        return {"mensaje": "Información procesada correctamente"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
