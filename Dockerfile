# install python in the container
FROM python:3.9.7-slim
# copy the local requirements.txt file to the
# /app/requirements.txt in the container
# (the /app dir will be created)
#COPY ./start.sh /start.sh
COPY ./requirements.txt /app/requirements.txt
# install the packages from the requirements.txt file in the container
RUN pip install -r /app/requirements.txt
# expose the port that uvicorn will run the app
EXPOSE 8000
# copy the local app/ folder to the /app fodler in the container
COPY app/ /app
# set the working directory in the container to be the /app
WORKDIR /app
# execute the command python main.py (in the WORKDIR) to start the app
CMD ["hypercorn","--bind","0.0.0.0:8000","main.py"]
