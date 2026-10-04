// Service module 151 (codemod batch tb200)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record151 {
    public final String key;
    public final int value;

    public Record151(String key, int value) { this.key = key; this.value = value; }

    public static List<Record151> normalize(List<Map<String, Object>> items) {
        List<Record151> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record151(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
