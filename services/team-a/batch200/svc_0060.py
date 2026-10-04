"""Service module 60 (codemod batch ta200)."""
import logging
from dataclasses import dataclass

log = logging.getLogger(__name__)


@dataclass
class Record60:
    key: str
    value: int = 0


def normalize_60(items):
    out = []
    for it in items:
        if it is None:
            continue
        out.append(Record60(key=str(it.get("key", "")), value=int(it.get("value", 0))))
    log.debug("normalized %d records", len(out))
    return out
