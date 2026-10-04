// Service module 275 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record275 {
    public final String key;
    public final int value;

    public Record275(String key, int value) { this.key = key; this.value = value; }

    public static List<Record275> normalize(List<Map<String, Object>> items) {
        List<Record275> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record275(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
