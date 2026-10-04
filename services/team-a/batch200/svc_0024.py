"""Service module 24 (codemod batch ta200)."""
import logging
from dataclasses import dataclass

log = logging.getLogger(__name__)


@dataclass
class Record24:
    key: str
    value: int = 0


def normalize_24(items):
    out = []
    for it in items:
        if it is None:
            continue
        out.append(Record24(key=str(it.get("key", "")), value=int(it.get("value", 0))))
    log.debug("normalized %d records", len(out))
    return out
