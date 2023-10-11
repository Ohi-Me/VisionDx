from flask import Flask, jsonify, request
from flask_cors import CORS
import pickle

app = Flask(__name__)
CORS(app)

# Load the saved models
diabetes_model = pickle.load(open('TrainedDx/DiabeticModel.sav', 'rb'))
heart_model = pickle.load(open('TrainedDx/KHeartModel.sav', 'rb'))

@app.route("/api/predict_diabetes", methods=['POST'])
def predict_diabetes():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Invalid data format"}), 400

        # Extract input features
        Pregnancies = data.get("Pregnancies")
        Glucose = data.get("Glucose")
        BloodPressure = data.get("BloodPressure")
        SkinThickness = data.get("SkinThickness")
        Insulin = data.get("Insulin")
        bmi = data.get("bmi")
        DiabetesPedigreeFunction = data.get("DiabetesPedigreeFunction")
        Age = data.get("Age")

        # Validate the input data (e.g., check if numeric fields are numbers)

        # Predict if the person is diabetic or not
        diab_prediction = diabetes_model.predict([[Pregnancies, Glucose, BloodPressure, SkinThickness, Insulin, bmi, DiabetesPedigreeFunction, Age]])

        diab_diagnosis = 'The person is diabetic' if diab_prediction[0] == 1 else 'The person is not diabetic'

        return jsonify({"message": diab_diagnosis})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route("/api/predict_heart_disease", methods=['POST'])
def predict_heart_disease():
    try:
        data = request.json
        if not data:
            return jsonify({"error": "Invalid data format"}), 400

        # Extract input features
        age = data.get("age")
        sex = data.get("sex")
        cp = data.get("cp")
        trestbps = data.get("trestbps")
        chol = data.get("chol")
        fbs = data.get("fbs")
        restecg = data.get("restecg")
        thalach = data.get("thalach")
        exang = data.get("exang")
        oldpeak = data.get("oldpeak")
        slope = data.get("slope")
        ca = data.get("ca")
        thal = data.get("thal")
        
        # Validate the input data (e.g., check if numeric fields are numbers)

        # Predict heart disease
        heart_prediction = heart_model.predict([[age, sex, cp, trestbps, chol, fbs, restecg, thalach, exang, oldpeak, slope, ca, thal]])

        heart_diagnosis = 'The person has heart disease' if heart_prediction[0] == 0 else 'The person does not have heart disease'

        return jsonify({"message": heart_diagnosis})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True, port=8080)
