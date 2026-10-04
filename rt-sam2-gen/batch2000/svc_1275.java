// Service module 1275 (codemod batch b2000)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record1275 {
    public final String key;
    public final int value;

    public Record1275(String key, int value) { this.key = key; this.value = value; }

    public static List<Record1275> normalize(List<Map<String, Object>> items) {
        List<Record1275> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record1275(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
