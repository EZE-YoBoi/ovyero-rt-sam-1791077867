// Service module 55 (codemod batch b100)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record55 {
    public final String key;
    public final int value;

    public Record55(String key, int value) { this.key = key; this.value = value; }

    public static List<Record55> normalize(List<Map<String, Object>> items) {
        List<Record55> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record55(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
