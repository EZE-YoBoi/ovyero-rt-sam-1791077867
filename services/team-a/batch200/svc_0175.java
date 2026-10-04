// Service module 175 (codemod batch ta200)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record175 {
    public final String key;
    public final int value;

    public Record175(String key, int value) { this.key = key; this.value = value; }

    public static List<Record175> normalize(List<Map<String, Object>> items) {
        List<Record175> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record175(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
