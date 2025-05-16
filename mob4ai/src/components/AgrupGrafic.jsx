function groupDataByInterval(data, intervalMs = 60000) {
  const grouped = new Map();

  data.forEach((entry) => {
    const timeGroup = Math.floor(entry.timestamp / intervalMs) * intervalMs;

    if (!grouped.has(timeGroup)) {
      grouped.set(timeGroup, []);
    }
    grouped.get(timeGroup).push(entry);
  });

  const result = [];
  for (const [timestamp, group] of grouped.entries()) {
    const avg = (key) =>
      group.reduce((sum, item) => sum + (item[key] ?? 0), 0) / group.length;

    result.push({
      timestamp,
      inst_curr: avg("inst_curr"),
      rem_cap: avg("rem_cap"),
      voltage: avg("voltage"),
      battery_level: avg("battery_level"),
      battery_status: group[0]?.battery_status,
      plug_type: group[0]?.plug_type,
      temp_bat: avg("temp_bat"),
      temp_cpu: avg("temp_cpu"),
    });
  }

  // Ordenar por timestamp
  result.sort((a, b) => a.timestamp - b.timestamp);

  return result;
}
