FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /app

VOLUME /app/db

EXPOSE 5000

COPY dotnetcore.csproj dotnetcore.csproj

RUN dotnet restore

COPY . /app

CMD dotnet run
