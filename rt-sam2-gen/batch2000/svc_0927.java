// Service module 927 (codemod batch b2000)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record927 {
    public final String key;
    public final int value;

    public Record927(String key, int value) { this.key = key; this.value = value; }

    public static List<Record927> normalize(List<Map<String, Object>> items) {
        List<Record927> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record927(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
