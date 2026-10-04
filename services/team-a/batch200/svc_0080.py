"""Service module 80 (codemod batch ta200)."""
import logging
from dataclasses import dataclass

log = logging.getLogger(__name__)


@dataclass
class Record80:
    key: str
    value: int = 0


def normalize_80(items):
    out = []
    for it in items:
        if it is None:
            continue
        out.append(Record80(key=str(it.get("key", "")), value=int(it.get("value", 0))))
    log.debug("normalized %d records", len(out))
    return out
