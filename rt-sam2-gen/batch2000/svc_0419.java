// Service module 419 (codemod batch b2000)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record419 {
    public final String key;
    public final int value;

    public Record419(String key, int value) { this.key = key; this.value = value; }

    public static List<Record419> normalize(List<Map<String, Object>> items) {
        List<Record419> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record419(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
