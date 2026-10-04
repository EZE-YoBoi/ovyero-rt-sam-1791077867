// Service module 115 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record115 {
    public final String key;
    public final int value;

    public Record115(String key, int value) { this.key = key; this.value = value; }

    public static List<Record115> normalize(List<Map<String, Object>> items) {
        List<Record115> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record115(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
