// Service module 187 (codemod batch tb200)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record187 {
    public final String key;
    public final int value;

    public Record187(String key, int value) { this.key = key; this.value = value; }

    public static List<Record187> normalize(List<Map<String, Object>> items) {
        List<Record187> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record187(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
