// Service module 167 (codemod batch ta200)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record167 {
    public final String key;
    public final int value;

    public Record167(String key, int value) { this.key = key; this.value = value; }

    public static List<Record167> normalize(List<Map<String, Object>> items) {
        List<Record167> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record167(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
