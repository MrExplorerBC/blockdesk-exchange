# BlockDesk Exchange Desktop

Installable Windows and Ubuntu desktop application for managing high-value digital-asset exchange requests from USD 10,000.

## Security posture

- Electron renderer is sandboxed with Node integration disabled and context isolation enabled.
- Renderer access is limited to a narrow, validated IPC bridge.
- The administrator creates an email/password login on first launch.
- Passwords are hashed with scrypt and configuration/order records are encrypted using the operating system credential store.
- Login attempts are rate-limited.
- Mainnet deposit instructions and payouts are deliberately locked.

This is an order-management foundation, not a licensed or production-ready exchange. Before accepting funds, integrate licensed custody, unique deposit addresses, live signed price feeds, KYC/AML, sanctions and wallet screening, chain-specific confirmation workers, double-entry accounting, independent security review, and jurisdiction-specific legal approval.

## Development

```bash
npm install
npm run dev
npm test
npm run build
```

## Installers

Windows: `npm run dist:win`  
Ubuntu: `npm run dist:linux`

Pushing a version tag such as `v1.0.0` runs GitHub Actions on Windows and Ubuntu and attaches the generated `.exe`, `.AppImage`, and `.deb` packages to the GitHub Release.
