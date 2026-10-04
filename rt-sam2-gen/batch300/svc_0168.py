"""Service module 168 (codemod batch b300)."""
import logging
from dataclasses import dataclass

log = logging.getLogger(__name__)


@dataclass
class Record168:
    key: str
    value: int = 0


def normalize_168(items):
    out = []
    for it in items:
        if it is None:
            continue
        out.append(Record168(key=str(it.get("key", "")), value=int(it.get("value", 0))))
    log.debug("normalized %d records", len(out))
    return out
