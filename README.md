# AlQuran JS

A lightweight JavaScript/TypeScript library for accessing Quran data including Surahs, Ayat, and Juz.

---

## 📦 Installation

```bash
npm install alquran-js
```

or

```bash
pnpm add alquran-js
```

---

## ✨ Features

- Get a specific Ayah
- Get full Surah or partial range
- Get Juz data
- Get number of Ayat in a Surah
- Get Revelation place of Surah
- Fully TypeScript supported

---

## 🚀 Usage

```ts
import {
  getAyah,
  getSurah,
  getJuz,
  getAyatCount,
  getRevelationPlace
} from "alquran-js";
```

---

## 📖 API Reference

### getAyah

Get a specific Ayah by number.

```ts
getAyah(5);
```

Returns:
```ts
string
```

---

### getSurah

Get all or part of a Surah.

```ts
getSurah(1);
getSurah(2, 1, 5);
```

Returns:
```ts
string[]
```

---

### getJuz

Get all or part of a Juz.

```ts
getJuz(1);
getJuz(2, 1, 5);
```

Returns:
```ts
string[]
```

---

### getAyatCount

```ts
getAyatCount(1);
```

Returns:
```ts
number
```

---

### getRevelationPlace

```ts
getRevelationPlace(1);
```

Returns:
```ts
string
```

---

## ⚠️ Errors

Throws errors on invalid input:
- Invalid surah number
- Invalid ayah number
- Invalid juz number

---

## 📜 License

MIT
