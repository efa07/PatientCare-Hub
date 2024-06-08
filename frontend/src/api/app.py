from flask import Flask, request, jsonify  # Import request module for handling POST requests
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Database configuration
db_config = {
    'host': 'localhost',
    'user': 'admin',
    'password': 'root',
    'database': 'userdata',
}

# Function to create database if it doesn't exist
def create_database():
    try:
        connection = mysql.connector.connect(
            host=db_config['host'],
            user=db_config['user'],
            password=db_config['password']
        )
        cursor = connection.cursor()
        cursor.execute("CREATE DATABASE IF NOT EXISTS userdata")
        print("Database 'userdata' created successfully")
    except mysql.connector.Error as err:
        print(f"Error creating database: {err}")
    finally:
        if 'connection' in locals():
            connection.close()

# Connect to MySQL database
create_database()  # Call create_database function to ensure database existence
db = mysql.connector.connect(**db_config)

# Function to create patients table if it doesn't exist
def create_table():
    try:
        cursor = db.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS patients (
                id INT AUTO_INCREMENT PRIMARY KEY,
                first_name VARCHAR(255),
                last_name VARCHAR(255),
                age INT,
                image VARCHAR(255),
                address VARCHAR(255),
                created_date DATE
            )
        """)
        print("Table 'patients' created successfully")
    except mysql.connector.Error as err:
        print(f"Error creating table: {err}")

# Call create_table function to ensure table existence
create_table()

# Define routes
@app.route('/patients', methods=['GET'])
def get_patients():
    cursor = db.cursor(dictionary=True)
    cursor.execute("SELECT * FROM patients")
    patients = cursor.fetchall()
    print(patients)
    return jsonify(patients)

@app.route('/patients', methods=['POST'])
def add_patient():
    try:
        data = request.get_json()  # Get patient data from request body
        cursor = db.cursor()
        sql = """
            INSERT INTO patients (first_name, last_name, age, image, address, created_date)
            VALUES (%s, %s, %s, %s, %s, NOW())  # Use NOW() to set the current date for created_date
        """
        # Execute the SQL query with patient data
        cursor.execute(sql, (data['first_name'], data['last_name'], data['age'], data['image'], data['address']))
        db.commit()  # Commit the transaction
        return jsonify({'message': 'Patient added successfully'})
    except mysql.connector.Error as err:
        print(f"Error adding patient: {err}")
        return jsonify({'error': 'Failed to add patient'}), 500  # Return error response with status code 500


if __name__ == '__main__':
    app.run(debug=True)
