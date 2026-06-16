// 10/ jan / 2026

for (let i = 1; i <= 5; i++) {
    if (i == 4) break;
    console.log(i); // 1 2 3
}

for (let i = 1; i <= 5; i++) {
    if (i == 3) continue;   // 1 2 4 5
    console.log(i);
}

