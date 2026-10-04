// Package svc174 (codemod batch b300)
package svc174

import "log"

type Record struct {
	Key   string
	Value int
}

func Normalize(items []map[string]interface{}) []Record {
	out := make([]Record, 0, len(items))
	for _, it := range items {
		if it == nil {
			continue
		}
		k, _ := it["key"].(string)
		v, _ := it["value"].(int)
		out = append(out, Record{Key: k, Value: v})
	}
	log.Printf("normalized %d records", len(out))
	return out
}
