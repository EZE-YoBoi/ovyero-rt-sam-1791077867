// Service module 967 (codemod batch b2000)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record967 {
    public final String key;
    public final int value;

    public Record967(String key, int value) { this.key = key; this.value = value; }

    public static List<Record967> normalize(List<Map<String, Object>> items) {
        List<Record967> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record967(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
