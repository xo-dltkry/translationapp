# API (Flask translator)

Это Flask-бэкенд переводчика (модели уже обучены; пути в `app.py` менять не нужно).

## Требования

- Python 3.12 (у тебя уже есть)
- Node.js + npm — только для фронта (`../web`)

## Установка (Windows PowerShell)

Перейди в папку бэка:

```powershell
cd "C:\Users\Lenovo\Desktop\apps\api"
```

### 1) Создать и активировать виртуальное окружение

```powershell
python -m venv .venv
.\.venv\Scripts\Activate.ps1
```

Если PowerShell ругается на запуск скриптов, выполни (один раз) и повтори активацию:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### 2) Установить PyTorch (torch)

PyTorch лучше ставить отдельной командой (CPU или CUDA).

- CPU (проще всего):

```powershell
pip install torch
```

- CUDA (если нужна GPU-версия): смотри команду на официальном конфигураторе PyTorch.

### 3) Установить остальные зависимости

```powershell
pip install -r requirements.txt
```

## Запуск

```powershell
python app.py
```

По умолчанию Flask слушает `http://localhost:5000`.

## Эндпоинты

- `GET /hcgi/api/health`
- `POST /hcgi/api/translate` (multipart/form-data)
  - `sourceLanguage`: `kk` или `ru`
  - `targetLanguage`: `ru` или `kk`
  - либо `inputText`, либо `file`

