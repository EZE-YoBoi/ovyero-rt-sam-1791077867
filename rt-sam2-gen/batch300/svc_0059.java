// Service module 59 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record59 {
    public final String key;
    public final int value;

    public Record59(String key, int value) { this.key = key; this.value = value; }

    public static List<Record59> normalize(List<Map<String, Object>> items) {
        List<Record59> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record59(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
