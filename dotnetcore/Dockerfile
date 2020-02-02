FROM mcr.microsoft.com/dotnet/core/sdk:3.1 as builder

WORKDIR /src

COPY dotnetcore.csproj dotnetcore.csproj

RUN dotnet restore

COPY . /src

RUN dotnet publish --self-contained --runtime=linux-x64 

FROM mcr.microsoft.com/dotnet/core/runtime:3.1

WORKDIR /app

VOLUME /app/db

ENV ASPNETCORE_URLS http://*:5000

EXPOSE 5000

COPY --from=builder /src/bin/Debug/netcoreapp3.1/linux-x64/ .

CMD dotnet dotnetcore.dll
