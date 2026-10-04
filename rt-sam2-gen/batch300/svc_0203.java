// Service module 203 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record203 {
    public final String key;
    public final int value;

    public Record203(String key, int value) { this.key = key; this.value = value; }

    public static List<Record203> normalize(List<Map<String, Object>> items) {
        List<Record203> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record203(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
