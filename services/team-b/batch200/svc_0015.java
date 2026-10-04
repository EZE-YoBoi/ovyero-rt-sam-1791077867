// Service module 15 (codemod batch tb200)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record15 {
    public final String key;
    public final int value;

    public Record15(String key, int value) { this.key = key; this.value = value; }

    public static List<Record15> normalize(List<Map<String, Object>> items) {
        List<Record15> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record15(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
