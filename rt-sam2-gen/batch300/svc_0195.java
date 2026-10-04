// Service module 195 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record195 {
    public final String key;
    public final int value;

    public Record195(String key, int value) { this.key = key; this.value = value; }

    public static List<Record195> normalize(List<Map<String, Object>> items) {
        List<Record195> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record195(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
