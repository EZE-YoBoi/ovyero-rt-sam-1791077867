// Service module 127 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record127 {
    public final String key;
    public final int value;

    public Record127(String key, int value) { this.key = key; this.value = value; }

    public static List<Record127> normalize(List<Map<String, Object>> items) {
        List<Record127> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record127(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
