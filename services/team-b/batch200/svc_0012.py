"""Service module 12 (codemod batch tb200)."""
import logging
from dataclasses import dataclass

log = logging.getLogger(__name__)


@dataclass
class Record12:
    key: str
    value: int = 0


def normalize_12(items):
    out = []
    for it in items:
        if it is None:
            continue
        out.append(Record12(key=str(it.get("key", "")), value=int(it.get("value", 0))))
    log.debug("normalized %d records", len(out))
    return out
