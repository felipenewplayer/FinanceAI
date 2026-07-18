from pathlib import Path
import logging

# Define o caminho para a pasta de logs dentro do backend
BASE_DIR = Path(__file__).resolve().parent # Ajuste conforme a estrutura do arquivo
LOG_DIR = BASE_DIR / "logs"
LOG_DIR.mkdir(parents=True, exist_ok=True)

log_file = LOG_DIR / "app.log"

logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    handlers=[
        logging.FileHandler(log_file),
        logging.StreamHandler() # Também manda para o console
    ]
)

def get_logger(name: str):
    return logging.getLogger(name)