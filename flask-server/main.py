from flask import Flask, request, jsonify
from twilio.rest import Client
import os
import sqlite3

app = Flask(__name__)

# Initialize Twilio client
account_sid = 'AC7ad5c2f3a4118e3868b609b91bcf54e4'
auth_token = 'd39c6c4417a1bd26a426d36d5d5354c3'
twilio_client = Client(account_sid, auth_token)

# Initialize SQLite database connection
conn = sqlite3.connect('alerts.db')

# Define database schema
conn.execute('''CREATE TABLE IF NOT EXISTS alerts
             (id INTEGER PRIMARY KEY AUTOINCREMENT,
              latitude FLOAT NOT NULL,
              longitude FLOAT NOT NULL,
              message TEXT NOT NULL,
              is_solved INTEGER DEFAULT 0)''')

@app.route("/")
def home():
    return "Hello, World!"

@app.route("/alert", methods=['POST'])
def alert():
    data = request.json
    latitude = data.get('latitude')
    longitude = data.get('longitude')
    message = data.get('message')

    # Store the alert in the database
    cursor = conn.cursor()
    cursor.execute("INSERT INTO alerts (latitude, longitude, message) VALUES (?, ?, ?)",
                   (latitude, longitude, message))
    conn.commit()

    # Send alerts to emergency contacts
    send_alerts(latitude, longitude, message)

    return jsonify({'message': 'Alert received. Help is on the way.'})

@app.route("/send_alert", methods=['POST'])
def send_alerts(latitude, longitude, message):
    # Get the list of emergency contacts from the database
    cursor = conn.cursor()
    cursor.execute("SELECT phone_number FROM emergency_contacts")
    contacts = cursor.fetchall()

    # Send alerts to each contact using Twilio
    for contact in contacts:
        phone_number = contact[0]
        twilio_client.messages.create(
            body=message,
            from_='+13184963426',
            to=phone_number,
            media_url=f'https://www.google.com/maps/search/{latitude},{longitude}'
        )

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)