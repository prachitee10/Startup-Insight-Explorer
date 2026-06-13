@echo off
echo Setting up your Startup Funding Tracker...
python -m pip install -r requirements.txt
echo Launching your Pink Dashboard...
start http://127.0.0.1:5000
python app.py
pause