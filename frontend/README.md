<h1>Instalación</h1>

Para instalar el proyecto localmente:

<h3>Back-End (FastAPI)</h3>

Clona el repositorio del Back-End:

```bash
  git clone https://github.com/No-Country/s14-21-n-python
```

Instala poetry:

```bash
  pip install pipx
  pipx ensurepath
  pipx install poetry
```

Instala las dependencias utilizando poetry:

```bash
  poetry install
```

Configura la base de datos PostgreSQL en el archivo de configuración.

Aplica las migraciones:

```bash
  alembic upgrade head
```

Inicia el servidor FastAPI:

```bash
  uvicorn main:app --reload
```

<h3>Front-End (React)</h3>

Clona el repositorio del frontend:

```BASH
  git clone https://github.com/No-Country/s14-21-n-python
```

Instala las dependencias utilizando npm:

```BASH
  npm install
```

Configura la URL del backend en los archivos de configuración:

```BASH
  npm install
```

Inicia la aplicación React:

```BASH
  npm run dev
```

<br>

<!-- USAGE EXAMPLES -->
