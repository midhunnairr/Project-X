import os
from celery import Celery

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "logbook.settings")

app = Celery("logbook")

app.config_from_object("django.conf:settings", namespace="CELERY")
app.autodiscover_tasks()