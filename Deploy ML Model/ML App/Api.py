from flask import Flask, render_template, request, jsonify
import pickle
import numpy as np

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/predict', methods=['POST'])
def predict():

    model = pickle.load(open("knn_model.pkl","rb"))

    features = request.get_json(force=True)
    sepal_length = float(features["sepal_length"])
    sepal_width = float(features["sepal_width"])
    petal_length = float(features["petal_length"])
    petal_width = float(features["petal_width"])

    data = np.array([[sepal_length, sepal_width, petal_length, petal_width]])

    prediction = model.predict(data)
    
    response = {'prediction': int(prediction[0])}
    return response


if __name__ == '__main__':
    app.run(debug=True)
