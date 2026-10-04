// Service module 171 (codemod batch b300)
package com.example.svc;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public final class Record171 {
    public final String key;
    public final int value;

    public Record171(String key, int value) { this.key = key; this.value = value; }

    public static List<Record171> normalize(List<Map<String, Object>> items) {
        List<Record171> out = new ArrayList<>();
        for (Map<String, Object> it : items) {
            if (it == null) continue;
            out.add(new Record171(String.valueOf(it.getOrDefault("key", "")), (Integer) it.getOrDefault("value", 0)));
        }
        return out;
    }
}
