// Service module 31 (codemod batch b100)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record31 {
    public final String key;
    public final int value;

    public Record31(String key, int value) { this.key = key; this.value = value; }

    public static List<Record31> normalize(List<Map<String, Object>> items) {
        List<Record31> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record31(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
