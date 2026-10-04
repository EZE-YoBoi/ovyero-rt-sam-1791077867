// Service module 883 (codemod batch b2000)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record883 {
    public final String key;
    public final int value;

    public Record883(String key, int value) { this.key = key; this.value = value; }

    public static List<Record883> normalize(List<Map<String, Object>> items) {
        List<Record883> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record883(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
