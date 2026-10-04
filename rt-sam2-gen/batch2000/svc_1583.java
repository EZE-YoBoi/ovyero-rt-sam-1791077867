// Service module 1583 (codemod batch b2000)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record1583 {
    public final String key;
    public final int value;

    public Record1583(String key, int value) { this.key = key; this.value = value; }

    public static List<Record1583> normalize(List<Map<String, Object>> items) {
        List<Record1583> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record1583(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
