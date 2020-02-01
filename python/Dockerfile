FROM python:3.7

RUN pip install pipenv

WORKDIR /app

COPY Pipfile .

RUN pipenv install

COPY main.py .

CMD pipenv run python main.py
