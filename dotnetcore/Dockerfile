FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /app

RUN mkdir db

COPY . /app

EXPOSE 5000

RUN dotnet restore

CMD dotnet run
