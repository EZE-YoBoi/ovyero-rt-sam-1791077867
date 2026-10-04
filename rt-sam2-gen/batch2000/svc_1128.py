"""Service module 1128 (codemod batch b2000)."""
import logging
from dataclasses import dataclass

log = logging.getLogger(__name__)


@dataclass
class Record1128:
    key: str
    value: int = 0


def normalize_1128(items):
    out = []
    for it in items:
        if it is None:
            continue
        out.append(Record1128(key=str(it.get("key", "")), value=int(it.get("value", 0))))
    log.debug("normalized %d records", len(out))
    return out
