import os

from flask import Flask, render_template


# Set the static, template folders to root.
app = Flask(__name__, template_folder="", static_folder="", static_url_path="")

@app.route("/")
def index():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host=os.getenv('IP', '0.0.0.0'),port=int(os.getenv('PORT', 8080)))
