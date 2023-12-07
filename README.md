# lapras-api

[![npm version](https://badge.fury.io/js/lapras-api.svg)](https://badge.fury.io/js/lapras-api)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Overview

LAPRAS Public API Client for Node.js

## Installation

You can install this library using npm:

```shell
npm install lapras-api
```

## Usage

```js
import { fetchLaprasData } from "lapras-api";

const res = await fetchLaprasData("{share_id}");

// LAPRAS登録のユーザー名
console.log(res.name);
// => LAPRAS太郎

// 技術力スコア
console.log(res.e_score);
// => 3.4

// Qiita記事
console.log(res.qiita_articles);
// => [{"title": "hogehoge", "url": "https://qiita.com/hogehoge"}, "tags" ["foo"], "headlines": ["bar"], "stockers_count": 3, "updated_at": "020-07-26T08:10:11"]
```

## Links

- [API仕様書](https://github.com/lapras-inc/public-api-schema)
- [API仕様書 (OpenAPI形式)](./docs/openapi.yaml)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
