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
smtp_username = 'correo@domain.com'
smtp_password = 'Password'


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"], 
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
    cedula: str
    celular: str
    correo: str
    tipo_queja: str


@app.get("/obtener_json")
def obtener_json():
    return json_data

@app.post("/procesar_informacion")
def procesar_informacion(input_data: InputData):
    try:
        nueva_informacion = input_data.dict()

        json_data.append(nueva_informacion)

        Subject = (f'Queja recibida: {input_data.nombre} en {input_data.centro_comercial}')
        msg = MIMEMultipart()
        msg['From'] = 'copiadeseguridad@creacionesnadar.com'
        msg['To'] = 'jduque@nadar.com.co'
        msg['Subject'] = Subject

        body = (f"""
Estimado equipo de atención al cliente,

Se ha recibido una nueva queja que requiere su gestión. A continuación, se presentan los detalles:

Nombre del cliente: {input_data.nombre}
Numero de documento: {input_data.cedula}
Correo: {input_data.correo}
Celular: {input_data.celular}
Centro comercial: {input_data.centro_comercial}
Tipo de queja: {input_data.tipo_queja}
Descripción de la queja: 
{input_data.descipcion}

Agradecemos su compromiso y dedicación para resolver este asunto.


Saludos cordiales,
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
