# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

## Lưu lời chúc vào Google Sheet

Biểu mẫu lời chúc gửi một `POST` đến Google Apps Script Web App. Tạo một Google
Sheet với hàng đầu tiên là `submittedAt`, `name`, `attendance`, `wish`, sau đó mở
**Extensions → Apps Script** và dán đoạn mã sau:

```js
function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0]
  const data = JSON.parse(e.postData.contents)
  sheet.appendRow([data.submittedAt, data.name, data.attendance, data.wish])
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON)
}
```

Deploy script as **Web app**, chọn “Anyone” ở mục quyền truy cập, rồi copy URL
`/exec` vào file `.env` (xem `.env.example`):

```bash
VITE_GOOGLE_SHEET_ENDPOINT=https://script.google.com/macros/s/DEPLOYMENT_ID/exec
```

Khởi động lại Vite sau khi thay đổi biến môi trường. Không commit file `.env`.
