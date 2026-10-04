// Service module 103 (codemod batch tb200)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record103 {
    public final String key;
    public final int value;

    public Record103(String key, int value) { this.key = key; this.value = value; }

    public static List<Record103> normalize(List<Map<String, Object>> items) {
        List<Record103> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record103(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
