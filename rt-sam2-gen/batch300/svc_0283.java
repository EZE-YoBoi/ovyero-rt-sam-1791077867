// Service module 283 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record283 {
    public final String key;
    public final int value;

    public Record283(String key, int value) { this.key = key; this.value = value; }

    public static List<Record283> normalize(List<Map<String, Object>> items) {
        List<Record283> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record283(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
