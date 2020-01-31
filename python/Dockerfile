FROM python:3.7

WORKDIR /app

COPY . .

RUN pip install pipenv

RUN pipenv install

CMD pipenv run python main.py
