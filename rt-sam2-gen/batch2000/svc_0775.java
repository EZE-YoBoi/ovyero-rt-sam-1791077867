// Service module 775 (codemod batch b2000)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record775 {
    public final String key;
    public final int value;

    public Record775(String key, int value) { this.key = key; this.value = value; }

    public static List<Record775> normalize(List<Map<String, Object>> items) {
        List<Record775> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record775(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
